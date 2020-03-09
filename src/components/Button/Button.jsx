import React from "react";
import styles from "./Button.module.scss"; //imports styles from scss file

const Button = props => {
  const { btnText, handleClick } = props;

  return (
    <button className={styles.button} onClick={handleClick}>
      {btnText}
    </button>
  );
};

// export const example = 7;

export default Button;
