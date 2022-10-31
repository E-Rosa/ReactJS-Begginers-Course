import {useState} from 'react';
import counterData from "../../../data/counterData.js"

/*
find() is a JS native array method. It returns the first element that passes
the test we provide through a callback function as an argument. It returns undefined
if no matches are found. 
Put simply, find() finds something in an array for us based on a test we give.
This can be very useful in react, since we are working with arrays of objects
all the time.
*/

function Find(props){

    const [counters, setCounters] = useState(counterData);
    console.log(counters);

    /*This function will try to find an object inside our list with the property relevance equal to 10
      Then, it will change the state of the counters equal to the element found.
    */
    function findMostRelevant(){
        let relevantCounter = counters.find((counter)=>{return counter.relevance === 10});
        if(relevantCounter !== undefined){
            setCounters([relevantCounter]);
        }

    }

    return(
        <div className="counters-container"> 
           <button onClick={findMostRelevant}>Find Most Relevant</button>
        </div>
    )
}


export default Find;
