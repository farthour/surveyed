import React, { PureComponent } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./Surveyed.module.css";

// Components
import Question from "./Question";
import Response from "./Response";
import Navigator from "./Navigator";

// Types
import {
  SurveyStep,
  ProfileResponseData,
  MappedSteps,
  QuestionResponse,
  SurveyStepAttributes,
} from "./types";

type Props = {
  surveyId?: string;
  allSteps: SurveyStepAttributes[];
  mappedSteps: MappedSteps[];
  onStarting: () => void;
  onReady: () => void; // Return new generated surveyId and clientId
  onEmpty: () => void;
  onCompleted: () => void;
  onBack: () => void; // return
  onNext: (response: {
    surveyId: string;
    clientId: string;
    user_response: string | string[];
    question_identifier: string;
  }) => void;
};

type State = {
  surveyId: string;
  clientId: string;
  surveyStatus:
    | "notready"
    | "starting"
    | "ready"
    | "empty"
    | "running"
    | "completed";
  completedSteps?: SurveyStep[];
  step: SurveyStep;
  isFirstStep: boolean;
  isLastStep?: boolean;
  allSteps: SurveyStepAttributes[];
  mappedSteps: MappedSteps[];
  profileData: ProfileResponseData;
};

class Surveyed extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      surveyId: "",
      clientId: "",
      surveyStatus: "notready",
      allSteps: this.props.allSteps || [],
      mappedSteps: this.props.mappedSteps || [],
      step: {
        attributes: {
          id: "",
          title: "",
          description: null,
          identifier: "",
          response_display_type: "horizontal",
          response_display_style: {},
          response_interaction_format: null,
          type: null,
          placeholder: null,
          submit_btn_text: null,
          continue_btn_text: null,
          maximum_selections: 1,
          continue_after_delay: null,
          responses: [],
        },
        profile_responses: {},
        percent_complete: 0,
        total_steps: 0,
        current_step: 0,
      },
      isFirstStep: true,
      profileData: {
        profile_responses: {},
        steps_completed: [],
      },
    };

    this.delay = 0;

    this.generateSurveyId = this.generateSurveyId.bind(this);
    this.generateClientId = this.generateClientId.bind(this);
    this.initializeSurvey = this.initializeSurvey.bind(this);
    this.handleResponseClick = this.handleResponseClick.bind(this);
    this.handleBackClicked = this.handleBackClicked.bind(this);
    this.handleNextClicked = this.handleNextClicked.bind(this);
    this.sendResponseAndContinue = this.sendResponseAndContinue.bind(this);

    this.initSurvey = this.initSurvey.bind(this);
    this.getFirstStepOfSurvey = this.getFirstStepOfSurvey.bind(this);
    this.goToPreviousStep = this.goToPreviousStep.bind(this);
    this.findQuestionByQuestionIdentifier =
      this.findQuestionByQuestionIdentifier.bind(this);
    this.postQuestionResponse = this.postQuestionResponse.bind(this);
    this.goToNextStep = this.goToNextStep.bind(this);
    this.getNextQuestionIdentifierFromCurrentResponse =
      this.getNextQuestionIdentifierFromCurrentResponse.bind(this);
    this.makeResponseStep = this.makeResponseStep.bind(this);
  }

  delay: number;
  // delay: ReturnType<typeof setTimeout>;

  componentDidMount() {
    this.initializeSurvey();
  }

  componentDidUpdate(_: Props, prevState: State) {
    if (prevState?.step) {
      // Check if prev question and current question are different
      if (
        this.state.step.attributes?.identifier !==
        prevState.step.attributes?.identifier
      ) {
        // if current step is last step
        // then set state lastStep to true
        if (this.state.step.is_last_step)
          this.setState({
            isLastStep: this.state.step.is_last_step,
            isFirstStep: false,
          });
        // if not last step
        else
          this.setState(
            {
              // step: this.state.step,
              isFirstStep: false,
            },
            () => {
              // if there is a delay option set in step
              // then go to next step after delay
              if (this.state.step.attributes.continue_after_delay)
                this.delay = window.setTimeout(
                  this.sendResponseAndContinue,
                  this.state.step.attributes.continue_after_delay
                );
              else if (this.delay) clearTimeout(this.delay);
            }
          );
      }
    }
  }

  generateSurveyId(): string {
    return uuidv4();
  }

  generateClientId(): string {
    return uuidv4();
  }

  initializeSurvey() {
    this.setState({ surveyStatus: "starting" }, () => {
      this.props.onStarting();

      if (!this.props.allSteps)
        return this.setState({ surveyStatus: "empty" }, () =>
          this.props.onEmpty()
        );

      this.setState(
        {
          surveyId: this.props.surveyId || this.generateSurveyId(),
          clientId: this.generateClientId(),
          // @ts-ignore
          step: this.initSurvey(),
        },
        () => {
          this.setState({ surveyStatus: "ready" }, () => {
            this.props.onReady();
            this.setState({ surveyStatus: "running" });
          });
        }
      );
    });
  }

  handleResponseClick(user_response: string) {
    let { attributes } = this.state.step;

    // Check if multi selection is allowed
    // if only single selection is allowed
    if (attributes.maximum_selections === 1) {
      this.setState((prevState) => {
        let newState = {
          step: {
            ...prevState.step,
            profile_responses: {
              ...prevState.step.profile_responses,
            },
          },
        };

        if (
          user_response ===
          prevState.step.profile_responses[attributes.identifier]
        )
          delete newState.step.profile_responses[attributes.identifier];
        else
          newState.step.profile_responses[attributes.identifier] =
            user_response;

        return newState;
      }, this.sendResponseAndContinue);
    } else {
      // if maximum selection limit is reached
      // then return
      if (
        this.state.step.attributes.maximum_selections ===
          this.state.step.profile_responses[attributes.identifier]?.length &&
        !this.state.step.profile_responses[attributes.identifier]?.includes(
          user_response
        )
      )
        return;

      this.setState((prevState) => {
        let newState = {
          step: {
            ...prevState.step,
            profile_responses: {
              ...prevState.step.profile_responses,
            },
          },
        };

        // prev responses of current step
        let prevResponse =
          prevState.step.profile_responses[attributes.identifier];

        let newResponse = [];

        if (prevResponse) {
          // Check if prev response exists or already selected
          // if selected then remove from array or unselect it
          if (prevResponse.includes(user_response)) {
            newResponse = prevResponse.filter(
              (response: string) => response !== user_response
            );
          } else {
            // if new option selected
            // then add to selected responses
            prevResponse.push(user_response);
            newResponse = prevResponse;
          }
        } else newResponse = [user_response];

        // if all options are unselected in the current question
        // then remove question from profile_responses
        // or set it to initial state
        if (newResponse.length === 0)
          delete newState.step.profile_responses[attributes.identifier];
        else
          newState.step.profile_responses[attributes.identifier] = newResponse;

        return newState;
      });
    }
  }

  sendResponseAndContinue(): void {
    let { attributes, profile_responses } = this.state.step;

    if (
      !profile_responses[attributes.identifier] &&
      !attributes.continue_after_delay
    )
      return;

    let response = {
      surveyId: this.state.surveyId,
      clientId: this.state.clientId,
      question_identifier: attributes.identifier,
      user_response: profile_responses[attributes.identifier] || "",
    };

    setTimeout(() => {
      let nextQuestion = this.postQuestionResponse(response);

      this.setState({ step: nextQuestion }, () => this.props.onNext(response));
    }, 1200);
  }

  handleBackClicked() {
    let prevStep = this.goToPreviousStep();

    this.setState({ step: prevStep }, () => this.props.onBack());
  }

  handleNextClicked() {
    this.sendResponseAndContinue();
  }

  // Helper Methods
  initSurvey() {
    let firstStep = this.getFirstStepOfSurvey();

    // @ts-ignore
    return this.makeResponseStep(firstStep);
  }

  // @ts-ignore
  getFirstStepOfSurvey() {
    let { allSteps } = this.state;

    if (allSteps?.length) {
      return allSteps.find((step) => step.is_initial_step);
    }
    return this.state.step;
  }

  goToPreviousStep() {
    let { profileData } = this.state;

    let prevQuestionIdentifier = profileData.steps_completed.pop();

    if (!prevQuestionIdentifier) return this.initSurvey();

    delete profileData.profile_responses[prevQuestionIdentifier];

    let question = this.findQuestionByQuestionIdentifier(
      prevQuestionIdentifier
    );

    // @ts-ignore
    return this.makeResponseStep(question);
  }

  findQuestionByQuestionIdentifier(questionIdentifier: string) {
    return this.state.allSteps.find((v) => v.identifier === questionIdentifier);
  }

  postQuestionResponse(response: QuestionResponse) {
    let { question_identifier, user_response } = response;

    let { profileData } = this.state;

    profileData.profile_responses[question_identifier] = user_response;

    profileData.steps_completed.push(question_identifier);

    return this.goToNextStep(response);
  }

  goToNextStep(response: QuestionResponse) {
    let nextQuestionIdentifier =
      this.getNextQuestionIdentifierFromCurrentResponse(response);

    if (!nextQuestionIdentifier) {
      // @ts-ignore
      return this.makeResponseStep({ identifier: "__end__" }, true);
    } else {
      let question = this.findQuestionByQuestionIdentifier(
        nextQuestionIdentifier
      );

      // @ts-ignore
      return this.makeResponseStep(question);
    }
  }

  getNextQuestionIdentifierFromCurrentResponse(response: QuestionResponse) {
    let { question_identifier, user_response } = response;

    let response_identifier = Array.isArray(user_response)
      ? user_response[0]
      : user_response;

    let { mappedSteps } = this.state;

    // @ts-ignore
    let q = mappedSteps.find((v) => {
      if (v.question_identifier === question_identifier) {
        return v;
      }
    });

    let nextQuestionIdentifier = null;

    if (q?.responses && q.responses.length) {
      // @ts-ignore
      let a = q.responses.find((r) => {
        if (r.response_identifier === response_identifier) {
          return r.next_question_identifier;
        }
      });

      if (a && a.next_question_identifier)
        nextQuestionIdentifier = a.next_question_identifier;
    } else {
      nextQuestionIdentifier = q?.next_question_identifier;
    }

    return nextQuestionIdentifier;
  }

  makeResponseStep(step: SurveyStepAttributes, isLastStep?: boolean) {
    let totalSteps = this.state.allSteps?.length;

    let { profile_responses, steps_completed } = this.state.profileData;
    let stepsCompletedCount = steps_completed?.length;

    return {
      attributes: step,
      profile_responses: profile_responses,
      percent_complete: (stepsCompletedCount / totalSteps) * 100,
      total_steps: totalSteps,
      current_step: parseInt((stepsCompletedCount + 1).toString(), 10),
      is_last_step: isLastStep,
    };
  }

  render() {
    let { step, surveyStatus, isLastStep } = this.state;

    if (isLastStep) return <p>Bye bye: {step.attributes.redirect_url}</p>;

    if (surveyStatus === "notready") return "Making survey";
    else if (surveyStatus === "starting") return "Starting survey";
    else if (surveyStatus === "empty") return "No questions to show";
    else if (surveyStatus === "completed") return "Survey completed";
    else if ((surveyStatus === "ready" || surveyStatus === "running") && step) {
      const {
        identifier,
        title,
        description,
        responses,
        response_display_type,
        response_display_shape,
        response_display_style,
        response_interaction_format,
        type,
        placeholder,
        submit_btn_text,
        maximum_selections,
        continue_btn_text,
      } = step.attributes;

      return (
        <div className={styles.Surveyed}>
          <div className={styles.Question_wrapper}>
            <Question title={title} description={description} />

            <Response
              responses={responses}
              response_display_type={response_display_type}
              response_display_shape={response_display_shape}
              response_display_style={response_display_style}
              response_interaction_format={response_interaction_format}
              type={type}
              placeholder={placeholder}
              submit_btn_text={submit_btn_text}
              selected_response={step.profile_responses[identifier]}
              maximum_selections={maximum_selections}
              handleResponseSelect={this.handleResponseClick}
            />
          </div>

          <Navigator
            isFirstStep={this.state.isFirstStep}
            continueBtnText={continue_btn_text || null}
            maximumSelections={maximum_selections}
            handleBackClicked={this.handleBackClicked}
            handleNextClicked={this.handleNextClicked}
          />
        </div>
      );
    } else return "";
  }
}

export default Surveyed;
