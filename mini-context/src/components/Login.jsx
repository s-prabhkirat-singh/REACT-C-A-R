import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,serUsername]=useState('')
    const [password,setPassword]=useState('')
    const {setUser}=useContext(UserContext);
    
const handleSubmit=(e)=>{
  e.preventDefault();
  setUser ({username,password})

}

  return (
    <div>Login
    <input type='text'
    value={username}
    onChange={(e)=>{serUsername(e.target.value)}} placeholder='username'/>
    <input type='text'
    value={password}
    onChange={(e)=>{setPassword(e.target.value)}} placeholder='password'/>
    <button onClick={handleSubmit}>Submit</button>
    </div>                         
  )
}

export default Login