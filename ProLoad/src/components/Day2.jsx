// Date: 07/27/21
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const Day = ({index}) => {
    
    const [exercices , setExercices] = useState([])// for exporting the exercices
    const [showExercices,setShowExercices] = useState([])// for showing the exercices
    const {register,handleSubmit}=useForm()
    const [dayName,setDayName] = useState("")
    const submitDayName = (data)=>{
        setDayName(data.dayName)
        
    }
    
    const ExerciceForm = ({index,addExercice,oldExercice})=>{
        const [exercice,setExercice] = useState({})
        const [condition , setCondition] = useState(true)
        const {register,handleSubmit}=useForm()
        const editex = ()=>{
            setCondition(true)
        }
        const deleteex = ()=>{
            console.log("delete")
        }
        return(
            <>
            { condition ? 
            <form onSubmit={handleSubmit((data)=>{setExercice(data);setCondition(false);addExercice([...oldExercice,data])})}>
                <label>Exercice Name</label>
                <input type="text" {...register("Name" , {required: true})} />
                <label>Exercice Sets</label>
                <input type="text" {...register("sets" , {required: true})} />
                <label>Exercice Reps</label>
                <input type="text" {...register("reps" , {required: true})} />
                <input type="submit" value="add" />
            </form> : 
            <div>
                <label>{exercice.Name} </label>
                <label>Sets:{exercice.sets} </label>
                <label>Reps:{exercice.reps} </label>
                <button onClick={()=>{editex()}}>Edit</button>
                <button onClick={()=>{deleteex()}}>Delete</button>
            </div>

        }
        </>
            )
    }
    const handleAddExercice = ()=>{

        setShowExercices([...showExercices , <ExerciceForm key={showExercices.length} index = {showExercices.length} addExercice={setExercices} oldExercice = {exercices} />])

    }
    const renderExercices = () =>{
        let arr = [...showExercices]    
        arr.map((exercice)=>{
            return exercice
        })
        return arr        
    }
  return (
    <section>

    <h1>
    Day{index}:{dayName=="" ? <form onSubmit={handleSubmit(submitDayName)}><label ><input {...register("dayName")} type="text" placeholder="Label" /></label><input type='submit'  value="add" /></form>
        : dayName}
        </h1>
    {renderExercices()}
    <button onClick={handleAddExercice}>+</button>
    </section>
  )
}

export default Day