import React, { useState } from 'react'
import './App.css'
import Todo from './Todo'
import TodoForm from './TodoForm'


function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn about React',
      isCompleted: false },
    { text: ' Workout',
      isCompleted: false },
    { text: 'Build todo App',
      isCompleted: false}
  ])

  //adding todo items by setting a new State
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
  } 

    return (
      <div className='app'>
        <div className='todo-list'>
        <TodoForm addTodo={addTodo}/>
        <button>Add a New Item</button>
        {todos.map((todo, index) => (
          <Todo 
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
        />
        ))}   
        </div>
    </div>
    )
  }


export default App;
