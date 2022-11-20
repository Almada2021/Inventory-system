export const productsInitialFields = {
    name: "",
    description: "",
    price: "",
    stock: "",
    provider:"",
    errorForm: {
      errorName: "",
      description: "",
      errorPrice: "",
      errorStock: "",
      provider: "",
    },
}
const message = {
  name: "you need 4 letters",
  price: "you need a price",
  stock: "you need a stock positive number"
}
const priceRegex = /^(.*?)[0-9]/;
const letters = /^(.*?)[aA-zZ]/
export const productsReducer = (state,action) =>{
    if (action.value === undefined){
      return state
    }
    switch(action.type){
      case "NAME":
        if (action.value.length < 4){
          return {...state, name: action.value, errorForm: {...state.errorForm, errorName: message.name}};          
        }
        return {...state, name: action.value, errorForm: {...state.errorForm, errorName: ""}};

      case "DESCRIPTION":
        return {...state, description: action.value};
      
      case "PRICE":
        if(action.value === ""){
          return {...state, price: action.value, errorForm: {...state.errorForm, errorPrice: ""}};          
        }
        if(action.value <= 0){
          return {...state, price: action.value, errorForm: {...state.errorForm, errorPrice: message.price}}
        }
        if(letters.test(action.value) === true){
          return {...state}
        }
        if(priceRegex.test(action.value) === false){
          return {...state, errorForm: {...state.errorForm, errorPrice: message.price}}
        }
        return {...state, price: action.value, errorForm: {...state.errorForm, errorPrice: ""}};

      case "STOCK":
        if(action.value === ""){
          return {...state, stock: action.value, errorForm: {...state.errorForm, errorPrice: ""}};          
        }
        if(letters.test(action.value) === true){
          return {...state}
        }
        if(action.value <= 0){
          return {...state, stock: action.value, errorForm: {...state.errorForm, errorStock: message.stock}}
        }
        if(priceRegex.test(action.value) === false){
          return {...state, errorForm: {...state.errorForm, errorPrice: message.price}}
        }
        return {...state, stock: action.value, errorForm: {...state.errorForm, errorStock: ""}};

      case "PROVIDER":
        return {...state, provider: action.value};
        
      case "ERROR":
        return {...state, errorForm: action.value};
      default: 
        return state;
    }
}