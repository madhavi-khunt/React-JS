import { useState } from "react"




function Product() {
    
    const [arr,setArr]=useState([])
    const [name,setName]=useState("")
    const [size,setSize]=useState("")
    const [price,setPrice]=useState("")
    const [brand,setBrand]=useState("")
    const [img,setImg]=useState("")
    const [showData, setShowData] = useState(false);

    // console.log(name)
    const handleClick=()=>{
        let obj={
            name:name,
            size:size,
            price:price,
            brand:brand,
            img:img
        }

        setArr([...arr,obj])
        setName("")
        setSize("")
        setPrice("")
        setBrand("")
        setName("")
        setImg("")
        
    }
    const handleShow = () => {
      setShowData(!showData);
  };
    

    return(
      <div id="main">
        <div className="form">
        <div className="title">Cloth Product Details</div>
        <div className="input-container ic1" > 
          <input id="pname" className="input" value={name}  onChange={(el)=>setName(el.target.value)} type="text" placeholder="Product Name" />
        </div>
        <div className="input-container ic2">
          <input id="psize" className="input" value={size}  onChange={(el)=>setSize(el.target.value)} type="text" placeholder="Product Size" />
        </div>
        <div className="input-container ic2">
          <input id="pprice" className="input" value={price} onChange={(el)=>setPrice(el.target.value)} type="text" placeholder="Product Price" />
        </div>
        <div className="input-container ic2">
          <input id="pbrand" className="input" value={brand} onChange={(el)=>setBrand(el.target.value)}  type="text" placeholder="Product Brand" />
        </div>
        <div className="input-container ic2">
        <input className="input" value={img} placeholder="Image URL" onChange={(el) => setImg(el.target.value)}
          type="text"    />
        </div>
        <button type="text" onClick={handleClick} className="submit">submit</button>
        <button type="text" onClick={handleShow} className="submit">Show</button>
       
      </div>
      {showData &&
                arr.map((el,index) => (
                    <div >
                      <table>
                        <tr>
                          <th>Product No</th>
                          <th>Product Name</th>
                          <th>Product Price</th>
                          <th>Product Size</th>
                          <th>Product Brand</th>
                          <th>Product Image</th>
                        </tr>
                        <tr>
                          <td>
                            <p>{index+1}</p>
                          </td>
                          <td><h4>{el.name}</h4></td>
                          <td><p>{el.size}</p></td>
                          <td><p>{el.price}</p></td>
                          <td><p>{el.brand}</p></td>
                          <td><img src={el.img} alt={el.name} style={{width: '100px', height: '100px'}}  /></td>
                        </tr>
                      </table>
                        
                        
                        
                        
                        
                    </div>
                    
                ))
            }
      </div>
      
    )
}

export default Product