//What is JSX?
//JSX is a way to write elements to the DOM that mixes HTML syntax with JavaScript functionality.

//To write JSX, traditionally, we have to be inside of a return clause in a function
function JSXexample(){
    //Since we're writing a function, outside the return state, we can 
    //declare variables, other functions, state, and do all kinds of javascript statements.
    //Yet, don't forget: Since this function will represent our element, whenever our element
    //is rendered, the code will re-execute, re-render.
    let counter = 0;
    
    return(
        <div className="counter-container">

            {/**See how we are using className instead of class */}
            <button className="counter-button">-</button>

            {/**See how we are using a JS variable inside our JSX using the curly braces */}
            <span className="counter-number">{counter}</span>

            <button className="counter-button">+</button>
        </div>
    )
}
