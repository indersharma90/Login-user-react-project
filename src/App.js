// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import {appApi} from './API/Apicall'
import SelectDelete from './SelectDelete';
import Newlogin from './Newlogin';
import Logout from './Logout';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'

import CounterTest from './CounterTest';

// import Listing from './Listing';


function App() {
// let Navigate = useNavigate();


  const input_Values = {username:"", email:"", password:""}
  const [formValues, setFormValues]= useState(input_Values)
  const [formError, setFormError] = useState({})
  const [isLoading, setIsloading] = useState(false)
  const [userData, setUserData] = useState([])



  const handleValues = (e)=>{
const {name, value} = e.target

setFormValues({...formValues, [name]:value})
  }

 const userLogin =(e)=>{
e.preventDefault()
setFormError(formValidations(formValues))
setIsloading(true)
getUserData()
setFormValues({username:"", email:"", password:""})
}



 const formValidations = (values)=>{
   const errors = {
}

   const regex_password = 
   /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#@$%&? "])[a-zA-Z0-9!#@$%&?]{8,20}$/

   if(!values.username){
     errors.username = "username is required"
   }
   if(!values.email){
     errors.email = "email is required"
   }
   if(!values.password){
    errors.password = "password is required"
  }
   else if(!regex_password.test(values.password)){
    errors.password = 'password must be a minimum of 8 characters including number, Upper, Lower And one special character'
  }
  else {
    return false
  }

  return errors
 
 }

 const getUserData =async()=>{
try{

  const response = await appApi.get('/users')
setUserData(response.data)
console.log(response.data)
setIsloading(false)
}
catch (error){
  console.error(error)
}
 }
useEffect(()=>{
getUserData()

},[])

const getinputObject = (nam, check)=>{
console.log(typeof nam, check)
if(nam === "selectall"){

  const tempUser = userData.map(user =>{
    return ({...user, ischecked:check} )
  }) 
  setUserData(tempUser)

}
else{

  const tempUser = userData.map(user =>{
    return ( user.id === parseInt(nam) ? {...user, ischecked:check} : user)
  }) 
  console.log(tempUser)
  setUserData(tempUser)
}

}


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={
<Newlogin/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
      </BrowserRouter>
      {/* <form onSubmit={userLogin}>

      <label>name:</label>
      <input type="text" value={formValues.username} name="username" onChange={handleValues}/>
      <p>{formError.username}</p>
      <label>Email:</label>
      <input type="email" value={formValues.email} name="email" onChange={handleValues}/>
      <p>{formError.email}</p>
      <label>password:</label>
      <input type="password" value={formValues.password} name="password" onChange={handleValues} />
      <p>{formError.password}</p>
      <button type='submit'>Login</button>
      </form>

      <hr/>
{
  (isLoading && !formError) ? (<p className='spinning-div'><b>Loading.....</b></p>)
  
  : <ul>
{
  (!formError) ? (userData.map((user)=>{
    return <li key={user.id}>{user.name} ====={user.username}</li>
  })) : null
  
  
  }
        </ul>
}

<div style={{textAlign:"left", paddingLeft:"3rem"}}>


<SelectDelete totalUserData={userData} inputFun={getinputObject}/>

</div> */}


    </div>
  );

}

export default App;
