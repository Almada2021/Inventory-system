import React, { useState, useEffect } from 'react'
import {GeneralPage} from "../../components/GeneralPage/GeneralPage"
import axios from "axios"
import Product from '../../components/Product/Product'
import  Pagination  from '../../components/Pagination/Pagination'
function Products() {
  const [ products, setProducts ] = useState()
  const fetchProducts =async () => {
    try {
      const fetche = await axios.get(`http://localhost:8000/getproducts/3`)
      console.log(fetche.data)
      if (!products || JSON.stringify(products) !== JSON.stringify(fetche.data) && fetche.data.length !== 0){
        setProducts([...fetche.data])
      }else{
        if(products === undefined){
          setProducts([])
        }
      }
    } catch (error) { 
      return error.message
    }
    
  }
  useEffect(() => {
    fetchProducts() 
  },[products])
  return (
    <GeneralPage>
  
      {
        products !== undefined && products.length >= 1
        ? 
          <>
            <div style={{display: "flex", flexWrap:"wrap", width: "100vw", justifyContent:"center"}}>
                {
                  products.map(product => (
                  <Product key={product.id} product={product} fetchProducts={fetchProducts}/>
                  ))
                }
            </div>
            <Pagination length={Math.ceil(products.length / 9)}/> 
          </>
        : <div>you don't have Products or connection database failed</div>
      }
    </GeneralPage>
  )
}

export default Products