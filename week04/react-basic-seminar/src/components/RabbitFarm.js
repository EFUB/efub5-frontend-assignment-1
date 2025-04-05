import React,{userState} from "react";
import Rabbit from './Rabbit';

function RabbitFarm(){
    const [carrotCount, setCarrotCount]=userState(0);

    return(
        <div> 
            <h1>토끼의 당근 저장소</h1>
            <button onClick={() => setCount(carrotCount+1)}>당근 줘!</button>
            <Rabbit count={carrotCount}/>
        </div>

    )
}
export default RabbitFarm;