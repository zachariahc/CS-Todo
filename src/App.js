import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Todo from "./Components/Todo.js";
import Tabs from "./Components/Tabs.js"
import DateAndCounter from "./Components/DateAndCounter.js"
import add from './Assets/add.png'
import "react-datepicker/dist/react-datepicker.css";
import "./Styles/App.css";

function App() {
  const [todos, setTodos] = useState([
    { name: "Task 1", done: false, id: 1, priority: 1 },
    { name: "Task 2", done: false, id: 2, priority: 1 },
    { name: "Task 3", done: false, id: 3, priority: 1 },
    { name: "Task 4", done: false, id: 4, priority: 2 },
    { name: "Task 5", done: false, id: 5, priority: 2 },
    { name: "Task 6", done: false, id: 6, priority: 3 },
    { name: "Task 7", done: false, id: 7, priority: 3 },
    { name: "Task 8", done: false, id: 8, priority: 3 },
  ]);
  const [tab, setTab] = useState("Pending");
  const [todoName, setTodoName] = useState("")
  const [startDate, setStartDate] = useState(new Date());


  function changeTab(tab) {
    setTab(tab);
  }
  const changeToDo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done === false ? newTodos[index].done = true : newTodos[index].done = false
    setTodos(newTodos);
  };
  const changePriority = (index, priorityLevel) => {
    const newTodos = [...todos];
    newTodos[index].priority = priorityLevel;
    setTodos(newTodos.sort((a, b) => a.priority - b.priority));
  };
  const deleteTodo = (index, name) => {
    setTodoName(name)
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos)
    setTimeout(() => {
      setTodoName('')
    }, 3000)
  }

  return (
    <div className="app">
          
      <div className="main-container">

      <div className="main-layout">

        {/* <label> */}

        {/* </label> */}

        <div className="main-tab-container">
          <Tabs changeTab={changeTab} tab={tab}/>
        </div>
        <div className="main-todo-list-container">
          <div className="todo-list-group">
          {todoName && <p className="todo-delete">{todoName} has been deleted.</p>}
            {tab === "Pending"
              ? todos.map((x, i) => {
                    return (
                      <Todo
                        key={i}
                        tab={tab}
                        todo={x}
                        i={i}
                        changeToDo={changeToDo}
                        changePriority={changePriority}
                        deleteTodo={deleteTodo}
                      ></Todo>
                    );
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
                        deleteTodo={deleteTodo}
                      ></Todo>
                    );
                  }
                })}
                {tab !== 'Pending' && todos.filter(x => x.done).length === 0 && 
                  <p style={{textAlign: 'center', marginTop: '50px'}}>No todos moved to done yet</p>
                }
                <div className="add-btn-container">
                  <img src={add} />
                </div>
          </div>
        </div>
        <div className="main-date-count-container">
          <DateAndCounter todoCount={todos.length}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
