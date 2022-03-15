import React, { Component } from "react";
import Surveyed from "../components/Surveyed";

import survey from "./data-sets/survey2/survey2-questions";
import surveyMap from "./data-sets/survey2/survey2-questions-map";

class App extends Component {
  // @ts-ignore
  constructor(props) {
    super(props);

    this.state = { step: null };

    this.handleOnStarting = this.handleOnStarting.bind(this);
    this.handleOnReady = this.handleOnReady.bind(this);
    this.handleOnEmpty = this.handleOnEmpty.bind(this);
    this.handleOnCompleted = this.handleOnCompleted.bind(this);
    this.handleOnBack = this.handleOnBack.bind(this);
    this.handleOnNext = this.handleOnNext.bind(this);
  }

  handleOnStarting() {
    console.log("onStarting");
  }

  handleOnReady() {
    console.log("onReady");
  }

  handleOnEmpty() {
    console.log("onEmpty");
  }

  handleOnCompleted() {
    console.log("onCompleted");
  }

  handleOnBack() {
    console.log("onBack");
  }

  handleOnNext(response: any) {
    console.log("onNext::", response);
  }

  render() {
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        {/* Hiiii */}
        <Surveyed
          onStarting={this.handleOnStarting}
          onReady={this.handleOnReady}
          onEmpty={this.handleOnEmpty}
          onCompleted={this.handleOnCompleted}
          onBack={this.handleOnBack}
          onNext={this.handleOnNext}
          // @ts-ignore
          allSteps={survey.a.steps}
          // @ts-ignore
          mappedSteps={surveyMap.a}
        />
      </div>
    );
  }
}

export default App;
