import React, { useState } from 'react'

function TodoApp() {
  const [task, setTask] = useState('')        
  const [todos, setTodos] = useState([])      

  function addTask() {
    if (task.trim() === '') {
      alert('Please enter a task!')
      return
    }
    const isDuplicate = todos.some(
    (value) => value.trim().toLowerCase() === task.trim().toLowerCase()
  )
  if (isDuplicate) {
    alert('Task already exists')
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
      <div style={styles.box}>
        <h1>My To-Do List</h1>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)} style={styles.input}
        />
        <button style={styles.addBtn} onClick={() => addTask(task)}>
          Add Task
        </button>
        <div>
          {todos.map((item, index) => (
            <div key={index} style={styles.task}>
              <span>{item}</span>
              <button style={styles.delBtn} onClick={() => deleteTask(index)}>
                Del
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const styles = {
  box: {
    backgroundColor: '#f0f1f7ff',
    width: '300px',
    margin: '200px auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 10px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  input: {
    padding: '8px',
    width: '193px',
    borderRadius: '5px',
    border: '1px solid #ecd9d9ff',
    marginRight: '8px',
  },
  addBtn: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '8px 12px',
    cursor: 'pointer',
  },
  task: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: '8px 0',
    padding: '6px 10px',
    borderRadius: '6px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  delBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'black',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
}


export default TodoApp


