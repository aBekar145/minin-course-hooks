import React, { useState } from 'react';

const computeInintialCounter = () => {
  console.log('Some calculations...');
  return Math.trunc(Math.random() * 20);
};

const State = () => {
  // const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = useState(computeInintialCounter());
  const [counter, setCounter] = useState(() => {
    return computeInintialCounter();
  });

  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now(),
  });

  const increment = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
    setCounter((prev) => {
      return prev + 1;
    });
  };

  const decriment = () => {
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
  };

  const updateTitle = () => {
    setState((prev) => {
      return {
        ...prev,
        title: 'a new name',
      };
    });
  };

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={increment} className="btn btn-success">
        Add
      </button>
      <button onClick={decriment} className="btn btn-danger">
        Remove
      </button>
      <button onClick={updateTitle} className="btn btn-danger">
        Change name
      </button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default State;
