# surveyed

> A dope stepwise question component

![](surveyed-demo.gif)

## Install

```bash
npm install --save surveyed
```

## Usage

An example is provided in the `src/playground` directory

```tsx
import React, { Component } from 'react'

import { Surveyed } from "surveyed";
import 'surveyed/lib/index.css'

import surveySteps from "path/to/survey/steps";
import surveyMappedSteps from "path/to/survey/question-map";

class Example extends Component {
  constructor(props) {
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

  handleOnNext(response) {
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
          allSteps={surveySteps}
          mappedSteps={surveyMappedSteps}
        />
      </div>
    )
  }
}
```

| Prop        | Required | Type   |
|-------------|----------|--------|
| surveyId    | false    | string |
| allSteps    | true     | object |
| mappedSteps | true     | object |
| onStarting  | false    | func   |
| onReady     | false    | func   |
| onEmpty     | false    | func   |
| onNext      | false    | func   |
| onBack      | false    | func   |
| onCompleted | false    | func   |

### Props for Surveyed Component

| property                    	| type                	| description                                                              	| allowed values                            	|
|-----------------------------	|---------------------	|--------------------------------------------------------------------------	|-------------------------------------------	|
| id                          	| string              	| id of question<br>each should have unique id                             	|                                           	|
| title                       	| string              	| title of question                                                        	|                                           	|
| description                 	| string \| null      	| question description                                                     	|                                           	|
| identifier                  	| string              	| unique user friendly question identifier (value separated by underscore) 	|                                           	|
| response_display_type       	| string              	| way of display of response selector                                      	| "horizontal" \| "vertical"                	|
| response_display_shape      	| string              	| shape of response selector                                               	| "circle" \| "card_default"                	|
| response_display_style      	| React.CSSProperties 	| css                                                                      	|                                           	|
| response_interaction_format 	| string              	| type of question                                                         	| "input" \| "dropdown" \| "select" \| null 	|
| type                        	| string \| null      	| INPUT format type                                                        	| "text" \| "email" \| "password" \| null   	|
| placeholder                 	| string \| null      	| placeholder text for input type question                                 	|                                           	|
| submit_btn_text             	| string \| null      	| text of submit button                                                    	|                                           	|
| continue_btn_text           	| string \| null      	| text of continue button                                                  	|                                           	|
| maximum_selections          	| number              	| maximum response selections for each question                            	|                                           	|
| continue_after_delay        	| number \| null      	| time to wait and then go to next step in milliseconds                    	|                                           	|
| responses                   	| QuestionResponse[]  	| responses/options of the question                                        	|                                           	|
| redirect_url                	| string              	| url to redirect to                                                       	|                                           	|
| is_initial_step             	| boolean             	| if step is the first step                                                	|                                           	|

### Props for QuestionResponse
| Property    	| Type                  	| Description                                                              	|
|-------------	|-----------------------	|--------------------------------------------------------------------------	|
| id          	| string                	| uniqe id                                                                 	|
| title       	| string                	| title of response                                                        	|
| description 	| string                	| description of response                                                  	|
| identifier  	| string                	| unique user friendly response identifier (value separated by underscore) 	|
| image_url   	| string (not required) 	| url of image                                                             	|



## Development run
`npm run storybook`

## Build
`npm run build`

## Deploy
`np`

or

`np --no-tests` to skip tests

## License

MIT © [amitad16](https://github.com/amitad16)
