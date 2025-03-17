import { useState } from 'react';
import AddTask from './components/AddTaskForm';
import Task from './components/Task';
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (text) => {
    const newTask = { id: tasks.length + 1, text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };  

  

  return (
    <>
      <h1>Lista de Tareas</h1>
      <AddTask addTask={addTask} />
      <ul>
        {tasks.map(task => (
          <Task 
            key={task.id} 
            task={task} 
            deleteTask={deleteTask} 
            toggleTaskCompletion={toggleTaskCompletion} 
          />
        ))}
      </ul>
    </>
  );
};

export default App;

