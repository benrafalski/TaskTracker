import { useState, useEffect } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // Fetch Single Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  // Add a Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])

    // Original Add Task Method
    /* const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask]) */
  }

  // Delete a Task
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    res.status === 200 ?
      setTasks(tasks.filter((task) => task.id !== id)) :
      alert('Error deleting task!')
  }

  // Toggle reminder from true/false
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type' : 'application/json'
       },
       body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      {showAddTask ? <AddTask onAdd={addTask}/> : ''}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onRemind={toggleReminder} /> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
