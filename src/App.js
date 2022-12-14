import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Weather from './components/Weather';

function App() {
  // -------- User inputs a task --------
  const [userInput, setUserInput] = useState('');
  // -------- Array of todos --------
  const [todoList, setTodoList] = useState([]);

  const [filteredStatus, setFilteredStatus] = useState('all');

  const [filteredTodoList, setFilteredTodoList] = useState([]);

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
      <Weather />
    </div>
  );
}

export default App;
