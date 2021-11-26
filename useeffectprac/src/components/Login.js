import React from 'react'

const Login = (props) => {
    return (
        <div>
            <nav>
                <h1>Main Page</h1>
                <a href="#">Home</a>
                <a href="#">Users</a>
                <a href="#">Admin</a>
            </nav>
            <div>
                <h1>you are logged in</h1>
                <button onClick={props.onLogout}>LogOut</button>
            </div>
        </div>
    )
}

export default Login
