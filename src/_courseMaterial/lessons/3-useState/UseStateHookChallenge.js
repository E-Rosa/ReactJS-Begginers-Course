import {useState} from 'react';

function UseStateHookChallenge(){
    const [counter, setCounter] = useState(0);
    function addCounter(){
        setCounter((prevCounter)=>{
            return prevCounter+1
        })
    }
    function subCounter(){
        setCounter((prevCounter)=>{
            return prevCounter+1
        })
    }
    function resetCounter(){
        setCounter(0)
    }
    return(
        <div className="counter-container">
            <button className="counter-button" onClick={subCounter}>-</button>
            <span className="counter-number">{counter}</span>
            <button className="counter-button" onClick={addCounter}>+</button>
            <button className="counter-button" onClick={resetCounter}>r</button>
        </div>
    )
}

export default UseStateHookChallenge;