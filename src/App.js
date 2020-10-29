import React, { useState } from "react";
import Todo from "./Components/Todo.js";
import Tabs from "./Components/Tabs.js"
import DateAndCounter from "./Components/DateAndCounter.js"
import AddTodoDialog from "./Components/AddTodoDialog.js"
import "./Styles/App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Task 1", done: false, priority: 1, date: new Date() },
    { id: 2, name: "Task 2", done: false, priority: 1, date: new Date() },
    { id: 3, name: "Task 3", done: false, priority: 1, date: new Date() },
    { id: 4, name: "Task 4", done: false, priority: 2, date: new Date()},
    { id: 5, name: "Task 5", done: false, priority: 2, date: new Date() },
    { id: 6, name: "Task 6", done: false, priority: 3, date: new Date() },
    { id: 7, name: "Task 7", done: false, priority: 3, date: new Date() },
    { id: 8, name: "Task 8", done: false, priority: 3, date: new Date() },
  ]);
  const [tab, setTab] = useState("Pending");
  const [todoName, setTodoName] = useState("")
  const [startDate, setStartDate] = useState(new Date());
  const [formVals, setFormVals] = useState({
    id: parseInt(Math.random() * 100),
    name: '',
    done: false,
    priority: 1,
    date: new Date(),
})
// Start of functions to modify state/local data

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
  const changeDate = (index, date) =>{
    const newTodos = [...todos];
    newTodos[index].date = date
    setStartDate(date)
  }

  const addFormValue = (value, valName) => {
    const newFormVal = {...formVals}
    switch(valName) {
        case 'name':
        newFormVal.name = value
          break;
        case 'priority':
        newFormVal.priority = parseInt(value)
          break;
        case 'date':
        newFormVal.date = value
          break;
        default:
      }
    setFormVals(newFormVal)
}
const addTodo = () => {
  const newTodos = [...todos]
  newTodos.push(formVals)
  setTodos(newTodos.sort((a, b) => a.priority - b.priority));
}

// Start of of main app and layout

  return (
    <div className="app">
      <div className="main-container">
      <div className="main-layout">
        <div className="main-tab-container">
          <Tabs changeTab={changeTab} tab={tab}/>
        </div>
        <div className="main-todo-list-container">          
          <div className="todo-list-group">
          {todoName && <p className="todo-delete">{todoName} has been deleted.</p>}
          {todos.map((todo, index) => {
            if(tab === "Pending"){
              return( <Todo
                key={index}
                tab={tab}
                todo={todo}
                index={index}
                changeToDo={changeToDo}
                changePriority={changePriority}
                deleteTodo={deleteTodo}
                changeDate={changeDate}
                startDate={startDate}/>)
            } else if (tab === "Completed" && todo.done === true){
              return (
                <Todo
                  key={index}
                  tab={tab}
                  todo={todo}
                  index={index}
                  changeToDo={changeToDo}
                  changePriority={changePriority}
                  deleteTodo={deleteTodo}
                  changeDate={changeDate}
                  startDate={startDate}/>)
            }
            })}
                {tab !== 'Pending' && todos.filter(x => x.done).length === 0 && 
                  <p style={{textAlign: 'center', marginTop: '50px'}}>No todos moved to done yet</p>
                }
                {tab === 'Pending' && todos.length === 0 && 
                  <p style={{textAlign: 'center', marginTop: '50px'}}>No todos added yet</p>
                }
                <div className="add-btn-container">
                  <AddTodoDialog addFormValue={addFormValue} addTodo={addTodo}/>
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
