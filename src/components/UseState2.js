import {useState} from 'react';

export default function MyAppy(){

    return(
        <div>
            <h1>Counters that render different states</h1>
           <Button1/>
           <Button1/>
        </div>
    );
}

function Button1(){
    const [count,setCount]=useState(0);

    function handleClick(){
        setCount(count+1);
    }
    return(
        <button onClick={handleClick}>Clicked {count} times</button>
    );
}