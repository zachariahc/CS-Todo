import { useState } from "react";
import Todo from "./Components/Todo.js";
import "./Styles/App.css";

function App() {
  const [todos, setTodos] = useState([
    { name: "Task 1", done: false, id: 1, priority: 3 },
    { name: "Task 2", done: false, id: 2, priority: 3 },
    { name: "Task 3", done: false, id: 3, priority: 3 },
    { name: "Task 4", done: false, id: 4, priority: 3 },
    { name: "Task 5", done: false, id: 5, priority: 2 },
    { name: "Task 6", done: false, id: 6, priority: 2 },
    { name: "Task 7", done: false, id: 7, priority: 2 },
    { name: "Task 8", done: false, id: 8, priority: 1 },
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
  const changePriority = (index, priorityLevel) => {
    const newTodos = [...todos];
    newTodos[index].priority = priorityLevel;
    setTodos(newTodos.sort((a, b) => a.priority - b.priority));

  };

  return (
    <div className="app">
      <div className="main">

    <div style={{border: '2px solid black', display: 'flex', justifyContent: 'center'}}>
        <div style={{display: 'flex', border: '2px solid pink', width: '90%'}}>
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
        </div>

       <div style={{display: 'flex', justifyContent: 'center'}}>
       <div className="todo-list-group" >
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
                      changePriority={changePriority}
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
                      changePriority={changePriority}
                    ></Todo>
                  );
                }
              })}
        </div>

        <div className="date-todo-count-container">
          <div className="date-card">
            <p className="date-card-day">
            Wednesday
            </p>
            <p className="date-card-month-year">
            November, 21
            </p>
            <p className="date-card-year">
            2020
            </p>
          </div>
          <div className="todo-count-card">
            <p className="todo-count">{todos.length}</p>
            <p className="todo-tasks">Tasks</p>
          </div>
        </div>

       </div>
      </div>
    </div>
  );
}

export default App;