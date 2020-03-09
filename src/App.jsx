import React, { useState } from "react";
import styles from "./App.module.scss";

import Button, { example } from "./components/Button/Button";
// import {example} from './components/Button/Button'; //named import
import SearchBar from "./components/SearchBar/SearchBar"; //default import
// import Counter from "./components/Counter";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCoffee, faCheckSquare);

const App = () => {
  const [currentNum, updateNum] = useState(100);

  const testFunc = inputValue => {
    console.log(inputValue);
  };

  return (
    <>
      <h1>{currentNum}</h1>
      <SearchBar
        placeholderText={"input number"}
        handleInput={event => updateNum(Number(event))}
      />
      <Button
        btnText={"Increment"}
        handleClick={() => updateNum(currentNum + 1)}
      />
      <Button
        btnText={"Decrement"}
        handleClick={() => updateNum(currentNum - 1)}
      />

      <Button
        btnText={"Multiply times 2"}
        handleClick={() => updateNum(currentNum * 2)}
      />
      <Button
        btnText={"Divide by 2"}
        handleClick={() => updateNum(currentNum / 2)}
      />
    </>
  );
};

export default App;
