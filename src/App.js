import React, {useState} from 'react';
import GoalList from './components/GoalList/GoalList.js';
import NewGoal from './components/NewGoal/NewGoal.js';
import './App.css';

const courseGoals = [{id:'1', text:'Finish the Course'},
{id:'2', text:'Learn all about Course Main Topic'},
{id:'3', text:'Help other studends in the Course Q&A'}];



const App=() =>{
  const[courseGoals, setCourseGoals] = useState([{id:'1', text:'Finish the Course'},
  {id:'2', text:'Learn all about Course Main Topic'},
  {id:'3', text:'Help other studends in the Course Q&A'}]);

  const addNewGoalhandler =(newGoal) =>{
    setCourseGoals(prevCourseGoals=>prevCourseGoals.concat(newGoal));
  };
  return  <div className='course-goal'> 
  <h2>Course Goals</h2>
  <NewGoal onAddGoal ={addNewGoalhandler}/>
   <GoalList goals={courseGoals}/>
</div>
};
export default App;
