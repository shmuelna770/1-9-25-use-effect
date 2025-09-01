import  {useEffect,  useState } from 'react'

export default function Exe2() {
  const [count,setCount] = useState(0)
  useEffect(()=>{
    console.log("count clicked",count)
  },[count])
  
    return (
    <div>
      <h3>cont:{count}</h3>
      <button onClick={()=>setCount(count+1)}>+1</button>
    </div>
  )
}
