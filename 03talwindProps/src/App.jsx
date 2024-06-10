import { useState } from 'react'
import Card from './components/Card'
import './App.css'
var btn="openn"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card username="Macbook" btnText={btn}/>
    <Card  username="iphone"/>

     
    
    </>
  )
}

export default App
