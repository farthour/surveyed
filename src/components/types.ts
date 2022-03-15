export interface QuesResponse {
  id: string;
  title: string;
  description: string;
  identifier: string;
  image_url?: string;
}

export interface SurveyStepAttributes {
  id: string;
  title: string;
  description: string | null;
  identifier: string;
  response_display_type: "horizontal" | "vertical";
  response_display_shape?: "circle" | "card_default";
  response_display_style?: React.CSSProperties;
  response_interaction_format: "input" | "dropdown" | "select" | null;
  type?: "text" | "email" | "password" | null;
  placeholder?: string | null;
  submit_btn_text?: string | null;
  continue_btn_text?: string | null;
  maximum_selections: number;
  continue_after_delay?: number | null;
  responses: QuesResponse[];
  redirect_url?: string;
  is_initial_step?: boolean;
}

export type ProfileResponseData = {
  profile_responses: Object;
  steps_completed: string[];
}


export type QuestionResponse = {
  question_identifier: string;
  user_response: string;
}


export type MappedSteps = {
  question_identifier: string;
  responses: {
      response_identifier: string;
      next_question_identifier: string;
  }[];
  prev_question_identifier: string | null;
  next_question_identifier: string | null;
}

export type SurveyStep = {
  attributes: SurveyStepAttributes;
  profile_responses: object;
  percent_complete: number;
  total_steps: number;
  current_step: number;
  is_last_step?: boolean | undefined;
  is_initial_step?: boolean | undefined;
};
