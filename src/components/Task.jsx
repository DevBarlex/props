function Task({ task, deleteTask, toggleTaskCompletion}) {
    return (
        <li 
            className="card"
            style={{ textDecoration: task.completed ? 'line.through' : 'none', cursor: 'pointer' }}
            onClick={() => toggleTaskCompletion(task.id)}
        >
            {task.text} 
            <buttom onClick={(e) => { e.stopPropagation(); deleteTask(task.id)}}>
                Elminar
            </buttom>

        </li>
    )
}

export default Task