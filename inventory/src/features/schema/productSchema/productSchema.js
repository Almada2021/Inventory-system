export const productsInitialFields = {
    name: "",
    description: "",
    price: "",
    stock: "",
    provider:"",
    errorForm: "",
}
export const productsReducer = (state,action) =>{
    if (action.value === undefined){
      return state
    }
    switch(action.type){
      case "NAME":
        if (action.value.length < 4){
          return {...state, name: action.value, errorForm: "you need 4 letters"};          
        }
        return {...state, name: action.value, errorForm: ""};

      case "DESCRIPTION":
        return {...state, description: action.value};
      case "PRICE":
        return {...state, price: action.value};
      case "STOCK":
        return {...state, stock: action.value};
      case "PROVIDER":
        return {...state, provider: action.value};
      case "ERROR":
        return {...state, errorForm: action.value};
      default: 
        return state;
    }
}