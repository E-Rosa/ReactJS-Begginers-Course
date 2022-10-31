import {useState} from 'react';

function SpreadOperatorChallenge(props){
    const [obj, setObj] = useState({a:1, b:2, c:3, d:4, e:5});
    console.log(obj);

    function changeA(){
        if(obj.a === 10){
            setObj((prevObj)=>{
                return ({...prevObj, a:1})
            })
        }else{
            setObj((prevObj)=>{
                return ({...prevObj, a:10})
            })
        }
        
    }

    return(
        <div className="counters-container">
           <button onClick={changeA}>Change A to 10</button>
        </div>
    )
}


export default SpreadOperatorChallenge;
