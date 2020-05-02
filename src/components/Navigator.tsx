import React from "react";

import styles from "./Navigator.module.css";

type Props = {
  isFirstStep: boolean;
  continueBtnText: string | null;
  maximumSelections: number;
  handleNextClicked: () => void;
  handleBackClicked: () => void;
};

const Navigator: React.FC<Props> = ({
  isFirstStep,
  continueBtnText,
  maximumSelections,
  handleBackClicked,
  handleNextClicked
}) => {
  return (
    <div className={styles.Navigator}>
      {!isFirstStep && (
        <button
          className={styles.Navigator__prev_btn}
          type="button"
          onClick={handleBackClicked}
        >
          Back
        </button>
      )}

      {maximumSelections > 1 && (
        <button
          className={styles.Navigator__next_btn}
          type="button"
          onClick={handleNextClicked}
        >
          {continueBtnText || "Continue"}
        </button>
      )}
    </div>
  );
};

export default Navigator;
