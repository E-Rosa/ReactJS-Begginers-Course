import counterData from "../../../data/counterData.js"
import Props2Challenge1 from "../5-props/props2Challenge1.js";

const counters = counterData.map((counter)=>{
    if(counter.relevance >= 5){
        return (
            <Props2Challenge1
                title={counter.counterTitle}
                relevance={counter.relevance}
                key={counter.id}
            />
        )
    }
})

function MapChallenge(props){
    return(
        <div className="counters-container">
           {counters}
        </div>
    )
}


export default MapChallenge;