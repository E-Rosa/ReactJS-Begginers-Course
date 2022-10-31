import Props from "./props";
import counterData from "../../../data/counterData.js"
/*
Now we're going to instantiate our Props() custom component.
For that, we'll need to get the component itself. See Import on line 1.
Also, we'll need the data to pass it as props. See import on line 2.
*/

function Props2(props){

    return(
        <div className="counters-container">
            {/*
                See how we passed the title attribute.
                We set it equal to the counterTitle
                property of the first element
                in the counterData array.
            */}
           <Props title={counterData[0].counterTitle} />
        </div>
    )
}


export default Props2;

/*
Challenge: Now that we learned about props and how they can be used, we're
going to create some props ourselves. The challenge is to use a new property
in each object of the counterData array. This new property is called 'relevance'
and will receive an arbitrary number from 0 to 10. Then, in our Props element, 
receive this props as props.relevance in a new <span> tag. Then, in this file,
give our Props instance the 'relevance' property and set it equal to the
'relevance' property value in counterData at position zero.
*/