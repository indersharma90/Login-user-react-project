import React,{useEffect} from 'react'

const Logout = () => {
    const gettoken = localStorage.getItem('Token')
useEffect(()=>{

    window.onbeforeunload = function (e) {
        window.onunload = function () {
                window.localStorage.isMySessionActive = "false";
                if(window.localStorage.isMySessionActive === 'true'){
                    localStorage.removeItem('Token')
                }
        }
        return undefined;
    };
    
    window.onload = function () {
                window.localStorage.isMySessionActive = "true";
    };
},[])

  return (
    <div>
        <h2>Logout</h2>
<button>Logout</button>
<p>{gettoken}</p>

    </div>

  )
}

export default Logout