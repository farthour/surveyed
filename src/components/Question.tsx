import React from "react";

import styles from "./Surveyed.module.css";

type Props = {
  title: string;
  description: string | null;
};

const Question: React.FC<Props> = ({ title, description }) => {
  return (
    <div className={styles.Question}>
      <p className={styles.Question__title}>{title}</p>
      <p className={styles.Question__desc}>{description}</p>
    </div>
  );
};

export default Question;
