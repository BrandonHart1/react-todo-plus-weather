import React from 'react';

import './Todo.css';

const Todo = ({ text, todoList, setTodoList }) => {
  // -------- Delete --------
  const deleteHandler = () => {
    setTodoList(todoList.filter((element) => element.id !== todoList.id));
  };
  return (
    <div className='todo'>
      <li className='todo__item'>{text}</li>
      <button className='check__btn'>
        <i className='fa fa-check'></i>
      </button>
      <button onClick={deleteHandler} className='trash__btn'>
        <i className='fa fa-trash'></i>
      </button>
    </div>
  );
};

export default Todo;
