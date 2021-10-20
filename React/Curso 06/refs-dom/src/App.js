import React, {useRef , useEffect ,useState} from 'react';

function App() {
  const inputRef=useRef()
  const count=useRef(2)
  const [,setValue] = useState(false)

  const handleClick = () =>{
    inputRef.current.focus()
  }

  useEffect(() =>{
    setTimeout (()=> {
      count.current=400
      setValue(true)
    },4000)
  })

  return (
    <>
    <h1>Valor Count: {count.current}</h1>
    Foco: <input ref={inputRef}></input>
    <br />
    <br />
    <button onClick={handleClick}>Focar</button>
    </>
  );
}

export default App;
