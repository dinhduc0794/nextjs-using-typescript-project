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

  return (
    <div>
      <div className="parent">
        <div className="child"></div>
      </div>

      <InputTodo
        dduc = {name}
        age = {age}
        info = {info}
      />
    </div>
  )
}

export default App
