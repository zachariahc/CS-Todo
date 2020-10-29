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
    todo, 
    index}) {
    // Decides color of chip when priorty is selected
    const chipColor = (priorityColor, todoPrority) => {
        let colorOfChip = 'no-chip-color';
        if(priorityColor === todoPrority){
            colorOfChip = `chip-color-${todoPrority}`
        }
        return colorOfChip
    }
    const squareColor = (priorityColor, done) => {
        // Could be refactored to a switch
        let square
        if(priorityColor === 1 && !done) square = `check-${priorityColor}`
        if(priorityColor === 2 && !done) square = `check-${priorityColor}`
        if(priorityColor === 3 && !done) square = `check-${priorityColor}`
        return square
    }


    return (
        <div className="todo-container">
            <div className="todo-group">
                <div className="todo-text-icon">
                 <img className="pointer filter" 
                    className={squareColor(todo.priority, todo.done)}
                    alt={todo.name} onClick={() => changeToDo(index)} 
                    src={todo.done ? checked : unchecked }/>
                  <span className="todo-name">{todo.name}</span>
                </div>
                <div className="todo-text-icon">
                    <img alt={todo.name} className="pointer" src={cancel} onClick={() => deleteTodo(index, todo.name)}/>
                    <span className="cal-group cal-date">
                        {moment(todo.date).format('MMM, D YYYY')}
                    </span>
                      <DatePicker 
                        selected={todo.date} 
                        onChange={date => changeDate(index, date)} 
                        customInput={<img alt={todo.name} className="cal-group" src={calbutton}/>}/>
                </div>
            </div>
           <div className="chip-levels-group">
               <p className={chipColor(3, todo.priority)} onClick={() => changePriority(index, 3)}>Low</p>
               <p className={chipColor(2, todo.priority)} onClick={() => changePriority(index, 2)}>Medium</p>
               <p className={chipColor(1, todo.priority)} onClick={() => changePriority(index, 1)}>High</p>
           </div>
        </div>
    )
}


