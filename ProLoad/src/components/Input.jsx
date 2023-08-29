import  { useState } from 'react'

const InputField = ({action,setdata}) => {
    const [Text,setText] = useState("")
    
    const HandleSubmit = (e) => {
        e.preventDefault();
        setdata( {header : Text , content : ""})
        setText("");
    }
    return (
        <form  className='flex mx-2'>
            <input type="text" className='h-6 border-2 border-black ' value={Text} onChange={(e)=>{setText(e.target.value)}}/>  
            <button onClick={HandleSubmit}>+</button>
        </form>
  )
}

export default InputField