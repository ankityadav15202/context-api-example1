import React,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

    const {user}  = useContext(UserContext)
    if(!user) return <div>Pleasel login</div>
  return (
    <div>
        <h1>Welcome {user.userName}</h1>
    </div>
  )
}

export default Profile