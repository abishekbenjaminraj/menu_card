import React, { useState } from 'react';

const State = () => {
  const [date, setDate] = useState(new Date());
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const add = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + step);
    setDate(newDate);
    setCount(count + step);
  };

  const sub = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - step);
    setDate(newDate);
    setCount(count - step);
  };

  const newDate = date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    year: 'numeric',
    day: 'numeric',
  });

  return (
    <div>
      <div className='step'>
        <p>Step : {step} </p> 
        <button onClick={() => setStep(step + 1)}>+</button>
        <button onClick={() => setStep(step - 1)}>-</button>
        
      </div>
      <div className='count'>
        <p>Count : {count}</p>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
      </div>
      <h3>
        {count !== 0 ? (count < 0 ? (count * -1) : (count)) : ('')}
        {count !== 0 && (
          <span> day {count < 0 ? 'ago' : 'from today'} was</span>
        )}
        {count === 0 && <span>Today is</span>} {newDate}
      </h3>
    </div>
  );
};

export default State;