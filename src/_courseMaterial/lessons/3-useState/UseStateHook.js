import {useState} from 'react';
//the useState hook enables us to dynamically change our component. 
//if you try to change anything about the component without using a state,
//your component will break, because of Immutability. 
function UseStateHook(){
    //to declare a state, we need to first import the useState function from React. See line 1.
    //now, we have to assign its value to a variable. The useState function will return
    //two values. A value and a set function. Whenever we need to change the state's value, we use
    //the set function.
    const [counter, setCounter] = useState(0);

    //this function is bound to the click event in our add button.
    function addCounter(){
        //to add one to our counter, we'll pass a callback function
        //as the argument of our setCounter function.
        //we do that because we need to check what the value of the counter was
        //to determine what it will be.
        setCounter((prevCounter)=>{
            return prevCounter+1
        })
    }
    return(
        <div className="counter-container">
            <button className="counter-button">-</button>

            {/*Note how we use the counter variable dynamically in our JSX */}
            <span className="counter-number">{counter}</span>

            <button className="counter-button" onClick={addCounter}>+</button>
        </div>
    )
}

export default UseStateHook;

/*
Challenge: The useState challenge will be an easy one as well.
Create the functionality of the subtract button. Make it so that
whenever you click it, the counter goes down. 
You'll get one extra star if you make a RESET button, which when clicked
makes the counter go back to 0.
*/