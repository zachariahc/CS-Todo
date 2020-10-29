import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import add from '../Assets/add.png'

import "../Styles/Modal.css"

export default function AddTodoDialog({ addFormValue, addTodo }) {
    var modal = document.getElementById("myModal");
    const [show, setShow] = useState(false)
    const [startDate, setStartDate] = useState(new Date());

    const [name, setName] = useState('')
    const [priority, setPriority] = useState('')
    const [formDate, setFormDate] = useState('')


    const disableSubmit = () => {
      return name && priority && formDate
    }

    const showDialog = (show) => {
        show ? setShow(true) : setShow(false)
    }
    // TODO: figure this out later
    window.onclick = function(event) {
        if (event.target === modal) {
          setShow(false)
        }
      }
     const addTodoAndSubmit = (e) => {
        e.preventDefault()
        addTodo()
        showDialog()
        // Reset validation
        setName('')
        setPriority('')
        setFormDate('')
     }

     const validateForm = (value, name) => {
         console.log(value, name)
         switch(name){
             case 'priority':
             addFormValue(value, 'priority')
             setPriority(value)
             break;
             case 'name':
             addFormValue(value, 'name')
             setName(value)
             break;
             case 'date':
             addDate(value, name)
             setFormDate(value)
         }
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
                         onChange={(e) => validateForm(e.target.value, 'name')} 
                         type="text" 
                         id="todoname" 
                         name="todoname"/><br/>
                        <label>Priority:</label><br/>
                        <select 
                         required
                         onInput={(e) => validateForm(e.target.value, 'priority')} 
                         name="priority" 
                         id="priority">
                            <option value={1}>High</option>
                            <option value={2}>Medium</option>
                            <option value={3}>Low</option>
                        </select>
                        <br/>
                        <label>Date:</label><br/>
                        <DatePicker 
                         
                         onChange={date => validateForm(date, 'date')} selected={startDate}  />
                         <br/>
                         <br/>
                        <input 
                        disabled={!(name && priority && formDate)}
                        onClick={(e) => addTodoAndSubmit(e)}
                        className="form-submit" type="submit" value="Submit"/>
                    </form> 
                </div>
            </div>
}
        </div>
    )
}
