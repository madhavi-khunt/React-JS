import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function Product() {

  const [state,setState]=useState([])
  const [sortdata,setSortdata]=useState("")

  const [searchdata, setSearchdata]=useState("")

  const [filterdata,setFilter]=useState({
    menbag:false,
    jewelry:false,
    womenbag:false,
    menshoes:false,
    watch:false,
    perfume:false
  })

  useEffect(()=>{
    fetch(`http://localhost:3000/products`)
    .then((res)=>res.json())
    .then((res)=>setState(res))
    .catch((err)=>console.log(err))
  },[])


  const handleFilter=(e)=>{
    setFilter({
      ...filterdata,
      [e.target.name] : e.target.checked
    })
  }

  // console.log(filterdata);


  let Filteringdata=state
  if(filterdata.menbag ||  filterdata.menshoes || filterdata.jewelry || filterdata.perfume || filterdata.watch || filterdata.womenbag){
    Filteringdata=Filteringdata.filter((el)=>{
      if(filterdata.menbag && el.category == "men's bag"){
        return true;
      }

      if(filterdata.jewelry && el.category == "Jewelry"){
        return true;
      }
      if(filterdata.menshoes && el.category == "men's shoes"){
        return true;
      }
      if(filterdata.perfume && el.category == "Perfumes"){
        return true;
      }
      if(filterdata.watch && el.category == "watch"){
        return true;
      }
      if(filterdata.womenbag && el.category == "women's bag"){
        return true;
      }
    })
  }


  const handleSort=(e)=>{
    setSortdata(e.target.value)
  }
  // console.log(sortdata);

  if(sortdata){
    Filteringdata= Filteringdata.sort((a,b)=>{
      if(sortdata == "asc"){
       return  a.price - b.price
      }else if(sortdata == "desc"){
       return  b.price - a.price
      }
    })
 }


 const handleSearch=(el)=>{
  setSearchdata(el.target.value)
 }

 if(searchdata){
  Filteringdata = Filteringdata.filter((el)=>{
    return el.title.toLowerCase().includes(searchdata.toLowerCase())
  })
}


const [ratedata, setRatedata] = useState("");
  



const handleratesort = (e) => {
  setRatedata(e.target.value);
};


if (ratedata) {
  Filteringdata = Filteringdata.sort((a, b) => {
    if (ratedata === "hrate") {
      return a.rate - b.rate;
    } else if (ratedata === "lrate") {
      return b.rate - a.rate;
    }
    return 0;
  });
}
  

  return (
    <>
     <section id='product'>
        <div id='pd1'>
        <label style={{fontSize:"13px"}} htmlFor="">Search</label>
        <input type="text" onChange={handleSearch} id='sear' style={{width:"150px"}} /><br /><br /><br /><br />
          <h6 style={{fontSize:"13px"}}><i className="bi bi-sliders" style={{fontSize:"13px"}}></i> Filtering</h6>
          <input type="checkbox" name="menbag" id="" onChange={handleFilter} /> <span>men's bag</span> <br />
          <input type="checkbox" name="jewelry" id="" onChange={handleFilter} /> <span>jewelry</span> <br />
          <input type="checkbox" name="womenbag" id="" onChange={handleFilter} /> <span>women's bag</span> <br />
          <input type="checkbox" name="menshoes" id="" onChange={handleFilter} /> <span>men's shoes</span> <br />
          <input type="checkbox" name="watch" id="" onChange={handleFilter} /> <span>watch</span> <br />
          <input type="checkbox" name="perfume" id="" onChange={handleFilter} /> <span>perfume</span><br /><br /><br /><br />

          <span style={{fontSize:"13px"}}><i style={{fontSize:"13px"}} className="bi bi-sort-numeric-down"></i> Price Sorting</span> <i style={{fontSize:"13px"}} className="bi bi-sort-numeric-up"></i>
          <select  style={{fontSize:"13px"}}  onChange={handleSort}>
            <option style={{fontSize:"13px"}} value="">Price</option>
            <option  style={{fontSize:"13px"}} name="" id="" value="asc"> Low to High</option>
            <option  style={{fontSize:"13px"}} name="" id="" value="desc">High to Low</option>
         </select><br /><br />

         <span style={{fontSize:"13px"}}><i style={{fontSize:"13px"}} className="bi bi-sort-up-alt"></i> Rate Sorting</span> <i style={{fontSize:"13px"}}  className="bi bi-sort-down"></i>
         <select style={{ fontSize: "13px" }} onChange={handleratesort}>
            <option style={{ fontSize: "13px" }} value="">Rate</option>
            <option style={{ fontSize: "13px" }} value="hrate"> Low to High</option>
            <option style={{ fontSize: "13px" }} value="lrate">High to Low</option>
          </select>

        </div>
        <div id='pd2'>
          {
            Filteringdata && Filteringdata.map((e)=>{
              return (
                <Link to={`/product/${e.id}`} style={{textDecoration:"none"}}  key={e.id}>
              <Card id='card'  style={{ width: '18rem',height:"410px" }}>
              <Card.Img id='ci' src={e.image} style={{height:"250px"}} />
              <Card.Body>
                <Card.Title id='ct'>{e.title}</Card.Title>
                <Card.Text>₹  
                  {e.price.toLocaleString('en-IN')}
                </Card.Text>
                <Card.Text>
                  Rate : {e.rate}
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            </Link>
              )
            })
          }
        
        </div>
     </section>
    </>
  )
}

export default Product

