import React, { useState }  from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Styles/Todo.css";
import unchecked from '../Assets/unchecked.png'
import checked from '../Assets/checked.png'
import calbutton from '../Assets/calbutton.png'
import cancel from '../Assets/cancel.png'
import moment from 'moment';

export default function Todo({
    changeToDo, 
    changePriority, 
    deleteTodo,
    changeDate,
    startDate,
    todo, 
    i}) {
    // const [startDate, setStartDate] = useState(new Date());
    // Decides color of chip when priorty is selected
    const chipColor = (priorityColor, todoPrority) => {
        let colorOfChip = 'no-chip-color';
        if(priorityColor === todoPrority){
            colorOfChip = `chip-color-${todoPrority}`
        }
        return colorOfChip
    }

    return (
        <div className="todo-container">
            <div className="todo-group">
                <div className="todo-text-icon">
                 <img onClick={() => changeToDo(i)} src={todo.done ? checked : unchecked} alt="unchecked box"/>
                  <span className="todo-name">{todo.name}</span>
                </div>

                <div className="todo-text-icon">
                    <img className="pointer" src={cancel} onClick={() => deleteTodo(i, todo.name)}/>
                    <span className="cal-group cal-date">
                        {moment(todo.date).format('MMM, D YYYY')}
                    </span>
                      <DatePicker 
                        selected={startDate} 
                        onChange={date => changeDate(i, date)} 
                        customInput={<img className="cal-group" src={calbutton}/>}/>
                </div>
            </div>

           <div className="chip-levels-group">
               <p className={chipColor(3, todo.priority)} onClick={() => changePriority(i, 3)}>Low</p>
               <p className={chipColor(2, todo.priority)} onClick={() => changePriority(i, 2)}>Medium</p>
               <p className={chipColor(1, todo.priority)} onClick={() => changePriority(i, 1)}>High</p>
           </div>
        </div>
    )
}


