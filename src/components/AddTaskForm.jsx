import { useState } from "react"
function AddTask (task) {
    const [taskText, setTaskText] = useState('')

    const handleSubmit = (e) => {
        e.preventdefault()
        if (taskText.trim() === '') return
        task(taskText) 
        setTaskText('')
    }
    
    return (
        <>
            <form onSSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    placeholder="Añadir nueva tarea"
                />
                <buttom type="submit">Agregar</buttom>
            </form>
        </>
    )
}

export default AddTask