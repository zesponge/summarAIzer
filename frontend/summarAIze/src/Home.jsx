import React from 'react'
import Create from './Create'
import { useState } from 'react'

function Home() {
    const [todos, setTodos] = useState([])
  return (
    <div>
      <h2>Video SummarAIzer</h2>
      <Create />
      {
        todos.length === 0 ? 
        <p>No record</p> 
        :
        todos.map(todo => (
          <div>
            {todo}
          </div>
        ))
      }
    </div>
  )
}

export default Home
