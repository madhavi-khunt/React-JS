import React, { useEffect, useState } from 'react'

function Todo() {
    const [task,setTask]=useState("")
    const [arr,setArr]=useState(JSON.parse(localStorage.getItem("data"))|| [])
    const handleSubmit=(e)=>{
        e.preventDefault()
        let obj={
            id:Math.random()+Date.now(),
            task:task,
            isCom:false
        }
        setArr([...arr,obj])
        setTask("")
    }

    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(arr))
    },[arr])

    // console.log(task);
    console.log(arr);

    const handleDelete=(id)=>{
        let d=arr.filter((el)=>{
            return el.id !=id
        })
        setArr(d)
    }

    const handleEdit=(id)=>{
        let edi=arr.map((ed)=>{
            if(ed.id==id)
                {
                    return {...ed, isCom:!ed.isCom}
                }
                else{
                    return ed
                }
        })
        setArr(edi)
    }

  return (
    <div id='main'>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Task' value={task} name="task" onChange={(e)=>setTask(e.target.value)} id="" />
            <span><button>Add</button></span><br /><br />
        </form>
        {
        arr.map((el)=>{
            return(
                <div id='box' key={el.id}>
                    <h1>{el.task  } -   {el.isCom? "true":"false"}</h1>
                    <span>
                        <button onClick={()=>handleEdit(el.id)}>Edit</button>
                        <button onClick={()=>handleDelete(el.id)}>Delete</button>
                    </span>
                </div>
            )
        })
    }
    </div>

  )
}

export default Todo
