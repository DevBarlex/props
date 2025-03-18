function Task({ taskProp, deleteTask, toggleTaskCompletion}) {
    return (
        <li>
            <p
            style={{ textDecoration: taskProp.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            onClick={() => toggleTaskCompletion(taskProp.id)}>{taskProp.text}</p>
            <button onClick={(e) => { e.stopPropagation(); deleteTask(taskProp.id)}}>
                Elminar
            </button>
        </li>
    )
}

export default Task