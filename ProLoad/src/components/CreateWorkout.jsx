import React from 'react'
import Day2 from './Day2';
const CreateWorkout = () => {
    const [Cycle, setCycle] = React.useState(0);
    const [workoutName, setWorkoutName] = React.useState("");
    // eslint-disable-next-line no-undef, no-unused-vars
    const myName = React.useRef(null)
    const myCycle = React.useRef(null)
    
    const handleNameChange= () => {
            myName.current.focus()
        }
    const handleCycleChange= () => {
            myCycle.current.focus()

    }
    const handleName = () => {
        
        setWorkoutName(myName.current.value)
        // eslint-disable-next-line no-undef
    }
        
        
    const handleCycle = () => {
        setCycle(myCycle.current.value)
    }


    const RenderName = () => 
{return (
        <div>
    { workoutName != ""  ? <label >workoutName:{workoutName}</label> :
    <form onSubmit={handleName}>
    <label>
      Workout Name:
      <input
        type="text"
        ref={myName}
        onChange={handleNameChange}
      />
      <input type="submit" value="add" />
      </label>
      </form>}
    </div>)} 
    const RenderCycle = () =>
    {return (
        <div>{ Cycle!=0 ? <label>DayssPerCycle:{Cycle}</label> : 
    <form onSubmit={handleCycle}>
        <label>
        Days per cycle:
        <input type="number" ref={myCycle} onChange={handleCycleChange}  />
        </label>
        <input type="submit" value="add" />
        </form>
}
    </div>
        )}

   const renderDays = () => {
        if(Cycle === 0){
            return <></>
        }else{
            let arr = []
            for(let i = 0 ; i < Cycle ; i++){
                arr.push(<Day2 key={i} index={i}/>)
            }
            return arr
        
        }
    
}
return (
    <>
    <section>
     <RenderName/> 
     <RenderCycle/>
    {renderDays()}

    </section>
    </>
    )

}
export default CreateWorkout