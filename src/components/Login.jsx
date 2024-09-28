// here we will send or set data into UserContext

import React,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [userName, setuserName] = useState("")
    const [password, setpassword] = useState("")

    const {setuser} = useContext(UserContext) // we used setUser to set the data

    const handlesubmit = (e)=>{
        e.preventDefault()
        setuser({userName, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text"
        value={userName}
        onChange={(e)=> setuserName(e.target.value)}
        placeholder='Username'
        />
        {" "}
        <input type="password"
        value={password}
        onChange={(e)=> setpassword(e.target.value)}
        placeholder='password'
        />
        <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login