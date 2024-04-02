import { useState } from "react";

function handleClick(){
        const[count,setCount]=useState(0);
        setCount(count+1);
    } return(
        <button onClick={handleClick}>Clicked{count}</button>
        
    )
