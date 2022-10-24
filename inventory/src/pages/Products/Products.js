import React, { useState, useEffect } from 'react'
import {GeneralPage} from "../../components/GeneralPage/GeneralPage"
import axios from "axios"
import Product from '../../components/Product/Product'
import  Pagination  from '../../components/Pagination/Pagination'
import { ListContainer } from '../../components/ListContainer/ListContainer'
import WrongList from '../../components/WrongList/WrongList'
function Products() {
  const [ products, setProducts ] = useState()
  const fetchProducts =async () => {
    try {
      const fetche = await axios.get(`http://localhost:8000/getproducts/3`)
      if (!products || JSON.stringify(products) !== JSON.stringify(fetche.data) && fetche.data.length !== 0){
        setProducts([...fetche.data])
      }else{
        if(products === undefined || products.length === 0){
          setProducts([])
        }
        
      }
    } catch (error) { 
      return error.message
    }
    
  }
  useEffect(() => {
    fetchProducts() 
    console.log("render")
  },[products, fetchProducts])
  return (
    <GeneralPage>
      {
        products !== undefined && products.length >= 1
        ? 
          <>
            <ListContainer length={products.length}>
                {
                  products.map(product => (
                  <Product key={product.id} product={product} fetchProducts={fetchProducts}/>
                  ))
                }
            </ListContainer>
            <Pagination length={Math.ceil(products.length / 9)}/> 
          </>
        : <WrongList></WrongList>
      }
    </GeneralPage>
  )
}

export default Products