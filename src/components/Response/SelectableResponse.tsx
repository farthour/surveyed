import React from "react";

import styles from "./Response.module.css";

// Types
import { QuesResponse } from "../types";

type Props = {
  response: QuesResponse;
  response_display_type: "horizontal" | "vertical";
  response_display_shape?: "circle" | "card_default";
  response_display_style?: React.CSSProperties;
  maximum_selections: number;
  total_options: number;
  is_selected: boolean;
  handleResponseClick: (identifier: string) => void;
};

const SelectableResponse: React.FC<Props> = ({
  response,
  response_display_style,
  response_display_shape,
  total_options,
  is_selected,
  handleResponseClick
}) => {
  function handleClick(): void {
    handleResponseClick(response.identifier);
  }

  function getClassNameFromDisplayShape(
    response_display_shape: "circle" | "card_default" = "circle",
    total_options: number
  ): string {
    let shapeCircle = styles.SelectableResponse__circle;
    let shapeCardDefault = styles.SelectableResponse__card_default;

    console.log(response_display_shape);

    if (total_options <= 2) return shapeCircle;
    return shapeCardDefault;

    // switch (response_display_shape) {
    //   case "circle":
    //     return shapeCircle;
    //   case "card_default":
    //     return shapeCardDefault;
    //   default:
    //     return shapeCircle;
    // }
  }

  return (
    <div
      className={`${styles.SelectableResponse} ${getClassNameFromDisplayShape(
        response_display_shape,
        total_options
      )} ${
        is_selected
          ? styles.SelectableResponse_selected
          : styles.SelectableResponse_not_selected
      }`}
      style={response_display_style}
      onClick={handleClick}
    >
      {!!response.image_url && (
        <div className={styles.SelectableResponse__image_wrapper}>
          <img src={response.image_url} alt="" />
        </div>
      )}

      <div className={styles.SelectableResponse__text_wrapper}>
        <h4 className={styles.SelectableResponse__title}>{response.title}</h4>
        {!!response.description && (
          <small className={styles.SelectableResponse__desc}>
            {response.description}
          </small>
        )}
      </div>
    </div>
  );
};

export default SelectableResponse;
