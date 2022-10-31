import {useState, useEffect} from 'react';

//the useEffect hook is used for two things:
//1. changing data on your page whenever some other state changes.
    //1.1 For example, we could, whenever our counter changes,
    //change other things in the page, or fetch an api, or any other
    //so called SIDE EFFECT.
//2. executing side effects. Things like API calls.

function UseEffectHook(){
    const [counter, setCounter] = useState(0);

    //to be able to use useEffect, you need to import it. See line 1.
    //useEffect receives one or two parameters. The first is the callback function
    //to be executed, and the second is an array of dependencies. useEffect will execute
    //depending on the second parameter. We have three scenarios:
        //1. No second argument. In this case, useEffect will execute in the first render
        //and in all other re-renders;
        //2. Empty array as second argument. In this case, useEffect will execute in the first 
        //render only.
        //3. Array with one or more values as second argument. In this case, useEffect
        //will execute in the first render and whenever any of the values in the array changes.

    //Example 1:-------------------------------------------------
    /* useEffect(()=>{
        setCounter(10);
    }) */

    //Example 2:-------------------------------------------------
    /* useEffect(()=>{
        setCounter(10);
    }, []) */

    //Example 3:-------------------------------------------------
    /* useEffect(()=>{
        setCounter(10);
    }, [counter]) */

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

/*
Challenge: Now that you know how useEffect works, let's put it into practice.
Write a useEffect statement that logs out to the console how many times the
counter state was altered. Note that it has to start in zero, and whenever any change
is made to the counter, log to the console how many times any change to counter was made.
*/


export default UseEffectHook;