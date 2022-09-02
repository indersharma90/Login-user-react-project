import React, { useEffect, useState } from 'react'

function Listing() {

    let person = [
        1,2,3,4,5,6
    ]
    

    const [people, setPeople] = useState([])
    console.log(useEffect)
    

    return (
        <div>
            
           <ul> {
people.map(per =>{

    return (
        
            <li>{per}</li>


        

    )
})

            }
            </ul>

<button onClick={() => setPeople(person)}>set people</button>
        </div>
    )
}

export default Listing
