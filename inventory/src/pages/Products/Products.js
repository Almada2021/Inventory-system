import React, { useState, useEffect } from 'react'
import {GeneralPage} from "../../components/GeneralPage/GeneralPage"
import axios from "axios"
import Product from '../../components/Product/Product'
import  Pagination  from '../../components/Pagination/Pagination'
function Products() {
  const [ products, setProducts ] = useState()
  const fetchProducts =async () => {
    try {
      const fetche = await axios.get(`http://localhost:8000/getproducts/2`)
      if (!products){
        setProducts([...fetche.data])
      }else{
        throw new Error("nothing")
      }
    } catch (error) { 
      return error.message
    }
    
  }
  useEffect(() => {
    fetchProducts() 
    console.log(products)
  },[products])
  return (
    <GeneralPage>
  
      {products 
        ? 
          <>
            <div style={{display: "flex", flexWrap:"wrap", width: "87vw",}}>
                {
                  products.map(product => (
                  <Product product={product}/>
                  ))
                }
            </div>
            <Pagination length={Math.ceil(products.length / 9)}/> 
          </>
        : null
      }
    </GeneralPage>
  )
}

export default Products