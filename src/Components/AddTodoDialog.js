import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import add from '../Assets/add.png'

import "../Styles/Modal.css"

export default function AddTodoDialog({ addFormValue, addTodo }) {
    var modal = document.getElementById("myModal");
    const [show, setShow] = useState(false)
    const [startDate, setStartDate] = useState(new Date());

    const showDialog = (show) => {
        show ? setShow(true) : setShow(false)
    }
    // TODO: figure this out later
    window.onclick = function(event) {
        if (event.target == modal) {
          setShow(false)
        }
      }
     const addTodoAndSubmit = (e) => {
        e.preventDefault()
        addTodo()
        showDialog()
     }

     const addDate = (date, type) => {
         setStartDate(date)
         addFormValue(date, type)
     }
    return (
        <div>
        <img alt="add-todo-button" className="pointer" onClick={() => showDialog(true)} id="myBtn" src={add} />
        { show &&
            <div id="myModal" className="dialog">
                <div className="dialog-content">
                    <div className="dialog-close-btn-container">
                        <p onClick={() => showDialog(false)} className="close-btn">&times;</p>
                    </div>
                    <form>
                        <label>Todo name:</label><br/>
                        <input
                         required
                         placeholder="Todo name"  
                         onChange={(e) => addFormValue(e.target.value, 'name')} 
                         type="text" 
                         id="todoname" 
                         name="todoname"/><br/>
                        <label>Priority:</label><br/>
                        <select 
                         required
                         onChange={(e) => addFormValue(e.target.value, 'priority')} 
                         name="priority" 
                         id="priority">
                            <option value={1}>High</option>
                            <option value={2}>Medium</option>
                            <option value={3}>Low</option>
                        </select>
                        <br/>
                        <label>Date:</label><br/>
                        <DatePicker
                        required 
                        onChange={date => addDate(date, 'date')} selected={startDate}  />
                         <br/>
                         <br/>
                        <input onClick={(e) => addTodoAndSubmit(e)} className="form-submit" type="submit" value="Submit"/>
                    </form> 
                </div>
            </div>
}
        </div>
    )
}
