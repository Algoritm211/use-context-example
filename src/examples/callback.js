import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ItemsList from "./ItemsList";

function App() {
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles =  {
      color: colored ? 'darkred' : 'black'
    }

  const generatedItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((item, index) => `Элемент ${index + 1}`)
  }, [count])

  return (
    <div className="App">
      <h1 style={styles}>Количество элементов {count}</h1>
      <button className="btn btn-success" onClick={() => setCount(prev => prev + 1)}>Добавить</button>
      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Изменить</button>
      <ItemsList getItems={generatedItemsFromAPI} />
    </div>


  );
}

export default App;
