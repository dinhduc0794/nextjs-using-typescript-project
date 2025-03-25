import { useState } from 'react'
import './App.css'
import InputTodo from './todo/input.todo'

function App() {
  const name = "dinhduc0794"  //props
  const age = 20
  const info = {
    gender: "male",
    address: "hcm"
  } 

  const tasks = ["task 1", "task 2", "task 3", "task 4", "task 5", "task 6"]

  return (
    <div>
      <div className="parent">
        <div className="child"></div>
      </div>

      <InputTodo
        name = {name}
        age = {age}
        dinhduc = {info}
      />

      <br />  
      <ul>
        {tasks.map((item, index) => {
          return (
            <li key = {index}>{item}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
