import React,{useState} from 'react'

const Main = (props) => {
    const [userName,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const [isValid,setIsValid] = useState(false)

    function nameChangeHandler(e){
        setUserName(e.target.value)
        if(userName!==""){
            setIsValid(true)
        }else{
            setIsValid(false)
        }
    }

    function passwordChangeHandler(e){
        setPassword(e.target.value)
        if(password!==""){
            setIsValid(true)
        }
        else{
            setIsValid(false)
        }
    }

    function submitHandler(e){
        e.preventDefault()
        if(isValid){
            props.onLogin(userName,password)
        }
    }


    return (
        <div>
            <nav>
                <h1>Main Page</h1>
            </nav>
            <main>
                <div className="login-div">
                    <input onChange={nameChangeHandler} value={userName} type="text" className="username input"/>
                    <input onChange={passwordChangeHandler} value={password} type="password" className="password input"/>
                    <button onClick={submitHandler} className="sign-in">Sign In</button>
                </div>
            </main>
        </div>
    )
}

export default Main
