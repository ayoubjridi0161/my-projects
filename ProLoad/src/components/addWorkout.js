import './button.css'
import  {useState} from 'react'
import InputField from './Input'
const AddButton = ({clickhandler})=>{
    return (
        <button  className="cssbuttons-io-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
        </button>
    )
}

const AddWorkout = () => {
  const [workoutList, setWorkoutList] = useState({ header: '', content: [] });
  const [isWorkout, setIsWorkout] = useState(false);
  const handleData = (inputData)=>{
    setWorkoutList(inputData);
  }
  return (
    <>
      <div className="flex pl-4 pb-3">
        <p>Workout name </p>
        {!workoutList.header ? (
          <InputField action="add" setdata={handleData}/>
        ) : (
          <p className='px-4'>  {workoutList.header}</p>
        )}
      </div>
      <section className="pl-12">
        <div className="flex">
          <h1>(DAY1) </h1>
          <input type="text" id="name" className="border-2 border-black rounded-lg px-2 mx-3 " />
        </div>
        <div>
          <AddButton />
        </div>
      </section>
    </>
  );
};

export default AddWorkout