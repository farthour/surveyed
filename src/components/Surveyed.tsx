import React, { PureComponent } from "react";
import uuidv4 from "uuid/v4";

import styles from "./Surveyed.module.css";

// Components
import Question from "./Question";
import Response from "./Response";
import Navigator from "./Navigator";

// Types
import { SurveyStep } from "./types";

type Props = {
  surveyId?: string;
  step: SurveyStep;
  onStarting: () => void;
  onReady: (surveyCredentials: { surveyId: string; clientId: string }) => void; // Return new generated surveyId and clientId
  onEmpty: () => void;
  onCompleted: () => void;
  onBack: (surveyCredentials: { surveyId: string; clientId: string }) => string; // return
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
};

class Surveyed extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      surveyId: "",
      clientId: "",
      surveyStatus: "notready",
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
          responses: []
        },
        profile_responses: {},
        percent_complete: 0,
        total_steps: 0,
        current_step: 0
      },
      isFirstStep: true
    };

    this.delay = this.delay;

    this.generateSurveyId = this.generateSurveyId.bind(this);
    this.generateClientId = this.generateClientId.bind(this);
    this.initializeSurvey = this.initializeSurvey.bind(this);
    this.handleResponseClick = this.handleResponseClick.bind(this);
    this.handleBackClicked = this.handleBackClicked.bind(this);
    this.handleNextClicked = this.handleNextClicked.bind(this);
  }

  delay: number;
  // delay: ReturnType<typeof setTimeout>;

  componentDidMount() {
    this.initializeSurvey();
  }

  componentDidUpdate(prevProps: Props) {
    console.log("componentDidUpdate:::", this.props, prevProps);

    if (prevProps && prevProps.step) {
      if (
        this.props.step.attributes.identifier !==
        prevProps.step.attributes.identifier
      ) {
        if (this.props.step.is_last_step) {
          this.setState({
            isLastStep: this.props.step.is_last_step,
            isFirstStep: false
          });
        } else
          this.setState(
            {
              step: this.props.step,
              isFirstStep: false
            },
            () => {
              if (this.state.step.attributes.continue_after_delay) {
                this.delay = window.setTimeout(
                  this.sendResponseAndContinue.bind(this),
                  this.state.step.attributes.continue_after_delay
                );
              } else if (this.delay) {
                clearTimeout(this.delay);
              }
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

      if (!this.props.step)
        this.setState({ surveyStatus: "empty" }, () => this.props.onEmpty());

      this.setState(
        {
          surveyId: this.props.surveyId || this.generateSurveyId(),
          clientId: this.generateClientId(),
          step: this.props.step
        },
        () => {
          this.setState({ surveyStatus: "ready" }, () => {
            this.props.onReady({
              surveyId: this.state.surveyId || this.generateSurveyId(),
              clientId: this.state.clientId || this.generateClientId()
            });
            this.setState({ surveyStatus: "running" });
          });
        }
      );
    });
  }

  handleResponseClick(user_response: string) {
    console.log("response clicked:", user_response);

    let { attributes } = this.state.step;

    if (attributes.maximum_selections === 1) {
      this.setState(prevState => {
        let newState = {
          step: {
            ...prevState.step,
            profile_responses: {
              ...prevState.step.profile_responses
            }
          }
        };

        if (
          user_response ===
          prevState.step.profile_responses[attributes.identifier]
        )
          delete newState.step.profile_responses[attributes.identifier];
        else
          newState.step.profile_responses[
            attributes.identifier
          ] = user_response;

        return newState;
      }, this.sendResponseAndContinue);
    } else {
      this.setState(prevState => {
        let newState = {
          step: {
            ...prevState.step,
            profile_responses: {
              ...prevState.step.profile_responses
            }
          }
        };

        let prevResponse =
          prevState.step.profile_responses[attributes.identifier];
        let newResponse = [];

        if (prevResponse) {
          if (prevResponse.includes(user_response)) {
            newResponse = prevResponse.filter(
              (response: string) => response !== user_response
            );
          } else {
            prevResponse.push(user_response);
            newResponse = prevResponse;
          }
        } else newResponse = [user_response];

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
      user_response: profile_responses[attributes.identifier] || ""
    };

    setTimeout(() => this.props.onNext(response), 1200);
  }

  handleBackClicked() {
    this.props.onBack({
      surveyId: this.state.surveyId,
      clientId: this.state.clientId
    });
  }

  handleNextClicked() {
    this.sendResponseAndContinue();
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
        continue_btn_text
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
