export const providersInitialFields = {
    name: "",
    phone: "",   
    created_by: "",
    errorForm: {
        errorName: "",
        errorPhone: "",
        errorCreated: "",
    }
};
const message ={
    name: "",
    phone: "",
    created: "",
};
export const providersReducers = ( state, action ) => {
    if(action.value === undefined){
        return state
    }   
    
    switch(action.type){
        case "NAME":
            return {...state, name: action.value};

        case "PHONE":
            
            return {...state, phone: action.value};

        case "CREATED": 
            return {...state, created_by: action.value};
            
        default:
            return state;
    }
};