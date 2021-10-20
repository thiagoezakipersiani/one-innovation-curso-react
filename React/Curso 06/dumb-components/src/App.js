import React, {useState} from "react";
import Button from "./Components/Button";
import Calc from "./Components/Calc";

function App() {

  const [value,setValue] = useState(0)
  const [min,setMin] = useState(0)
  const [max,setMax] = useState(40)

  const handleClick = () => {
    setMin(10)
  }

  const handleOnChange = ({target}) =>{
    const value= target.value  
    setValue(min+max + value)

  }

  return (
    <>
      <div>
        <Button
          onClick={handleClick}
        >
          Adicionar Valor
        </Button>
      </div>
      <br />
      <div> 
        <h1>Valor Calculado: {value}</h1>
        <Calc 
        min={min}
        max={max}
        onChange={handleOnChange}
        />
      </div>
    </>
  )
}

export default App;
