import React, { Component } from "react";
import Surveyed from "../../components/Surveyed";

import surveySteps from "../data-sets/health/questions";
import surveyMappedSteps from "../data-sets/health/questions-map";

class DefaultSurveyed extends Component {
  constructor(props: any) {
    super(props);

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
        <Surveyed
          onStarting={this.handleOnStarting}
          onReady={this.handleOnReady}
          onEmpty={this.handleOnEmpty}
          onCompleted={this.handleOnCompleted}
          onBack={this.handleOnBack}
          onNext={this.handleOnNext}
          // @ts-ignore
          allSteps={surveySteps}
          // @ts-ignore
          mappedSteps={surveyMappedSteps}
        />
      </div>
    );
  }
}

export default DefaultSurveyed;
