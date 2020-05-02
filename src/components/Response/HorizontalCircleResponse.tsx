import React from "react";

// Types
import { QuesResponse } from "../types";

type Props = QuesResponse & {
  handleResponseClick: (identifier: string) => void;
};

const HorizontalCircleResponse: React.FC<Props> = ({
  // id,
  identifier,
  title,
  description,
  handleResponseClick
}) => {
  function handleClick(): void {
    handleResponseClick(identifier);
  }

  return (
    <div
      className="HorizontalCircleResponse"
      style={{
        backgroundColor: "#eee",
        padding: "16px",
        display: "inline-block",
        margin: "4px",
        cursor: "pointer"
      }}
      onClick={handleClick}
    >
      <h4>{title}</h4>
      <small>{description}</small>
    </div>
  );
};

export default HorizontalCircleResponse;
