import { useState } from 'react';
import {GeneralPage} from "../../components/GeneralPage/GeneralPage";
import Product from '../../components/Product/Product';
import  Pagination  from '../../components/Pagination/Pagination';
import { ListContainer } from '../../components/ListContainer/ListContainer';
import WrongList from '../../components/WrongList/WrongList';
import NavProductsSection from '../../components/NavProductsSection/NavProductsSection';
import BigModal from '../../components/BigModal/BigModal';
import CrossButton from '../../components/buttons/CrossButton/CrossButton';
import { useGetUserProductsQuery } from '../../app/api/apiSlice';
import AddProductContent from '../../components/AddProductContent/AddProductContent';
function Products() {
  const [ addProductModal, setAddProductModal] = useState(false)
  const closeAddProductModal = () => setAddProductModal(false);
  const {data, error, isLoading}= useGetUserProductsQuery(2)
  const products = data

  const canLoad = [
    typeof error == 'undefined', 
    isLoading !== true,
    products?.length > 0,
  ]
    .every(Boolean)
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
        content={<AddProductContent close={closeAddProductModal}/>}
      />
      {
        canLoad
        ? 
          <> 
            <ListContainer length={products.length}>
                {
                  products.map(product => (
                    <Product key={product.id} product={product} />
                    ))
                }
            </ListContainer>
            <Pagination length={Math.ceil(products.length / 9)}/> 
          </>
        :
        <WrongList isLoading={isLoading} error={error}></WrongList>
      }
    </GeneralPage>
  )
}

export default Products