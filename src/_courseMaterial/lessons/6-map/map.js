import counterData from "../../../data/counterData.js"
import Props2Challenge1 from "../5-props/props2Challenge1.js";

/*
In this lesson we'll learn the map method. It is a JS native method.
Among other array methods, we use the .map() very much because it returns
a new array rather than changing the existing array. It is important that it is so,
because in react, you can't change a state, you have to provide a NEW state, entirely.
*/

/* 
Here, the map() function will return an array of <Props2Challenge1 /> elements
filled with the props acquired from the counterData element. */
const counters = counterData.map((counter)=>{
    return (
        <Props2Challenge1
            title={counter.counterTitle}
            relevance={counter.relevance}
            key={counter.id}
        />
    )
})

function Map(props){
    return(
        <div className="counters-container">
            {/*Then, all we have to do is place counters in the DOM. */}
           {counters}
        </div>
    )
}


export default Map;

/*
Challenge: Prepared for some programming logic?
Use the map() function to create a new array of <Props2Challenge1 /> elements
But only include those with relevance of 5 or greater in your list. Then, render
them to the DOM.
*/