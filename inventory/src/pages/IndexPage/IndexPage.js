import React from 'react'
import { useGetUserProductsQuery } from '../../app/api/apiSlice'
import { GeneralPage } from '../../components/GeneralPage/GeneralPage'

function IndexPage() {
  const {data, error, isLoading}= useGetUserProductsQuery(2)
  console.log(data)
  let content = data
  return (
  
    <GeneralPage>{isLoading === false ? JSON.stringify(data, null, /\n/) : "no" }</GeneralPage>
  )
}

export default IndexPage