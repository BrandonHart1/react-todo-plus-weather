import React from 'react';

import './Form.css';

const Form = ({ userInput, setUserInput, todoList, setTodoList }) => {
  const userInputHandler = (e) => {
    // console.log(e.target.value);
    setUserInput(e.target.value);
  };

  const submitTodoListHandler = (e) => {
    e.preventDefault();
    // ----- Create an object with random id -----
    setTodoList([
      ...todoList,
      { text: userInput, completed: false, id: Math.random() * 1000 },
    ]);
    // ----- Reset to an empty text box after user adds task -----
    setUserInput('');
  };

  return (
    <>
      <form>
        <input
          type='text'
          value={userInput} // ----- Reset the text box after user adds task -----
          className='todo_list_input'
          onChange={userInputHandler}
        />
        <button
          onClick={submitTodoListHandler}
          className='todo_list_button'
          type='submit'
        >
          Add Task {/* -------- Need to change to icon -------- */}
        </button>
        {/* -------- Select which items to show -------- */}
        <div className='select__box'>
          <select name='todos' className='todo__filter'>
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
