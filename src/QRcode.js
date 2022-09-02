import React from 'react'

function QRcode() {
    let QR_array = [[1,"Age","Age","Number","3","",""],[2,"Class","Class","String","4th","",""],[3,"Section","Section","String","B","",""],[4,"RollNo","RollNo","String","123","4",""]]
 
    return (
        <div>
            {
         (QR_array.length!==0)   ? QR_array.map((qscan)=>{
             return(
                 <div key={qscan[1]}>
                 <label>{qscan[2]}</label> <br/>
                 <input /> <br />
                 
                 </div>
             )
         })  :  null

            }
            <button>Preview</button>
        </div>
    )
}

export default QRcode
