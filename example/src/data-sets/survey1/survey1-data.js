import surveyStepsMapping from "./survey1-data-map";

const surveys = {
  a: {
    steps: [
      {
        id: "q1",
        title: "Have you taken vitamins in the past?",
        description: "Vitamins, fish oil, or similar.",
        identifier: "vitamins_experience",
        type: "",
        response_interaction_format: "select",
        placeholder: "",
        submit_btn_text: "",
        responses: [
          {
            id: "q1_r1",
            title: "Yes",
            description: "",
            identifier: "vitamins_experience_yes",
            image_url: ""
          },
          {
            id: "q1_r2",
            title: "no",
            description: "",
            identifier: "vitamins_experience_no",
            image_url: ""
          }
        ],
        maximum_selections: 1,
        continue_after_delay: null,
        continue_btn_text: null
      },
      {
        id: "q2",
        title: "How many vitamins or supplements do you take regularly?",
        description: null,
        identifier: "number_vitamins_recommendation",
        type: "",
        response_interaction_format: "select",
        response_display_shape: "card_default",
        placeholder: "",
        submit_btn_text: "",
        responses: [
          {
            id: "q2_r1",
            title: "None",
            description: "",
            identifier: "number_vitamins_recommendation_none",
            image_url: ""
          },
          {
            id: "q2_r2",
            title: "1-4",
            description: "",
            identifier: "number_vitamins_recommendation_one_to_four",
            image_url: ""
          },
          {
            id: "q2_r3",
            title: "5+",
            description: "",
            identifier: "number_vitamins_recommendation_five_plus",
            image_url: ""
          }
        ],
        maximum_selections: 1,
        continue_after_delay: null,
        continue_btn_text: null
      },
      {
        id: "q3",
        title: "Are you:",
        description: null,
        identifier: "gender",
        type: "",
        response_interaction_format: "select",
        placeholder: "",
        submit_btn_text: "",
        responses: [
          {
            id: "q3_r1",
            title: "Male",
            description: "",
            identifier: "gender_male",
            image_url: ""
          },
          {
            id: "q3_r2",
            title: "Female",
            description: "",
            identifier: "gender_female",
            image_url: ""
          },
          {
            id: "q3_r3",
            title: "Non-binary",
            description: "",
            identifier: "gender_non_binary",
            image_url: ""
          }
        ],
        maximum_selections: 1,
        continue_after_delay: null,
        continue_btn_text: null
      },
      {
        id: "q4",
        title: "Which state do you live in?",
        description: "Or province, if you live in Canada.",
        identifier: "location",
        type: "text",
        response_interaction_format: "input",
        placeholder: "My location...",
        submit_btn_text: "",
        responses: [],
        maximum_selections: 1,
        continue_after_delay: null,
        continue_btn_text: null
      },
      {
        id: "q5",
        title: "What’s on your mind?",
        description: null,
        identifier: "why_vitamins_motivation",
        type: "",
        response_interaction_format: "select",
        response_display_shape: "card_default",
        placeholder: "",
        submit_btn_text: "",
        responses: [
          {
            id: "q5_r1",
            title: "Specific need",
            description: "You have a goal, concern, or gap in your diet.",
            identifier: "why_vitamins_specific_need",
            image_url: ""
          },
          {
            id: "q5_r2",
            title: "General health",
            description: "You just want to take care of yourself.",
            identifier: "why_vitamins_general_health",
            image_url: ""
          },
          {
            id: "q5_r3",
            title: "Discovery",
            description: "You're looking for something new.",
            identifier: "why_vitamins_discovery",
            image_url: ""
          }
        ],
        maximum_selections: 1,
        continue_after_delay: null,
        continue_btn_text: null
      },
      {
        id: "q6",
        title: "What should we explore?",
        description: "We ask about 3 to 5 questions per goal.",
        identifier: "topics",
        type: "",
        response_interaction_format: "select",
        placeholder: "",
        submit_btn_text: "",
        responses: [
          {
            description: null,
            identifier: "sleep_topic_response",
            title: "Sleep",
            id: "q6_r1"
          },
          {
            description: null,
            identifier: "stress_topic_response",
            title: "Stress",
            id: "q6_r2"
          },
          {
            description: null,
            identifier: "energy_topic_response",
            title: "Energy",
            id: "q6_r3"
          },
          {
            description: null,
            identifier: "fitness_topic_response",
            title: "Fitness",
            id: "q6_r4"
          }
        ],
        maximum_selections: 2,
        continue_after_delay: null,
        continue_btn_text: null
      },
      {
        id: "q7",
        title: "What's your e-mail?",
        description: "So we can save your answers.",
        identifier: "email",
        type: "email",
        response_interaction_format: "input",
        placeholder: "Your Email...",
        submit_btn_text: "Submit",
        responses: [],
        maximum_selections: 1,
        continue_after_delay: null,
        continue_btn_text: null
      },
      {
        id: "q8",
        title: "Are you interested in prenatal or postnatal health?",
        description: null,
        identifier: "prenatal_postnatal_yes_no",
        type: "",
        response_interaction_format: "select",
        placeholder: "",
        submit_btn_text: "",
        responses: [
          {
            id: "q8_r1",
            title: "Yes",
            description: "",
            identifier: "prenatal_postnatal_yes",
            image_url: ""
          },
          {
            id: "q8_r2",
            title: "no",
            description: "",
            identifier: "prenatal_postnatal_no",
            image_url: ""
          }
        ],
        maximum_selections: 1,
        continue_after_delay: null,
        continue_btn_text: null
      },
      {
        id: "q9",
        title: "Which of these best describes you?",
        description: null,
        identifier: "pregnancy_which_of_these",
        type: "",
        response_interaction_format: "select",
        response_display_shape: "card_default",
        placeholder: "",
        submit_btn_text: "",
        responses: [
          {
            id: "q9_r1",
            title: "I'm looking to become pregnant",
            description: "",
            identifier: "pregnancy_looking_to_become_pregnant",
            image_url: ""
          },
          {
            id: "q9_r2",
            title: "I'm currently pregnant",
            description: "",
            identifier: "pregnancy_currently_pregnant",
            image_url: ""
          },
          {
            id: "q9_r3",
            title: "I'm breastfeeding",
            description: "",
            identifier: "pregnancy_recently_had_child",
            image_url: ""
          }
        ],
        maximum_selections: 1,
        continue_after_delay: null,
        continue_btn_text: null
      },
      {
        id: "q10",
        title: "Thank you",
        description: "We have your data",
        identifier: "thankyou",
        type: "",
        response_interaction_format: "",
        placeholder: "",
        submit_btn_text: "",
        responses: [],
        maximum_selections: 0,
        continue_after_delay: 3000,
        continue_btn_text: null
      },
      {
        id: "q11",
        title: "It was nice meeting you",
        description: "Goodbye",
        identifier: "goodbye",
        type: "",
        response_interaction_format: "",
        placeholder: "",
        submit_btn_text: "",
        responses: [],
        maximum_selections: 0,
        continue_after_delay: 3000,
        continue_btn_text: null,
        redirect_url: "http://localhost:3000"
      }
    ]
  }
};

let profile_data = {
  profile_responses: {},
  steps_completed: []
};

function getSurveyById(surveyId) {
  return surveys[surveyId];
}

export function initializeSurvey(surveyId) {
  let firstStep = getFirstStepOfSurvey(surveyId);

  return makeResponseStep(surveyId, firstStep);
}

export function getPreviousStep(surveyId) {
  let profileData = { ...profile_data };

  let prevQuestionIdentifier = profileData.steps_completed.pop();

  if (!prevQuestionIdentifier) return initializeSurvey(surveyId);

  delete profileData.profile_responses[prevQuestionIdentifier];

  let question = findQuestionByQuestionIdentifier(
    surveyId,
    prevQuestionIdentifier
  );

  return makeResponseStep(surveyId, question);
}

export function postQuestionResponse(surveyId, response) {
  let { question_identifier, user_response } = response;

  let profileData = { ...profile_data };

  profileData.profile_responses[question_identifier] = user_response;

  profileData.steps_completed.push(question_identifier);

  console.log("surveyId:::", surveyId);

  return getNextStep(surveyId, response);
}

function getNextStep(surveyId, response) {
  let nextQuestionIdentifier = getNextQuestionIdentifierFromCurrentResponse(
    surveyId,
    response
  );

  console.log("next question identifier::", nextQuestionIdentifier);

  if (!nextQuestionIdentifier) {
    return makeResponseStep(surveyId, { identifier: "__end__" }, true);
  } else {
    let question = findQuestionByQuestionIdentifier(
      surveyId,
      nextQuestionIdentifier
    );

    return makeResponseStep(surveyId, question);
  }
}

// function getPrevQuestionIdentifierFromCurrentResponse(surveyId, response) {
//   let stepsCompleted = [...profile_data.steps_completed];

//   let prevQuestionIdentifier = stepsCompleted.pop();

//   profile_data.steps_completed = stepsCompleted;

//   return prevQuestionIdentifier;
// }

function getNextQuestionIdentifierFromCurrentResponse(surveyId, response) {
  let { question_identifier, user_response } = response;

  let response_identifier = Array.isArray(user_response)
    ? user_response[0]
    : user_response;

  let mappedSteps = surveyStepsMapping[surveyId];

  let q = mappedSteps.find(v => {
    if (v.question_identifier === question_identifier) {
      return v;
    }
  });

  let nextQuestionIdentifier = null;

  if (q.responses && q.responses.length) {
    let a = q.responses.find(r => {
      if (r.response_identifier === response_identifier) {
        console.log("rrr::", r);
        return r.next_question_identifier;
      }
    });

    if (a && a.next_question_identifier)
      nextQuestionIdentifier = a.next_question_identifier;
  } else {
    nextQuestionIdentifier = q.next_question_identifier;
  }

  console.log("nqi:::", nextQuestionIdentifier);

  // if (nextQuestionIdentifier && nextQuestionIdentifier.next_question_identifier)

  return nextQuestionIdentifier;
}

function findQuestionByQuestionIdentifier(surveyId, questionIdentifier) {
  let survey = getSurveyById(surveyId);

  console.log("survey:::", survey, surveyId);

  return survey.steps.find(v => v.identifier === questionIdentifier);
}

function makeResponseStep(surveyId, step, isLastStep) {
  let totalSteps = getTotalStepsOfSurvey(surveyId);

  let { profile_responses, steps_completed } = profile_data;
  let stepsCompletedCount = steps_completed.length;

  return {
    attributes: step,
    is_last_step: !!isLastStep,
    profile_responses: profile_responses,
    percent_complete: (stepsCompletedCount / totalSteps) * 100,
    total_steps: totalSteps,
    current_step: parseInt(stepsCompletedCount + 1, 10)
  };
}

function getTotalStepsOfSurvey(surveyId) {
  return surveys[surveyId].steps.length;
}

function getFirstStepOfSurvey(surveyId) {
  let survey = getSurveyById(surveyId);

  let { steps } = survey;

  if (steps && steps.length) {
    return steps.find(v => !v.prev_step_identifier);
  }
}

let aaa = {
  survey_id: "", // {String} unique id of survey
  profile_id: "", // {String} unique id of user performing the survey
  question: {
    // {Object} current question object
    id: "", // {String} id of question
    title: "", // {String} question title
    description: "", // {String} question description
    step: 1, // {Number} step number
    identifier: "", // {String} unnique user friendly question identifier (value separated by underscore)
    type: "", // {String} input format type (enum=["text", "email", "password"])
    response_interaction_format: "", // {String} type of question (enum=["input", "select", "dropdown"])
    placeholder: "", // {String} placeholder text for input type question
    submit_btn_text: "", // {String} text of submit button
    responses: [
      // {Array of Objects} responses/options of the question
      {
        id: "", // {String} unique id of response
        title: "", // {String} title of response
        description: "", // {String} description of response
        identifier: "", // {String} unique user friendly question response identifier
        image_url: "" // {String} url of image in response
      }
    ],
    maximum_selections: 1, // {Number} maximum response selections
    prev_step_id: "", // {String} id of previous step
    continue_after_delay: null, // {Number} time to wait and then go to next step in milliseconds
    continue_btn_text: "" // {String} text of continue btn
  },
  profile_responses: {
    // {Object} KEY-> question.identifier, VALUE-> responses[idx].identifier
    identifier: "" //
  },
  percent_complete: 10, // {Number} percentage completion of survey
  current_step: 1, // {Number} current step number
  total_steps: 10 // {Number} total steps
};
