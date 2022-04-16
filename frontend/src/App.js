import logo from './logo.svg';
import React, {useState} from 'react';

import './App.css';


import GoalList from './components/GoalList';
import NewGoal from './components/NewGoal';

function App() {
  //reevaluates the components
  const [goals, setGoals] = useState(
    [
      {id: 'cg1', text: 'Finish Course'},
    {id: 'cg2', text: 'Learn main tools'},
    ]
  );
 



  const addNewGoalHandler = (newGoal) => {
    setGoals((prevGoals)=>{return prevGoals.concat(newGoal);})
    console.log(goals)

  }


  return (
    <div className = "goals">
      <h2>Course Goals </h2>
        <NewGoal  onAddGoal={addNewGoalHandler} />
        <GoalList goals={goals}/>
    </div>
  );
}

export default App;
