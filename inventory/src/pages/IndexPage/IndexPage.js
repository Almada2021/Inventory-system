import { useGetUserProductsQuery } from '../../app/api/apiSlice'
import { GeneralPage } from '../../components/GeneralPage/GeneralPage'

function IndexPage() {
  const {data, error, isLoading}= useGetUserProductsQuery(2)
  let content = data
  return (
  
    <GeneralPage>{isLoading === false ? JSON.stringify(data, null, /\n/) : "no" }</GeneralPage>
  )
}

export default IndexPage