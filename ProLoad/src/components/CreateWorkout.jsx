import React from 'react'

const CreateWorkout = () => {
    const [DaysPerCycle, setDaysPerCycle] = React.useState(1);
    const [workoutName, setWorkoutName] = React.useState('');
    // eslint-disable-next-line no-undef, no-unused-vars
    const [existingWorkouts, setExistingWorkouts] = React.useState({ Name : false , DaysPerCycle : false});
const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(workoutName)
        // eslint-disable-next-line no-undef
        let arr = {...existingWorkouts}
        arr.Name = true
        setExistingWorkouts(arr)}
const handleCycleSubmit = (e) => {
        e.preventDefault()
        console.log(DaysPerCycle)
        // eslint-disable-next-line no-undef
        let arr = {...existingWorkouts}
        arr.DaysPerCycle = true
        setExistingWorkouts(arr)}
const RenderName = () => 
{return (
        <div>
    { existingWorkouts.Name ? <label>workoutName:{workoutName}</label> :
    <form onSubmit={handleFormSubmit}>
      
      <label>
        Workout Name:
        <input
          type="text"
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
        />
        <input type="submit" value="add" />
        </label>
        </form>
    }
    </div>)} 
const RenderDaysPerCycle = () =>
    {return (
        <div>{ existingWorkouts.DaysPerCycle ? <label>DaysPerCycle:{DaysPerCycle}</label> : 
    <form onSubmit={handleCycleSubmit}>
        <label>
        Days per cycle:
        <input type="number" value={DaysPerCycle} onChange={(e) => setDaysPerCycle(e.target.value)}  />
        </label>
        <input type="submit" value="add" />
        </form>
}
    </div>
    )} 
   
return (
    <section>
    <RenderName/>
    <RenderDaysPerCycle/>
    </section>
    )
}

export default CreateWorkout