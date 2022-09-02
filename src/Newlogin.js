import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
const Newlogin = () => {
    
    let navigate = useNavigate();
const user = {
    username: "",
    password: ""
}
const [userData, setUserData] = useState(user)
const [warningMass, setWarningMass] = useState("")
const [isAuth, SetIsAuth] = useState(false)

const handleUser= async(e)=>{
   
    e.preventDefault();
    if(!userData.username && !userData.password){
        setWarningMass('username and password is required')
    }
    else if(!userData.username){
        setWarningMass('username is required')
    }
    else if(!userData.password){
        setWarningMass('password is required')
    }
     
    else{
        setWarningMass('')
        
    let getResult = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
     
        // Adding body or contents to send
        body: JSON.stringify(userData),
         
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
    }
})
    if(getResult.status === 201){
        SetIsAuth(true)   
    }
    
}
}

const handleInputValues = (e)=>{
    const{name, value} = e.target
    setUserData({...userData, [name]: value})

}

useEffect(()=>{
if(isAuth){
    localStorage.setItem('Token', "123456")
    navigate("/logout", { replace: true })
}

})


  return (
    <div>
        <h2>Newlogin</h2>
        <form onSubmit={handleUser}>
        
        <input type="text" name='username' value={userData.name} onChange={handleInputValues}/> <br/>
        <input type="password" name='password' value={userData.password} onChange={handleInputValues}/><br/>
<h4 style={{color:'red'}}>{warningMass}</h4>
        <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Newlogin