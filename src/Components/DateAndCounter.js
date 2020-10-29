import React from 'react'
import moment from 'moment'

export default function DateAndCounter({ todoCount }) {
    return (
        <div className="date-todo-count-container">
            <div className="date-card">
                <p className="date-card-day">{moment().format('dddd')}</p>
                <p className="date-card-month-year">{moment().format('MMMM, MM')}</p>
                <p className="date-card-year">{moment().format('YYYY')}</p>
            </div> 
        <div className="todo-count-card">
          <p className="todo-count">{todoCount}</p>
          <p className="todo-tasks">Tasks</p>
        </div>
      </div>
    )
}
