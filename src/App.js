import { useState } from "react";
import Todo from "./Components/Todo.js";
import "./Styles/App.css";

function App() {
  const [todos, setTodos] = useState([
    { name: "Task 1", done: false, id: 1, priority: "Low" },
    { name: "Task 2", done: false, id: 2, priority: "Low" },
    { name: "Task 3", done: false, id: 3, priority: "Low" },
    { name: "Task 4", done: false, id: 4, priority: "Low" },
    { name: "Task 5", done: false, id: 5, priority: "Low" },
    { name: "Task 6", done: false, id: 6, priority: "Low" },
    { name: "Task 7", done: false, id: 7, priority: "Low" },
    { name: "Task 8", done: false, id: 8, priority: "Low" },
  ]);
  const [tab, setTab] = useState("Pending");

  function changeTab(tab) {
    setTab(tab);
  }

  const changeToDo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = true;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="main">
        <div className="tab-group">
          <p className={tab === "Pending" ? "tab-group__tabs bold" : 'tab-group__tabs '} 
          onClick={() => changeTab("Pending")}>
            Pending
          </p>
          <p
            className={tab !== "Pending" ? "tab-group__tabs completed-tab bold" : 'tab-group__tabs completed-tab '} 
            onClick={() => changeTab("Completed")}>
            Completed
          </p>
        </div>

       <div style={{display: 'flex'}}>

       <div className="todo-list-group" style={{width: '75%'}}>
          {tab === "Pending"
            ? todos.map((x, i) => {
                if (x.done === false) {
                  return (
                    <Todo
                      key={i}
                      tab={tab}
                      todo={x}
                      i={i}
                      changeToDo={changeToDo}
                    ></Todo>
                  );
                }
              })
            : todos.map((x, i) => {
                if (x.done === true) {
                  return (
                    <Todo
                      key={i}
                      tab={tab}
                      todo={x}
                      i={i}
                      changeToDo={changeToDo}
                    ></Todo>
                  );
                }
              })}
        </div>

        <div style={{border: '2px solid red', width: '25%'}}>
          <div style={{border: '2px solid pink', margin: '10px'}}>
            <p>
            Wednesday
            </p>
            <p>
            November, 21
            </p>
            <p>
            2020
            </p>
          </div>
          <div style={{border: '2px solid blue', margin: '10px', width: '50%'}}>
            Todos:
            {todos.length}
          </div>
        </div>

       </div>
      </div>
    </div>
  );
}

export default App;
