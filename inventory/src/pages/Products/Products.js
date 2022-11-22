import {GeneralPage} from "../../components/GeneralPage/GeneralPage";
import  Pagination  from '../../components/Pagination/Pagination';
import NavProductsSection from '../../components/NavProductsSection/NavProductsSection';
import BigModal from '../../components/BigModal/BigModal';
import CrossButton from '../../components/buttons/CrossButton/CrossButton';
import { useGetUserProductsQuery } from '../../app/api/apiSlice';
import AddProductContent from '../../components/AddProductContent/AddProductContent';
import useToggle from '../../hooks/useToggle/useToggle';
import ConditionalList from '../../components/ConditionalList/ConditionalList';
function Products() {
  const [ addProductModal, changeAddProductModal] = useToggle()
  const {data, error, isLoading}= useGetUserProductsQuery(2)
  const products = data
  const canLoad = [
    typeof error == 'undefined', 
    isLoading !== true,
    products?.length > 0,
  ].every(Boolean)
  return (
    <>
    <GeneralPage >
      <NavProductsSection modal={addProductModal} setModal={changeAddProductModal}/>
      <BigModal 
        open={addProductModal} 
        onclose={changeAddProductModal} 
        closeBtn={
          <CrossButton
            size="medium"
            direction="row-reverse"
            click={changeAddProductModal}
      />
        } 
        content={<AddProductContent close={changeAddProductModal}/>}
      />
      <ConditionalList
        items={products}
        isLoading={isLoading}
        canLoad={canLoad}
        error={error}
      />
    </GeneralPage>
    <Pagination length={Math.ceil(products && products?.length !==0 ? products?.length / 9 : 1)}/> 
    </>

  )
}

export default Products