export const productsInitialFields = {
    name: "",
    description: "",
    price: "",
    stock: "",
    provider:"",
}
export const productsReducer = (state,action) =>{
    if (action.value === undefined){
      return state
    }
    switch(action.type){
      case "NAME":
        return {...state, name: action.value};
      case "DESCRIPTION":
        return {...state, description: action.value};
      case "PRICE":
        return {...state, price: action.value};
      case "STOCK":
        return {...state, stock: action.value};
      case "PROVIDER":
        return {...state, provider: action.value};
      default: 
        return state;
    }
}