import React from 'react';

const Form = ({ setUserInput }) => {
  const userInputHandler = (e) => {
    console.log(e.target.value);
    setUserInput(e.target.value);
  };

  return (
    <>
      <form>
        <input
          onChange={userInputHandler}
          type='text'
          className='todo_list_input'
        />
        <button className='todo_list_button' type='submit'></button>
        <div className='select'>
          {/* -------- Select which items to show -------- */}
          <select className='filter__todo'>
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
