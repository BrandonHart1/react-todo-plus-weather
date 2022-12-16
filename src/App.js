import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  // -------- User inputs a task --------
  const [userInput, setUserInput] = useState('');
  // -------- Array of todos --------
  const [todoList, setTodoList] = useState([]);

  const [filteredStatus, setFilteredStatus] = useState('all');

  const [filteredTodoList, setFilteredTodoList] = useState([]);

  const weatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=4b7e73e873a4c000eb63b6ddcbfe1b49
`;

  useEffect(() => {
    const filteredListHandler = () => {
      switch (filteredStatus) {
        case 'completed':
          setFilteredTodoList(
            todoList.filter((todo) => todo.completed === true)
          );
          break;
        case 'incomplete':
          setFilteredTodoList(
            todoList.filter((todo) => todo.completed === false)
          );
          break;
        default:
          setFilteredTodoList(todoList);
      }
    };
    filteredListHandler();
  }, [todoList, filteredStatus]);
  // -------- Function to switch the status --------

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
        setFilteredStatus={setFilteredStatus}
      />
      <TodoList
        filteredTodoList={filteredTodoList}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </div>
  );
}

export default App;
