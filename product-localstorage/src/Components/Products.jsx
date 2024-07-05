import React, { useEffect, useState } from 'react'
import {v4} from 'uuid'
import Productrender from './Productrender'

let obj={
  id:v4(),
  title:"",
  des:"",
  price:"",
  img:""
}



function Products() {
  
    const [state,setState]=useState(obj)
    const [arr,setArr]=useState(JSON.parse(localStorage.getItem("data"))||[])
    const [edit,setEdit]=useState(null)
    const handleChange=(e)=>{
      let {name,value} = e.target
      setState({...state,[name]:value})
    }
    console.log(state);

    const handleSubmit=(e)=>{
      e.preventDefault();
      if (edit === null) {
        setArr([...arr, state]);
      } else {
        const uArr = arr.map((el) => {
          if (edit === el.id) {
            return ({...state})
          } else {
            return el;
          }
        });
        setArr(uArr);
       
      }
      setEdit(null);

      setState({
        id:v4(),
        title:"",
        des:"",
        price:"",
        img:""
      })
    }
    console.log(arr);
   
    useEffect(()=>{
      localStorage.setItem("data",JSON.stringify(arr))
    },[arr])
   
    const handleDelete=(id)=>{
     let n=arr.filter((el)=>{
      if(el.id != id){
        return el
      }
     })
      setArr(n)
    }

    const handleEdit=(id)=>{
      arr.forEach(item => {
        if (item.id === id) {
          setState(item);
          setEdit(id);
        }
      });
      
    }


  return (
    <div id='main'> 
        
        <form action="" onSubmit={handleSubmit}>
        <h2>Add Products</h2>
            <input type="text" onChange={handleChange} name="title" value={state.title}  autoFocus placeholder="Title" /><br />
            <input type="text" onChange={handleChange} value={state.des} name='des' placeholder='Description'  id="" /><br />
            <input type="text" onChange={handleChange} value={state.price} name='price' placeholder='Price' id="" /><br />
            <input type="text" onChange={handleChange} value={state.img} name='img' placeholder='Img Url' id="" /><br /> 
            <input type="submit" id='btn' value={edit?"Update":"Submit"}/>
        </form>
        <div id='box'>
        <Productrender arr={arr} handleDelete={handleDelete} handleEdit={handleEdit}/>
            </div>
    </div>
  )
}

export default Products
