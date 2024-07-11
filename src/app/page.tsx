'use client'
import { useState } from "react";

export default function HomePage() {
    const [myinputvalue, setMyinputvalue] = useState("초기값이다 ㅋ");
    return (
      <>
      <div>
        <p>{myinputvalue}</p>
      </div>
      <input name="myiputida" type="text" value={myinputvalue} onChange={(event)=>{
        setMyinputvalue(event.target.value);
      }}/>
      </>
    );
  }