import React, { useEffect, useState } from 'react';

function App() {

  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [pos, setPos] = useState({
    x: 0, y: 0
  }) 

  // useEffect(() => {
  //   console.log('render');
  // })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}/`)
      .then(response => response.json())
      .then(json => setData(json))

    return () => {
      console.log('clean type');
    }
    
  }, [type])

  const mousemoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
    console.log('componentDidMount');

    window.addEventListener('mousemove', mousemoveHandler)

    return () => {
      window.removeEventListener('mousemove', mousemoveHandler)
    }
  }, [])
 
  return (
    <div className="App">
      <h1>Ресурс {type}</h1>
      <button onClick={() => setType('users')} className='btn btn-primary'>
        Пользователи
      </button>
      <button onClick={() => setType('todos')} className='btn btn-warning'>
        Todo
      </button>
      <button onClick={() => setType('posts')} className='btn btn-dark'>
        Посты
      </button>

      {/* <pre>
        {JSON.stringify(data, null, 2)}
      </pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );

}

export default App;
