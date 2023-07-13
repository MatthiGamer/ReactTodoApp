// https://www.youtube.com/watch?v=Rh3tobg7hEo

// ------------------------------ //
// Basic structure of a component //
// ------------------------------ //
// 1. Imports                     //
// 2. Hooks                       //
// 3. Helper Functions            //
// 4. Returning JSX               //
// ------------------------------ //



// ------- //
// Imports //
// ------- //

import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import "./style.css"



export default function App(){

  // ----- //
  // Hooks //
  // ----- //

  // Load data from local storage
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  // Save data in local storage
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])



  // ---------------- //
  // Helper functions //
  // ---------------- //

  function addTodo(title){
    setTodos(currentTodos => {
      return [...currentTodos,
          {id: crypto.randomUUID(), title, completed: false}]
    })
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id){
          return {...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }



  // ------------- //
  // Returning JSX //
  // ------------- //

  return (
    <>
      <NewTodoForm addTodo={addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}