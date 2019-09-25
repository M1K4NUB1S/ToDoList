import React from 'react'

const ToDoList = ({showAll, showCompleted, match}) => {

    return(
        <>
        <h1 className="m-3">Liste de tâches</h1>
        <ul className="list-group m-3">
            {match.params.filter === 'completed' ? showCompleted() : showAll() }
        </ul>
        </>
    )
}

export default ToDoList