import './App.css'
import InputComponent from './Components/InputComponent'
import React from 'react'
import Output from './Components/Output'
// import TodoList from './Components/edit'

export default function App() {
  return (
    <div className='body'>
      <h2>TO-DO LIST</h2>
      <InputComponent/>
      {/* <TodoList/> */}
      <Output/>
    </div>
  )
}
