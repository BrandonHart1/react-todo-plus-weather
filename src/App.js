import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [userInput, setUserInput] = useState('');
  const [todo__list, setTodoList] = useState([]);

  return (
    <div className='App'>
      <header>
        <h1>ToDo + Weather</h1>
      </header>
      <Form setUserInput={setUserInput} />
      <TodoList />
    </div>
  );
}

export default App;
