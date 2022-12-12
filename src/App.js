import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  // -------- User inputs a task --------
  const [userInput, setUserInput] = useState('');
  // -------- Array of todos --------
  const [todoList, setTodoList] = useState([]);

  return (
    <div className='container'>
      <header className='header'>
        <h1>ToDo + Weather</h1>
      </header>
      <Form
        todoList={todoList}
        setTodoList={setTodoList}
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <TodoList setTodoList={setTodoList} todoList={todoList} />
    </div>
  );
}

export default App;
