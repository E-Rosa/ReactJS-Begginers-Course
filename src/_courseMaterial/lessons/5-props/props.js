import {useState, useEffect} from 'react';

/*
Props are simply a way for us to pass data to our component from somewhere else.
Imagine you're making a component that represents a product. You're going to have
to create 1000 products. You won't create a custom component for each individual
product. You can use props. You'll need an array of objects that represent your
products and their information. This is usually taken from a database. For this
project, we're going to use the files under the data directory as our 'database'
*/

//In order to use props, we need to pass it as a parameter in our function.
function Props(props){
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
            {
                /*
                To make an example of how we use props, we're going to create some fake data
                from our data directory files.
                This data consists of an array of objects containing the counter's title.
                as in [{counterTitle: "string"}...];
                Since we are on the element that will RECEIVE the props, we'll create a new span
                element and give it the value of {props.title}.
                title is an arbitrary name, it could have been anything.

                In order to use our custom element now, whenever we instantiate it, we have to pass
                it a property called 'title' and give it a value. Look at props2.js.
                */
            }
            <span className="counter-title">{props.title}</span>
            <button className="counter-button" onClick={subCounter}>-</button>
            <span className="counter-number">{counter}</span>
            <button className="counter-button" onClick={addCounter}>+</button>
            <button className="counter-button" onClick={resetCounter}>r</button>
        </div>
    )
}

export default Props;