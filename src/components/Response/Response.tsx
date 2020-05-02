import React from "react";

import styles from "./Response.module.css";

import SelectableResponse from "./SelectableResponse";
import InputResponse from "./InputResponse";

// Types
import { QuesResponse } from "../types";

type Props = {
  responses: QuesResponse[];
  response_display_type: "horizontal" | "vertical";
  response_display_shape?: "circle" | "card_default";
  response_display_style?: React.CSSProperties;
  response_interaction_format: "input" | "dropdown" | "select" | null;
  type?: string | null;
  placeholder?: string | null;
  submit_btn_text?: string | null;
  selected_response: string | string[];
  maximum_selections: number;
  handleResponseSelect: (user_response: string) => void;
};

const Response: React.FC<Props> = ({
  responses,
  response_interaction_format,
  response_display_type,
  response_display_shape,
  type,
  placeholder,
  submit_btn_text,
  selected_response,
  maximum_selections,
  handleResponseSelect
}) => {
  function isSelected(
    response_identifier: string,
    selected_response: string | string[]
  ): boolean {
    if (typeof selected_response === "string") {
      if (selected_response === response_identifier) return true;
      else return false;
    } else if (Array.isArray(selected_response)) {
      return selected_response.some(res => res === response_identifier);
    } else return false;
  }

  function getClassNameFromDisplayType(
    response_display_type: "horizontal" | "vertical"
  ): string {
    let hClass = styles.Response__showcase_horizontal;
    let vClass = styles.Response__showcase_vertical;

    switch (response_display_type) {
      case "horizontal":
        return hClass;
      case "vertical":
        return vClass;
      default:
        return hClass;
    }
  }

  return (
    <div className={styles.Response}>
      <div
        className={`${styles.Response_showcase} ${getClassNameFromDisplayType(
          response_display_type
        )}`}
      >
        {response_interaction_format === "select" &&
          responses &&
          responses.map(response => {
            return (
              <SelectableResponse
                key={response.id}
                response={response}
                response_display_type={response_display_type}
                response_display_shape={response_display_shape}
                maximum_selections={maximum_selections}
                total_options={(responses && responses.length) || 1}
                is_selected={isSelected(response.identifier, selected_response)}
                handleResponseClick={handleResponseSelect}
              />
            );
          })}

        {response_interaction_format === "input" && (
          <InputResponse
            inputType={type || ""}
            inputPlaceholder={placeholder || ""}
            submitBtnText={submit_btn_text || ""}
            handleSubmitClick={handleResponseSelect}
          />
        )}
      </div>
    </div>
  );
};

export default Response;
