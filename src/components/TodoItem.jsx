import React from 'react'

const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <div className='p-2 md:p-4 w-full'>
        {todo.length === 0 ? (
          <h2 className='text-2xl font-semibold text-green-500 text-center'>TodoList is empty</h2>
        ) : (
          <>
            <div className='flex justify-between p-3 items-center border-2 border-green-500 rounded-md'>
              <h2 className={`text-xl font-bold overflow-scroll ${todo.completed ? 'line-through' : ''}` }>{todo.text}</h2>
              <div className='flex flex-col gap-2 justify-center items-center md:flex-row'>
                <button
                  onClick={() => onToggleTodo(todo.id)}
                  className='text-lg md:text-xl font-bold px-2 py-1 md:px-3 md:py-2 rounded-md bg-green-500 hover:bg-green-600'>Completed </button>
                <button
                  onClick={() => onDeleteTodo(todo.id)}
                  className='text-lg md:text-xl font-bold px-5 py-1 md:px-3 md:py-2 rounded-md bg-green-500 hover:bg-green-600'>Delete</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default TodoItem