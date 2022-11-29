import { ListContainer } from "../ListContainer/ListContainer"
import Product from "../Product/Product"
import WrongList from "../WrongList/WrongList"

function ConditionalList({items, isLoading, canLoad, error}) {
  return (
    <>
       {
        canLoad
        ? 
          <> 
            <ListContainer length={items?.length}>
                {
                  items.map(product => (
                    <Product key={product.id ? product.id : `${Math.random}${product.name}`} product={product} />
                    ))
                }
            </ListContainer>
          </>
        :
        <WrongList isLoading={isLoading} error={error}></WrongList>
      } 
    </>
  )
}

export default ConditionalList