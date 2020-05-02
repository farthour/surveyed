import React, { PureComponent } from "react";

import Surveyed from "surveyed";
import "surveyed/dist/index.css";
import {
  initializeSurvey,
  postQuestionResponse,
  getPreviousStep
} from "./data-sets/survey2/survey2-questions";

class App extends PureComponent {
  constructor() {
    super();

    this.state = { step: null };

    this.handleOnStarting = this.handleOnStarting.bind(this);
    this.handleOnReady = this.handleOnReady.bind(this);
    this.handleOnEmpty = this.handleOnEmpty.bind(this);
    this.handleOnCompleted = this.handleOnCompleted.bind(this);
    this.handleOnBack = this.handleOnBack.bind(this);
    this.handleOnNext = this.handleOnNext.bind(this);
  }

  componentDidMount() {
    this.setState({ step: initializeSurvey("a") });
  }

  handleOnStarting() {
    console.log("onStarting");
  }

  handleOnReady(surveyCredentials) {
    console.log("onReady::", surveyCredentials);
  }

  handleOnEmpty() {
    console.log("onEmpty");
  }

  handleOnCompleted() {
    console.log("onCompleted");
  }

  handleOnBack({ surveyId, clientId }) {
    console.log("onBack");

    let data = getPreviousStep(surveyId);

    this.setState({ step: data });
  }

  handleOnNext(response) {
    console.log("onNext::", response);

    let { surveyId, question_identifier, user_response } = response;

    let nextQuestion = postQuestionResponse(surveyId, {
      question_identifier,
      user_response
    });

    this.setState({ step: nextQuestion });
  }

  render() {
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        <Surveyed
          onStarting={this.handleOnStarting}
          onReady={this.handleOnReady}
          onEmpty={this.handleOnEmpty}
          onCompleted={this.handleOnCompleted}
          onBack={this.handleOnBack}
          onNext={this.handleOnNext}
          surveyId="a"
          step={this.state.step}
        />
      </div>
    );
  }
}

export default App;
