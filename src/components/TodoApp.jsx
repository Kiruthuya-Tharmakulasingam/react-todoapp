import React, { useState } from 'react'

function TodoApp() {
  const [task, setTask] = useState('')        
  const [todos, setTodos] = useState([])      

  function addTask() {
    if (task.trim() === '') {
      alert('Please enter a task!')
      return
    }
    setTodos([...todos, task])   
    setTask('')                  
  }
  
  function deleteTask(index) {
    const newList = todos.filter((_, i) => i !== index)
    setTodos(newList)
  }
  return (
    <>
      <div>
        <h1>My To-Do List</h1>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>
          Add Task
        </button>
        <div>
          {todos.map((item, index) => (
            <div key={index}>
              <span>{item}</span>
              <button onClick={() => deleteTask(index)}>
                Del
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TodoApp


