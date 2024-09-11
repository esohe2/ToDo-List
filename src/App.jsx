import './App.css'
import Input from './Components/input'
import React from 'react'
import Output from './Components/Output'
// import TodoList from './Components/edit'

export default function App() {
  return (
    <div className='body'>
      <h2>TO-DO LIST</h2>
      <Input/>
      {/* <TodoList/> */}
      <Output/>
    </div>
  )
}
