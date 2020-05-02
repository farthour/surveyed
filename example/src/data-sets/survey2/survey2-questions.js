import surveyStepsMapping from "./survey2-questions-map";

const surveys = {
  a: {
    steps: [
      {
        id: "q1",
        title: "My digestion is great on:",
        description: "",
        identifier: "great_digestion_days",
        type: "",
        response_interaction_format: "select",
        response_display_shape: "card_default",
        placeholder: "",
        submit_btn_text: "",
        responses: [
          {
            id: "q1_r1",
            title: "Rarely",
            description: "",
            identifier: "great_digestion_days_rarely",
            image_url: ""
          },
          {
            id: "q1_r2",
            title: "Some days",
            description: "",
            identifier: "great_digestion_days_some_days",
            image_url: ""
          },
          {
            id: "q1_r3",
            title: "Always",
            description: "",
            identifier: "great_digestion_days_always",
            image_url: ""
          }
        ],
        maximum_selections: 1,
        continue_after_delay: null,
        continue_btn_text: null
      },
      {
        id: "q2",
        title: "What is your sleep type?",
        description: "",
        identifier: "sleep_type",
        type: "",
        response_interaction_format: "select",
        response_display_shape: "card_default",
        placeholder: "",
        submit_btn_text: "",
        responses: [
          {
            id: "q2_r1",
            title: "Difficulty falling sleep, disturbed easily",
            description: "",
            identifier: "sleep_type_difficult",
            image_url: ""
          },
          {
            id: "q2_r2",
            title: "Fall sleep easily, moderate sleep",
            description: "",
            identifier: "sleep_type_moderate",
            image_url: ""
          },
          {
            id: "q2_r3",
            title: "Fall sleep easily, heavy sleep",
            description: "",
            identifier: "sleep_type_easy",
            image_url: ""
          }
        ],
        maximum_selections: 1,
        continue_after_delay: null,
        continue_btn_text: null
      },
      {
        id: "q3",
        title: "I feel active and energetic on:",
        description: "",
        identifier: "active_energetic",
        type: "",
        response_interaction_format: "select",
        response_display_shape: "card_default",
        placeholder: "",
        submit_btn_text: "",
        responses: [
          {
            id: "q3_r1",
            title: "Rarely",
            description: "",
            identifier: "active_energetic_rarely",
            image_url: ""
          },
          {
            id: "q3_r2",
            title: "Some times",
            description: "",
            identifier: "active_energetic_some_times",
            image_url: ""
          },
          {
            id: "q3_r3",
            title: "Most days",
            description: "",
            identifier: "active_energetic_most_days",
            image_url: ""
          }
        ],
        maximum_selections: 1,
        continue_after_delay: null,
        continue_btn_text: null
      },
      {
        id: "q4",
        title:
          "After taking a decision, how you feel about changing the decision?",
        description: "",
        identifier: "decision_change",
        type: "text",
        response_interaction_format: "select",
        response_display_shape: "card_default",
        placeholder: "",
        submit_btn_text: "",
        responses: [
          {
            id: "q4_r1",
            title: "Often",
            description: "",
            identifier: "decision_change_ofter",
            image_url: ""
          },
          {
            id: "q4_r2",
            title: "Some times",
            description: "",
            identifier: "decision_change_some_times",
            image_url: ""
          },
          {
            id: "q4_r3",
            title: "Rarely",
            description: "",
            identifier: "decision_change_rarely",
            image_url: ""
          }
        ],
        maximum_selections: 1,
        continue_after_delay: null,
        continue_btn_text: null
      },
      {
        id: "q5",
        title: "Your friends feel that you are:",
        description: "",
        identifier: "friends_feel",
        type: "",
        response_interaction_format: "select",
        response_display_shape: "card_default",
        placeholder: "",
        submit_btn_text: "",
        responses: [
          {
            id: "q5_r1",
            title: "Moody",
            description: "",
            identifier: "friends_feel_moody",
            image_url: ""
          },
          {
            id: "q5_r2",
            title: "Passionate",
            description: "",
            identifier: "friends_feel_passionate",
            image_url: ""
          },
          {
            id: "q5_r3",
            title: "Calm",
            description: "",
            identifier: "friends_feel_calm",
            image_url: ""
          }
        ],
        maximum_selections: 1,
        continue_after_delay: null,
        continue_btn_text: null
      },
      {
        id: "q6",
        title: "What type of memory power do you have?",
        description: "",
        identifier: "memory_power",
        type: "",
        response_interaction_format: "select",
        response_display_shape: "card_default",
        placeholder: "",
        submit_btn_text: "",
        responses: [
          {
            description: "",
            identifier: "memory_power_easy_remember_easy_forget",
            title: "Easy to remember, easy to forget",
            id: "q6_r1"
          },
          {
            description: "",
            identifier: "memory_power_sharp_memory_easy_forget",
            title: "Sharp memory, easily forget",
            id: "q6_r2"
          },
          {
            description: "",
            identifier: "memory_power_slow_prolonged",
            title: "Slow but prolonged memory",
            id: "q6_r3"
          }
        ],
        maximum_selections: 1,
        continue_after_delay: null,
        continue_btn_text: null
      },
      {
        id: "q7",
        title: "What is your body structure?",
        description: "",
        identifier: "body_structure",
        type: "",
        response_interaction_format: "select",
        response_display_shape: "card_default",
        placeholder: "",
        submit_btn_text: "",
        responses: [
          {
            description: "",
            identifier: "body_structure_thin",
            title: "Sleep",
            id: "q7_r1"
          },
          {
            description: "",
            identifier: "body_structure_moderate",
            title: "Stress",
            id: "q7_r2"
          },
          {
            description: "",
            identifier: "body_structure_heavy",
            title: "Energy",
            id: "q7_r3"
          }
        ],
        maximum_selections: 1,
        continue_after_delay: null,
        continue_btn_text: null
      },
      {
        id: "q8",
        title: "What is your nature type?",
        description: "",
        identifier: "nature_type",
        type: "",
        response_interaction_format: "select",
        placeholder: "",
        submit_btn_text: "",
        responses: [
          {
            id: "q8_r1",
            title: "Restless active, confusion, worry, nervousness",
            description: "",
            identifier: "nature_type_restless_active",
            image_url: ""
          },
          {
            id: "q8_r2",
            title: "Aggressive intellectual, critical analytical",
            description: "",
            identifier: "nature_type_aggressive_intellectual",
            image_url: ""
          },
          {
            id: "q8_r3",
            title: "Calm, slow",
            description: "",
            identifier: "nature_type_calm_slow",
            image_url: ""
          }
        ],
        maximum_selections: 1,
        continue_after_delay: null,
        continue_btn_text: null
      },
      {
        id: "q9",
        title: "Your name:",
        description: "",
        identifier: "name",
        type: "text",
        response_interaction_format: "input",
        placeholder: "",
        submit_btn_text: "Go",
        responses: [],
        maximum_selections: 1,
        continue_after_delay: null,
        continue_btn_text: null
      },
      {
        id: "q10",
        title: "Your whatsapp number to get your report.",
        description: "",
        identifier: "whatsapp",
        type: "number",
        response_interaction_format: "input",
        placeholder: "",
        submit_btn_text: "Submit",
        responses: [],
        maximum_selections: 1,
        continue_after_delay: null,
        continue_btn_text: null
      },
      {
        id: "q11",
        title: "It was nice meeting you.",
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
