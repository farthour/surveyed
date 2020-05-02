const surveyStepsMapping = {
  a: [
    // 1
    {
      question_identifier: "vitamins_experience",
      responses: [
        {
          response_identifier: "vitamins_experience_yes",
          next_question_identifier: "number_vitamins_recommendation"
        },
        {
          response_identifier: "vitamins_experience_no",
          next_question_identifier: "gender"
        }
      ],
      prev_question_identifier: null
    },

    // 2
    {
      question_identifier: "number_vitamins_recommendation",
      responses: [
        {
          response_identifier: "number_vitamins_recommendation_none",
          next_question_identifier: "gender"
        },
        {
          response_identifier: "number_vitamins_recommendation_one_to_four",
          next_question_identifier: "gender"
        },
        {
          response_identifier: "number_vitamins_recommendation_five_plus",
          next_question_identifier: "gender"
        }
      ],
      prev_question_identifier: "vitamins_experience"
    },

    // 3
    {
      question_identifier: "gender",
      responses: [
        {
          response_identifier: "gender_male",
          next_question_identifier: "location"
        },
        {
          response_identifier: "gender_female",
          next_question_identifier: "prenatal_postnatal_yes_no"
        },
        {
          response_identifier: "gender_non_binary",
          next_question_identifier: "prenatal_postnatal_yes_no"
        }
      ],
      prev_question_identifier: [
        "vitamins_experience",
        "number_vitamins_recommendation"
      ]
    },

    // 4
    {
      question_identifier: "location",
      responses: [],
      prev_question_identifier: [
        "vitamins_experience",
        "number_vitamins_recommendation"
      ],
      next_question_identifier: "why_vitamins_motivation"
    },

    // 5
    {
      question_identifier: "why_vitamins_motivation",
      responses: [
        {
          response_identifier: "why_vitamins_specific_need",
          next_question_identifier: "topics"
        },
        {
          response_identifier: "why_vitamins_general_health",
          next_question_identifier: "topics"
        },
        {
          response_identifier: "why_vitamins_discovery",
          next_question_identifier: "topics"
        }
      ],
      prev_question_identifier: "location"
    },

    // 6
    {
      question_identifier: "topics",
      responses: [
        {
          response_identifier: "sleep_topic_response",
          next_question_identifier: "email"
        },
        {
          response_identifier: "stress_topic_response",
          next_question_identifier: "email"
        },
        {
          response_identifier: "energy_topic_response",
          next_question_identifier: "email"
        },
        {
          response_identifier: "fitness_topic_response",
          next_question_identifier: "email"
        }
      ],
      prev_question_identifier: "why_vitamins_motivation"
    },

    // 7
    {
      question_identifier: "email",
      responses: [],
      prev_question_identifier: "topics",
      next_question_identifier: "thankyou"
    },

    // 8
    {
      question_identifier: "prenatal_postnatal_yes_no",
      responses: [
        {
          response_identifier: "prenatal_postnatal_yes",
          next_question_identifier: "pregnancy_which_of_these"
        },
        {
          response_identifier: "prenatal_postnatal_no",
          next_question_identifier: "location"
        }
      ],
      prev_question_identifier: "why_vitamins_motivation"
    },

    // 9
    {
      question_identifier: "pregnancy_which_of_these",
      responses: [
        {
          response_identifier: "pregnancy_looking_to_become_pregnant",
          next_question_identifier: "location"
        },
        {
          response_identifier: "pregnancy_currently_pregnant",
          next_question_identifier: "location"
        },
        {
          response_identifier: "pregnancy_recently_had_child",
          next_question_identifier: "location"
        }
      ],
      prev_question_identifier: "why_vitamins_motivation"
    },

    // 10
    {
      question_identifier: "thankyou",
      responses: [],
      prev_question_identifier: "email",
      next_question_identifier: "goodbye"
    },

    // 10
    {
      question_identifier: "goodbye",
      responses: [],
      prev_question_identifier: "thankyou",
      next_question_identifier: null
    }
  ]
};

export default surveyStepsMapping;
