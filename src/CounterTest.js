import React, { useState, useEffect, memo } from 'react'

const CounterTest = memo(()=> {
let valve= 2

    const [count, setCount] = useState(valve)
    const [counter2, setCounter2] = useState(1)

// useEffect(() => {
//     console.log("counter===")
   
// }, [] )

useEffect(()=>{

    console.log("this is the update counter useffect")
})

function setCounter(){

    setCount(count+1)
    console.log("count", count)
    
}

function setCounterTwo(){
    setCounter2(counter2 + 1)
    console.log("counterTwo====")
}
console.log("hello counter")

const getPromise = new Promise((resolve)=>{
    return resolve("Hello my name is Inderjeet")
})

const  resolvePromise = async () => {
    const result = await getPromise

    console.log(result)


}                                                           

resolvePromise()


    return (
        <div>
            <h4>count Value: {count} {counter2}</h4>
            <button onClick = {setCounterTwo}>update second counter</button>
            <button onClick = {setCounter}>update Counter</button>
        </div>
    )
})

export default CounterTest
