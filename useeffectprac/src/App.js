import './App.css';
import React,{useState,useEffect} from 'react'
import Login from './components/Login'
import Main from './components/Main'

function App() {
  const [userLoggedIn,setUserLoggedIn] = useState(false)
  const logInHandler=()=>{
    setUserLoggedIn(true)
  }
  const logOutHandler=()=>{
    setUserLoggedIn(false)
  }

  return (
    <div className="App">
        {!userLoggedIn && <Main onLogin={logInHandler}/>}
        {userLoggedIn && <Login onLogout={logOutHandler}/>}
    </div>
  );
}

export default App;
