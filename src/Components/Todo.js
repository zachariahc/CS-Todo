import React from 'react'
import "../Styles/Todo.css";
import unchecked from '../Assets/unchecked.png'
import checked from '../Assets/checked.png'
import calbutton from '../Assets/calbutton.png'
import cancel from '../Assets/cancel.png'

export default function Todo({changeToDo, changePriority, todo, i}) {
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
                    <img src={cancel}/>
                      <span className="cal-group cal-date">Nov 7th, 2020</span>
                    <img className="cal-group" src={calbutton}/>
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

const styles = {
    // todoContainer: {
    //     background: 'white', 
    //     margin: '15px', 
    //     paddingTop: '10px'
    // },
    // todoGroup: {
    //     display: 'flex', 
    //     justifyContent: 'space-between', 
    //     border: '1px solid black', 
    //     borderRadius: '3px',
    //     padding: '10px'
    // },
    // nameMargin: {
    //     marginLeft: '10px'
    // },
    // calGroup: {
    //     paddingLeft: '5px'
    // },
    // flexCenter: {
    //     // display:  'flex', alignItems: 'center'
    // }
}