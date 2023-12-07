import React, { useRef , useState } from 'react'
import { useForm } from 'react-hook-form'
const Day = (props) => {
  const [exerciseInputs, setExerciseInputs] = useState([]);
  
  //adding exercice Layut and registring Data in parent element which is Day(exerciseInputs[])  
  //problem : I can't catch Data submitted unless it's in the onSubmit function
  //problem: I can't show the data submitted in the label unless it's in the onSubmit function

  const AddExercice = ({setExerciseInputs,exerciseInputs}) => {
         const {register,handleSubmit}=useForm()
            const [showEx, setShowEx] = useState(null)
         console.log(showEx)
         let arr = [...exerciseInputs]
         function onSubmit(data){
            arr.push(data);
            setExerciseInputs(arr);
            console.log(data)
            set(data)
            
          }
          const ShowExercice = ({exercice}) => {
            return(
                <div>
                    <label >Exercice:{exercice.Name}</label>
                    <label> Sets:{exercice.Sets}</label>
                    <label >Reps:{exercice.Reps}</label>
                </div>
                )
          }
         return (
            <div>
            { showEx ?  <ShowExercice exercice={showEx} />
             :   
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Exercice Name:
                    <input type="text" {...register("Name" , {required: true})} />
                </label>
                <label>
                    Exercice Sets:
                    <input type="number" {...register("Reps" , {required: true})} />
                </label>
                <label>
                    Exercice Reps:
                    <input type="number" {...register("Sets" , {required: true})} />
                </label>
                <input type="submit" value="add" />
                </form>
            </div>}
            </div>
         )
    }
    return (
    <div>
        <h1>Day{props.index}</h1>
        <AddExercice setExerciseInputs={setExerciseInputs} exerciseInputs={exerciseInputs} />
    </div>
    )
    }
export default Day