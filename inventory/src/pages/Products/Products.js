import React, { useState, useEffect } from 'react'
import {GeneralPage} from "../../components/GeneralPage/GeneralPage"
import axios from "axios"
import Product from '../../components/Product/Product'
import  Pagination  from '../../components/Pagination/Pagination'
import { ListContainer } from '../../components/ListContainer/ListContainer'
import WrongList from '../../components/WrongList/WrongList'
import NavProductsSection from '../../components/NavProductsSection/NavProductsSection'
import BigModal from '../../components/BigModal/BigModal'
import CrossButton from '../../components/buttons/CrossButton/CrossButton'
function Products() {
  const [ products, setProducts ] = useState()
  const [ addProductModal, setAddProductModal] = useState(false)
  const closeAddProductModal = () => setAddProductModal(false);
  const fetchProducts =async () => {
    try {
      const fetche = await axios.get(`http://localhost:8000/getproducts/2`)
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
  },[products, fetchProducts])
  return (
    <GeneralPage>
      <NavProductsSection modal={addProductModal} setModal={setAddProductModal}/>
      <BigModal 
        open={addProductModal} 
        onclose={closeAddProductModal} 
        closeBtn={
          <CrossButton
            size="medium"
            direction="row-reverse"
            click={closeAddProductModal}
          />
        } 
        content={null}
      />
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
        :
        <WrongList></WrongList>
      }
    </GeneralPage>
  )
}

export default Products