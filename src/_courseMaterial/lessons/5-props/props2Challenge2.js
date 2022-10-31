import Props2Challenge1 from "./props2Challenge1";
import counterData from "../../../data/counterData.js"

function Props2Challenge(props){

    return(
        <div className="counters-container">
           <Props2Challenge1 
                title={counterData[0].counterTitle} 
                relevance={counterData[0].relevance}
           />
        </div>
    )
}


export default Props2Challenge;