import React from 'react';
import './NewGoal.css';
const NewGoal = ()=>{
    const addGoalhandler =event=>{
        event.preventDefault();        
    };
    return <form className='new-goal' onSubmit={addGoalhandler}>
        <input  type="text"/>
        <button type="submit">Add Goal</button>
    </form>
}
export default NewGoal;