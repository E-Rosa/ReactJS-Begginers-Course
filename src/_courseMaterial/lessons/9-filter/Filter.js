import {useState} from 'react';
import counterData from "../../../data/counterData.js"


/*filter() is the last array method we're going to look at in this course.
  It returns an array of elements that pass a test provided by us. */

function Filter(props){

    const [counters, setCounters] = useState(counterData);
    console.log(counters);

    /*In this function, we will return an array only with the elements that pass the test we provide.
      In this case, the function returns only counter that have a relevance of 9 or less. */
    function filterMostRelevant(){
        setCounters((prevCounters)=>{
            return prevCounters.filter((counter)=>{
                return counter.relevance < 10;
            })
        })
    }

    return(
        <div className="counters-container"> 
           <button onClick={filterMostRelevant}>Filter Most Relevant</button>
        </div>
    )
}


export default Filter;