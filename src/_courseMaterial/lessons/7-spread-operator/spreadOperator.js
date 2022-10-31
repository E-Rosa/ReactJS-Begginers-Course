import {useState} from 'react';

/*
Put simply, the spread operator is a way to reference all of an
objects properties as they are, or all values of an array. Lets see an example.
*/

//This function will log all elements of the array parameter.
function valuesOf(array){
    console.log(...array);
}
let a = [1,2,3];
valuesOf(a);

/*
In React, we'll use the spread operator with objects, mostly.
Take a look at the changeA() function.
*/

function SpreadOperator(props){
    const [obj, setObj] = useState({a:1, b:2, c:3, d:4, e:5});
    console.log(obj);

    function changeA(){
        //with the spread operator
        setObj((prevObj)=>{
            return ({...prevObj, a:10})
        })

        //without the spread operator
        /* setObj((prevObj)=>{
            return ({
                a:10,
                b:prevObj.b,
                c:prevObj.c,
                d:prevObj.d,
                e:prevObj.e
            })
        }) */
        
    }

    return(
        <div className="counters-container">
           <button onClick={changeA}>Change A to 10</button>
        </div>
    )
}


export default SpreadOperator;

/*
Challenge: Instead of simply changing A to 10, make the changeA() function
check if the property a of the obj Object is equal to 10. If it is, change it back to 1.
If it is not, change it to 10. Use the spread operator to do so.
*/