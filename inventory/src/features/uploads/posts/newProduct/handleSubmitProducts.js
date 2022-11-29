export const handleSubmitProducts = async(e, product, close = null, postProduct) => {
    e.preventDefault()
    const {name, description, stock, price, provider} = product
    try {

      const obj = {
        name,
        description,
        stock,
        price,
        create_by: 2,
        provider: 2,
      }
      const response = await postProduct(obj)
      if(close !== null){
          close()
      }
    } catch (error) {
        console.log(error)
    }
}