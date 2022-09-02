import React, {useState}from 'react'

const SelectDelete = ({totalUserData, inputFun}) => {


    const selectHandler = (e)=>{

        const {name, checked} = e.target

inputFun(name, checked)


    }
    
   
 
  return (<>

<input type="checkbox" name="selectall" checked={(totalUserData.filter(usall=> usall.ischecked !== true).length<1)} onChange={selectHandler}/> Select all <br />

{

totalUserData.map(user =>

    <div key={user.id}>
        <input type="checkbox" name={user.id} checked={user.ischecked || false} onChange={selectHandler}/> <label>{user.name}</label>
    </div>


)
}                       
    

  </>)
}

export default SelectDelete

