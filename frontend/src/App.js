import logo from './logo.svg';
import './App.css';


import GoalList from './components/GoalList';

function App() {
  return (
    <div className = "goals">
      <h2>Course Goals </h2>
        <GoalList />
    </div>
  );
}

export default App;
