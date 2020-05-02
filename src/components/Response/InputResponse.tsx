import React, { useState } from "react";

import styles from "./Response.module.css";

type Props = {
  inputType: string | undefined;
  inputPlaceholder: string | undefined;
  submitBtnText: string | null;
  handleSubmitClick: (response: string) => void;
};

const InputResponse: React.FC<Props> = ({
  inputType,
  inputPlaceholder,
  submitBtnText,
  handleSubmitClick
}) => {
  const [response, setResponse] = useState("");

  function onValueChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    let { value } = target;
    setResponse(value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    handleSubmitClick(response);
  }

  return (
    <form className={styles.InputResponse} onSubmit={handleSubmit}>
      <div className={styles.InputBox}>
        <input
          className={styles.InputResponse__input}
          value={response}
          type={inputType}
          placeholder={inputPlaceholder}
          onChange={onValueChange}
        />

        <button
          className={`${styles.InputResponse__submit_btn} ${
            !!submitBtnText
              ? styles.InputResponse__submit_btn_with_text
              : styles.InputResponse__submit_btn_default
          }`}
          type="submit"
        >
          {submitBtnText || "->"}
        </button>
      </div>
    </form>
  );
};

export default InputResponse;
