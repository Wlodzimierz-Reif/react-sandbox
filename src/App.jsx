import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";

import Button from "./components/Button/Button";
import SearchBar from "./components/SearchBar";
import Counter from "./components/Counter";

import { firestore } from "./firebase.js";

import {
  faCoffee,
  faCheckSquare,
  faDog
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCoffee, faCheckSquare, faDog);

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    // first load up page...
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    firestore
      .collection("todo-items")
      .doc("item-list")
      .get()
      .then(doc => {
        const retrievedItems = doc.data().items;
        setTodoItems(retrievedItems);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const addToDb = () => {
    const newItems = [...todoItems, newItem.toLowerCase()];

    const newDoc = {
      items: newItems
    };

    firestore
      .collection("todo-items")
      .doc("item-list")
      .set(newDoc)
      .then(() => {
        fetchTodos();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteFromDb = item => {
    const newArray = [...todoItems];
    const position = newArray.indexOf(item);
    newArray.splice(position, 1);

    const newDoc = {
      items: newArray
    };

    firestore
      .collection("todo-items")
      .doc("item-list")
      .set(newDoc)
      .then(() => {
        fetchTodos();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getItemJsx = () => {
    return todoItems.map(item => (
      <>
        <p>{item}</p>
        <button onClick={() => deleteFromDb(item)}>Delete</button>
      </>
    ));
  };

  const addNewDoc = () => {
    const userId = "barry365";

    const newDoc = {
      name: "barry",
      age: 24,
      isTechie: false
    };

    firestore
      .collection("users")
      // .doc("bary365")
      // .set(newDoc)
      .doc()
      .set(newDoc)
      .then(() => {
        fetchTodos();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteDoc = () => {
    const userId = "barry365";

    firestore
      .collection("users")
      .doc(userId)
      .delete()
      .then(() => {
        fetchTodos();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <button onClick={addNewDoc}>Add new Doc</button>
      <button onClick={deleteDoc}>Delete new Doc</button>

      <input
        type="text"
        placeholder="Todo item..."
        onInput={event => setNewItem(event.target.value)}
      />
      <button onClick={addToDb}>Submit</button>
      {getItemJsx()}
    </>
  );
};

export default App;
