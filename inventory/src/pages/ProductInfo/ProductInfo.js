import React, { useState, useEffect } from 'react'
import { GeneralPage } from '../../components/GeneralPage/GeneralPage'
import axios from "axios";
import { useParams } from 'react-router-dom';

function ProductInfo() {
  const {id} = useParams()
  const [product, setProduct] = useState();
  const fetchSingleProduct = async() =>{
    try {
      const fetchData =await axios.get(`http://localhost:8000/products/${id}`)
      setProduct(fetchData.data)
      
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    fetchSingleProduct();
  }, [id]);
  return (
    <GeneralPage>
      ProductInfo
    </GeneralPage>
  )
}

export default ProductInfo