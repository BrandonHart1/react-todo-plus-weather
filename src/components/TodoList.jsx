import React from 'react';
import Todo from './Todo';

import './TodoList.css';

const TodoList = ({ todoList, setTodoList }) => {
  // console.log(todoList);
  return (
    <div className='todo__list__container'>
      <ul className='todo__list'>
        {todoList.map((todo) => (
          <Todo
            setTodoList={setTodoList}
            todoList={todoList}
            text={todo.text}
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
