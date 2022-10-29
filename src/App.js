import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  // todos is all of our todos
  //setTodos is a function that allows us to update our todos
  const [todos, setTodos] = useState([{ id: 1, name: "Item1", complete: false }]);
  return (
    // Fragment
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
