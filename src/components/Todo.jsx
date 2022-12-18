import React from 'react';

import './Todo.css';

const Todo = ({ text, todo, todoList, setTodoList }) => {
  // -------- Delete --------
  const deleteHandler = () => {
    setTodoList(todoList.filter((element) => element.id !== todo.id));
  };

  const completedHandler = () => {
    setTodoList(
      todoList.map((element) => {
        if (element.id === todo.id) {
          return {
            ...element,
            completed: !element.completed,
          };
        }
        return element;
      })
    );
  };

  return (
    // -------- List of tasks --------
    <div className='todo'>
      <li className={`todo__item ${todoList.completed ? 'completed' : ''}`}>
        {text}
      </li>

      {/* -------- Task completed -------- */}
      <button onClick={completedHandler} className='check__btn'>
        <i className='fa fa-check'></i>
      </button>

      {/* -------- Delete task -------- */}
      <button onClick={deleteHandler} className='trash__btn'>
        <i className='fa fa-trash'></i>
      </button>
    </div>
  );
};

export default Todo;
