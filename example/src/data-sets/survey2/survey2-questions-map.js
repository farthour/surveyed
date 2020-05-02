const surveyStepsMapping = {
  a: [
    // 1
    {
      question_identifier: "great_digestion_days",
      responses: [
        {
          response_identifier: "great_digestion_days_rarely",
          next_question_identifier: "sleep_type"
        },
        {
          response_identifier: "great_digestion_days_some_days",
          next_question_identifier: "sleep_type"
        },
        {
          response_identifier: "great_digestion_days_always",
          next_question_identifier: "sleep_type"
        }
      ],
      prev_question_identifier: null
    },

    // 2
    {
      question_identifier: "sleep_type",
      responses: [
        {
          response_identifier: "sleep_type_difficult",
          next_question_identifier: "active_energetic"
        },
        {
          response_identifier: "sleep_type_moderate",
          next_question_identifier: "active_energetic"
        },
        {
          response_identifier: "sleep_type_easy",
          next_question_identifier: "active_energetic"
        }
      ],
      prev_question_identifier: "great_digestion_days"
    },

    // 3
    {
      question_identifier: "active_energetic",
      responses: [
        {
          response_identifier: "active_energetic_rarely",
          next_question_identifier: "decision_change"
        },
        {
          response_identifier: "active_energetic_some_times",
          next_question_identifier: "decision_change"
        },
        {
          response_identifier: "active_energetic_most_days",
          next_question_identifier: "decision_change"
        }
      ],
      prev_question_identifier: "sleep_type"
    },

    // 4
    {
      question_identifier: "decision_change",
      responses: [
        {
          response_identifier: "decision_change_ofter",
          next_question_identifier: "friends_feel"
        },
        {
          response_identifier: "decision_change_some_times",
          next_question_identifier: "friends_feel"
        },
        {
          response_identifier: "decision_change_rarely",
          next_question_identifier: "friends_feel"
        }
      ],
      prev_question_identifier: "active_energetic"
    },

    // 4.5
    {
      question_identifier: "friends_feel",
      responses: [
        {
          response_identifier: "friends_feel_moody",
          next_question_identifier: "memory_power"
        },
        {
          response_identifier: "friends_feel_passionate",
          next_question_identifier: "memory_power"
        },
        {
          response_identifier: "friends_feel_calm",
          next_question_identifier: "memory_power"
        }
      ],
      prev_question_identifier: "decision_change"
    },

    // 5
    {
      question_identifier: "memory_power",
      responses: [
        {
          response_identifier: "memory_power_easy_remember_easy_forget",
          next_question_identifier: "body_structure"
        },
        {
          response_identifier: "memory_power_sharp_memory_easy_forget",
          next_question_identifier: "body_structure"
        },
        {
          response_identifier: "memory_power_slow_prolonged",
          next_question_identifier: "body_structure"
        }
      ],
      prev_question_identifier: "decision_change"
    },

    // 6
    {
      question_identifier: "body_structure",
      responses: [
        {
          response_identifier: "body_structure_thin",
          next_question_identifier: "nature_type"
        },
        {
          response_identifier: "body_structure_moderate",
          next_question_identifier: "nature_type"
        },
        {
          response_identifier: "body_structure_heavy",
          next_question_identifier: "nature_type"
        }
      ],
      prev_question_identifier: "memory_power"
    },

    // 7
    {
      question_identifier: "nature_type",
      responses: [
        {
          response_identifier: "nature_type_restless_active",
          next_question_identifier: "name"
        },
        {
          response_identifier: "nature_type_aggressive_intellectual",
          next_question_identifier: "name"
        },
        {
          response_identifier: "nature_type_calm_slow",
          next_question_identifier: "name"
        }
      ],
      prev_question_identifier: "body_structure"
    },
    // 8
    {
      question_identifier: "name",
      responses: [],
      prev_question_identifier: "nature_type",
      next_question_identifier: "whatsapp"
    },

    // 9
    {
      question_identifier: "whatsapp",
      responses: [],
      prev_question_identifier: "email",
      next_question_identifier: "goodbye"
    },

    // 10
    {
      question_identifier: "goodbye",
      responses: [],
      prev_question_identifier: "whatsapp",
      next_question_identifier: null
    }
  ]
};

export default surveyStepsMapping;
