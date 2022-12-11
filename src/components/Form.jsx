import React from 'react';

import './Form.css';

const Form = ({ setUserInput }) => {
  const userInputHandler = (e) => {
    console.log(e.target.value);
    setUserInput(e.target.value);
  };

  return (
    <>
      <form>
        <input
          className='todo_list_input'
          onChange={userInputHandler}
          type='text'
        />
        <button className='todo_list_button' type='submit'>
          Add Task
        </button>
        <div className='select__box'>
          {/* -------- Select which items to show -------- */}
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
