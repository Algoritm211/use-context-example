import React, { useEffect, useRef, useState } from "react";

let renderCount = 1;

function App() {
  // const [renderCount, setRenderCount] = useState(1)

  const [value, setValue] = useState("initial");
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef('')

  useEffect(() => {
    renderCount.current++;
  });

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current.focus()

  return (
    <div className="App">
      <h1> Number of renders {renderCount.current}</h1>
      <h2>Previous state {prevValue.current}</h2>
      <input
        ref={inputRef}
        type="text"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <button className="btn btn-success" onClick={focus}>Фокус</button>
    </div>
  );
}

export default App;
