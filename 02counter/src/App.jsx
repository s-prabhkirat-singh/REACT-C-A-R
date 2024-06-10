import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15);
  // let counter=15;
  const addValue=()=>{
    if(count<20){
      count++;
      setCount(count);}
  }
  const decValue=()=>{
    if(count>0){
    count--;
    setCount(count);}
  }

  return (
    <>
    <h1>Counter App</h1>
    <h2>Counter value : {count}</h2>
    <button onClick={addValue}>AddValue</button>
    <br></br>
    <button onClick={decValue}>RemoveVAlue</button>
     
      

    </>
  )
}

export default App
