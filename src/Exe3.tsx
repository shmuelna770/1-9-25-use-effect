import { useEffect, useState } from "react";

export default function Exe3() {
  const [data, setData] = useState([{title:""}]);

  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then((res) => res.json())
      .then((json) => setData(json));
    console.log("printed");
  }, []);

  return (
    <div>
      exe3
      {data.map((todo, index) => (
        <div key={index}>{todo.title}</div>
      ))}
    </div>
  );
}
