import React from 'react';

import './Todo.css';

const Todo = () => {
  return (
    <div className='todo'>
      <li className='todo-item'>Testing</li>
      <button className='check__btn'>
        <i className='fa fa-check'></i>
      </button>
      <button className='trash__btn'>
        <i className='fa fa-trash'></i>
      </button>
    </div>
  );
};

export default Todo;
