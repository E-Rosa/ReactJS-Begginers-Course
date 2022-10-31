import {useState, useEffect} from 'react';

function Props2Challenge1(props){
    const [counter, setCounter] = useState(0);
    const [tracker, setTracker] = useState(-1)

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
        setCounter(0);
    }
    useEffect(()=>{
        setTracker((prev)=>{return prev+1});
        if(tracker >= 0){
            console.log("counter was altered: ", tracker, " times.")
        }
    }, [counter]);

    return(
        <div className="counter-container">
            <span className="counter-title">{props.title}</span>
            <p className="counter-relevance">Relevance: {props.relevance}</p>
            <button className="counter-button" onClick={subCounter}>-</button>
            <span className="counter-number">{counter}</span>
            <button className="counter-button" onClick={addCounter}>+</button>
            <button className="counter-button" onClick={resetCounter}>r</button>
        </div>
    )
}

export default Props2Challenge1;