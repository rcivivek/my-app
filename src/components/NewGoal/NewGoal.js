import React from 'react';
import './NewGoal.css';
const NewGoal = props=>{
    const addGoalhandler = event => {
        event.preventDefault();
        const  newGoal = {
             id  : Math.random().toString(),
            text : 'My new Goal'
        };
        props.onAddGoal(newGoal);
    };
    return <form className='new-goal' onSubmit={addGoalhandler}>
        <input  type="text"/>
        <button type="submit">Add Goal</button>
    </form>
}
export default NewGoal;