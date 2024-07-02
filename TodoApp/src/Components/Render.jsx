import React, { useState } from 'react'
import Crud from '../Components/Crud'

function Render() {

    const [state,setState]=useState("");
    const [arr,setArr]=useState([])
    const handleChange=(el)=>{
            setState(el.target.value)        
    }   
    console.log(state);

    const  handleClick=()=>{
        let obj={
            id:Date.now()+"mk",
            task:state,
            isCompleted:false
        }
        
        setArr([...arr,obj])
        // console.log(obj);
        setState("")
    }

    const handleDelete=(id)=>{
       let d=arr.filter((de)=>{
            return de.id !== id
        })
        setArr(d);
        console.log(d);
    }

    const handleEdit=(id)=>{
         let edi=arr.map((ed)=>{
            if(ed.id==id)
                {
                    return {...ed,isCompleted: !ed.isCompleted}
                }
                else{
                    return ed
                }
        })
       
        setArr(edi)
    }

  return (
    <div id='main'>
        <div id='inner'>
            <h2>TODO APP</h2>
            <input type="text" name="task" placeholder='Task' value={state} onChange={handleChange} id="" />
            <button id='button' onClick={handleClick}>Add Task</button>
            {
                arr.map((e)=>{
                    return <Crud key={e.id} m={e} del={handleDelete} edit={handleEdit} />
                })
            }   
        </div>
    </div>
  )
}

export default Render