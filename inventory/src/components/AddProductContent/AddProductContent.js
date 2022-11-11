import {useReducer, useRef} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ImageIcon from '@mui/icons-material/Image';
//need delete formik an yup because not supports file
// import { Formik, useFormik, Field } from "formik";
/* el esquema necesita un cambio debido a que el objeto provider no puede acceder a su id */
import TextField from '@mui/material/TextField/TextField';
import changeReducerFunction from '../../features/forms/changeReducerFunctions';
import { productsInitialFields, productsReducer } from '../../features/schema/productSchema/productSchema';
import { styled } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useGetUserProvidersQuery, usePostUserProductMutation } from '../../app/api/apiSlice';
const FormContainer = styled("form")(({theme}) =>({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    flexWrap: "wrap",
  }
}));
const ButtonContainers = styled(Box)(({theme}) =>({
  display: "flex",
  gap: "10px",
  [theme.breakpoints.up("md")]:{
    width: "70%",
  }
}));
const TextFieldComponent = styled(TextField)(({theme}) => ({
  [theme.breakpoints.up("md")]:{
    width: "40vw"
  },
  [theme.breakpoints.up("lg")]:{
    width: "30vw"
  }
}))
function AddProductContent() {
  const [values, dispatch] = useReducer(productsReducer, productsInitialFields)
  const uploadInputRef = useRef(null);
  const { name, description, price, stock, provider } = values
  const {data, error, isLoading} = useGetUserProvidersQuery(1);
  const [postProduct] =usePostUserProductMutation();
  const handleSubmitProducts = async(e) => {
    e.preventDefault()
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
    } catch (error) {
    }
    
  }
  return (
    <Box>
      <FormContainer onSubmit={handleSubmitProducts}>

        <TextFieldComponent 
          value={name} 
          onChange={(e) => changeReducerFunction(dispatch, e, "NAME")}
          
          placeholder="insert product name"
        />
        
        <TextFieldComponent 
          value={description} 
          multiline
          rows={4}
          onChange={(e) => changeReducerFunction(dispatch, e, "DESCRIPTION")}
          placeholder="insert product description"
        />

        <TextFieldComponent 
          value={price} 
          onChange={(e) => changeReducerFunction(dispatch, e, "PRICE")}
          placeholder="insert product price"
        />
        <TextFieldComponent 
          value={stock} 
          onChange={(e) => changeReducerFunction(dispatch, e, "STOCK")}
          placeholder="insert product stock"
        />

        <Box sx={{ width: "69%",  boxSizing:"border-box"}}>
          <FormControl fullWidth>
            <InputLabel  
              id="provider-label"
              sx={{}}
            >Provider</InputLabel>
            <Select
              labelId="provider-label"
              id="simple-provider-label"
              value={provider}
              label="Provider"
              onChange={(e) => changeReducerFunction(dispatch, e, "PROVIDER")}
              >
                {data?.length !== undefined
                  ?
                    data.map((element) => (
                      <MenuItem value={element}>{element.name}</MenuItem>
                    ))
                  :  null 
                }
              <MenuItem value={"unknow"}>unknow</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <ButtonContainers>

          <label htmlFor="contained-button-file">
            <input
              ref={uploadInputRef}
              type="file"
              accept="image/*"
              id="contained-button-file"
              style={{ display: "none" }}
              // onLoad={loadProviders}
              onChange={(e) => console.log(e.target.value)}
            />

            <Button variant="contained" component="span">
                <ImageIcon/>
              </Button>
          </label> 
          <Button type="submit" variant='outlined' sx={{width: "80%"}}>Submit</Button>
        </ButtonContainers>
      </FormContainer>

    </Box>
  )
}

export default AddProductContent