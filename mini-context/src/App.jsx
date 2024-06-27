
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {
  

  return (
    <>
    <div>this is test </div>
    <UserContextProvider>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider></>
  )
}

export default App
