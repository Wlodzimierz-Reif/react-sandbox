import React from "react";
import styles from "./SearchBar.module.scss";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = props => {
  const { placeholderText, handleInput } = props;

  return (
    <input
      type="text"
      onInput={event => handleInput(event.target.value)}
      placeholder={placeholderText}
    />
  );
};

export default SearchBar;
