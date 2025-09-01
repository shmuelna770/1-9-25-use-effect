import React, { useEffect, useState } from 'react'

export default function Exe4() {

    const [second,setSecond] = useState(0)
    const [isRun, setIsRun] = useState(false)
    useEffect(()=>{
        if(!isRun)return;

        const intervald = setInterval(()=>{
            setSecond(prev => prev +1);

        },1000)
        return()=>{
            clearInterval(intervald)
            console.log("timer stoped")
        }
    },[isRun])

const heandleStop = ()=>{
    setIsRun(false)
    console.log("result time:",second)
}
  return (
    <div>
      exe4
      <h3>
        timer : {second}
        <button onClick={()=>setIsRun(true)}>start</button>
        <button onClick={heandleStop}>stop</button>
      </h3>
    </div>
  )
}
