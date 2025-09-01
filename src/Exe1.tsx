import { useEffect } from "react"

export default function App() {

  useEffect(()=>{
    console.log("Mounted")
  },[])
  
  return (
    <div>
      hello operator
    </div>
  )
}
