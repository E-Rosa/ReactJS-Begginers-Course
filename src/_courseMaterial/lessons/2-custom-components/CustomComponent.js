//Custom Components are a way for you to re-use your element without
//having to write all of its structure again.

//We create a custom component by writing a function that returns JSX.
//this custom element is the same as our JSX example, but with another name
function CustomComponent(){
    //custom elements must return a single element, not less, no more.
    return(
        <div className="counter-container">
            <button className="counter-button">-</button>
            <span className="counter-number">0</span>
            <button className="counter-button">+</button>
        </div>
    )
}

//Then, in order to use this CustomComponent, we need to export it, and then import it where we
//want to use it. Go to App.js to see the import of this component
export default CustomComponent;

//Challenge***********************************************************************************************************************************************
/*
This is out first challenge of the course, thus, it will be simple.
The task is to create a custom component that has 2  JSX tags inside.
One will be an <h1> with the message "Hello World!". The second
should be a <span> element with the value "my name is X", X being your name.
You must also render this component in our App.js file.
Extra points if you write some CSS to make it look good.
*/
