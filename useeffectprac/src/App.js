import './App.css';
import React,{useState,useEffect} from 'react'
import Login from './components/Login'
import Main from './components/Main'

function App() {
  const [userLoggedIn,setUserLoggedIn] = useState(false)
  const logInHandler=()=>{
    localStorage.setItem('isLoggedIn', '1')
    setUserLoggedIn(true)
  }
  const logOutHandler=()=>{
    localStorage.removeItem('isLoggedIn')
    setUserLoggedIn(false)
  }

  useEffect(()=>{
    const storedInfo = localStorage.getItem('isLoggedIn');
    if(storedInfo){
      setUserLoggedIn(true);
    }
  },[])

  return (
    <div className="App">
        {!userLoggedIn && <Main onLogin={logInHandler}/>}
        {userLoggedIn && <Login onLogout={logOutHandler}/>}
    </div>
  );
}

export default App;
