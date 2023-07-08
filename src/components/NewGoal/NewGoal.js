import React, {useState} from 'react';
import './NewGoal.css';
const NewGoal = props=>{
    const [course,setCourse] = useState('');
    const addGoalhandler = event => {
        event.preventDefault();
        const  newGoal = {
             id  : Math.random().toString(),
            text : course
        };
        props.onAddGoal(newGoal);
        setCourse('');
    };
    const textHandler= event => {
       setCourse(event.target.value);
    };
    return <form className='new-goal' onSubmit={addGoalhandler}>
        <input  type="text" value = {course} onChange={textHandler}/>
        <button type="submit">Add Goal</button>
    </form>
}
export default NewGoal;