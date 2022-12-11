import React from 'react';

import './Form.css';

const Form = ({ userInput, setUserInput, todoList, setTodoList }) => {
  const userInputHandler = (e) => {
    console.log(e.target.value);
    setUserInput(e.target.value);
  };

  const submitTodoListHandler = (e) => {
    e.preventDefault();
    // ----- Create an object with random id -----
    setTodoList([
      ...todoList,
      { text: userInput, completed: false, id: Math.random() * 10000 },
    ]);
    // ----- Reset to an empty text box after user adds task -----
    setUserInput('');
  };

  return (
    <>
      <form>
        <input
          value={userInput} // ----- Reset the text box after user adds task -----
          className='todo_list_input'
          onChange={userInputHandler}
          type='text'
        />
        <button
          onClick={submitTodoListHandler}
          className='todo_list_button'
          type='submit'
        >
          Add Task
        </button>
        {/* -------- Select which items to show -------- */}
        <div className='select__box'>
          <select>
            <option value='all'>All</option>
            <option value='complete'>Completed Tasks</option>
            <option value='incomplete'>Incomplete Tasks</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Form;
