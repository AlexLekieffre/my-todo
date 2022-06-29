import React from 'react'
import Task from './atoms/task'

export default function MyTask({ task,toggleTodo}) {
  
  return (
    task.map(todo => {
      return <Task key={todo.id} toggleTodo={toggleTodo} todo={todo} />
    })
  )
}