import React from 'react'

const ToDo = ({task, handleChange}) => {

    return(
        <li className="list-group-item d-flex align-items-center"> 
            {task.name} 
            <button className={"btn btn-sm ml-auto " + (task.completed ? 'btn-success' : 'btn-outline-success')} onClick={handleChange}>
                &#x2713;
            </button>
        </li>
    )
}

export default ToDo