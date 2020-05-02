export interface QuesResponse {
  id: string;
  title: string;
  description: string;
  identifier: string;
  image_url?: string;
}

export type SurveyStep = {
  attributes: {
    id: string;
    title: string;
    description: string | null;
    identifier: string;
    response_display_type: "horizontal" | "vertical";
    response_display_shape?: "circle" | "card_default";
    response_display_style?: React.CSSProperties;
    response_interaction_format: "input" | "dropdown" | "select" | null;
    type?: string | null;
    placeholder?: string | null;
    submit_btn_text?: string | null;
    continue_btn_text?: string | null;
    maximum_selections: number;
    continue_after_delay?: number | null;
    responses: QuesResponse[];
    redirect_url?: string;
  };
  profile_responses: object;
  percent_complete: number;
  total_steps: number;
  current_step: number;
  is_last_step?: boolean | undefined;
};
