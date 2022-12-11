import React from 'react';
import Todo from './Todo';

import './TodoList.css';

const TodoList = () => {
  return (
    <div className='todo__list__container'>
      <ul className='todo__list'></ul>
      <Todo />
    </div>
  );
};

export default TodoList;
