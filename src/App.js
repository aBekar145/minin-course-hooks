import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// let renderCount = 1;

function App() {
  // const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState('initial');
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef('');

  useEffect(() => {
    // setRenderCount((prev) => prev + 1);
    renderCount.current++;
    console.log(inputRef.current.value);
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => inputRef.current.focus();

  return (
    <div className="App">
      <h1>Count renders: {renderCount.current}</h1>
      <h2>Last state: {prevValue.current}</h2>
      <input
        ref={inputRef}
        type="text"
        on
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="btn btn-success" onClick={focus}>
        Focus
      </button>
    </div>
  );
}

export default App;
