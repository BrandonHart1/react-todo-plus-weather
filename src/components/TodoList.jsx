import React from 'react';
import Todo from './Todo';

import './TodoList.css';

const TodoList = ({ todoList, setTodoList }) => {
  // console.log(todoList);
  return (
    <div className='todo__list__container'>
      <ul className='todo__list'>
        {todoList.map((todoList) => (
          <Todo
            setTodoList={setTodoList}
            todoList={todoList}
            text={todoList.text}
            key={todoList.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
