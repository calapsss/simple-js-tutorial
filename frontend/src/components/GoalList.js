import React from  'react';
import App from '../App';

function GoalList(props){
    
    return(
        <ul className="goal-list">
            {
                props.goals.map((goal)=>{
                    return <li key = {goal.id}>{goal.text}</li>
                })
            }
      </ul>
    );
}

export default GoalList;