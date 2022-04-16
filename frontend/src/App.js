import logo from './logo.svg';
import './App.css';


import GoalList from './components/GoalList';

function App() {
  const goals = [
    {id: 'cg1', text: 'Finish Course'},
    {id: 'cg2', text: 'Learn main tools'},
];



  return (
    <div className = "goals">
      <h2>Course Goals </h2>
        <GoalList goals={goals}/>
    </div>
  );
}

export default App;
