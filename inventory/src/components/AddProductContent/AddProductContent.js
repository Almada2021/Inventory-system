import {useReducer, useRef, useState} from 'react'
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
import { width } from '@mui/system';
import NormalField from '../FormsComponents/Fields/NormalField/NormalField';
const FormContainer = styled("form")(({theme}) =>({
  display: "flex",
  flexDirection: "column",
  gap: "5px",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "start",
    justifyContent: "center",
  }
}));
const ButtonContainers = styled(Box)(({theme}) =>({
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  [theme.breakpoints.up("md")]:{
    marginTop: "15px",
    width: "40vw",
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
const SubmitButton = styled(Button)(({theme}) => ({
  width: "80%",
  [theme.breakpoints.up("md")]: {
    width: "40%"
  }
}))
function AddProductContent({close}) {
  const [values, dispatch] = useReducer(productsReducer, productsInitialFields)
  const uploadInputRef = useRef(null);
  const { name, description, price, stock, provider, errorForm } = values
  const {errorName, errorPrice} = errorForm
  const {data, error, isLoading} = useGetUserProvidersQuery(1);
  const [postProduct] =usePostUserProductMutation();
  const [image, setImage] = useState()
  const previewImg = (event) => {
    console.log(event.target.files)
    if (event.target.files && event.target.files[0]) {
        setImage( URL.createObjectURL(event.target.files[0]))
        return uploadInputRef.current = URL.createObjectURL(event.target.files[0])
      }
  }
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
      close()
    } catch (error) {
    }
    
  }
  return (
    <Box alignItems="center" display="flex" flexDirection="column"> 
        {uploadInputRef.current !== undefined 
          ? 
          <Box width="60vw" marginBottom="5px" height="150px" overflow="hidden" color="#fff">
            <img src={image} style={{objectFit: "cover", width: "inherit", height: "inherit"}}></img> 
          </Box>
          : null
        }
      <FormContainer onSubmit={handleSubmitProducts}>       
        <NormalField
          value={name}
          forLabelId="name-field"
          change={(e) => changeReducerFunction(dispatch, e, "NAME")}
          errorText={errorName}
          placeholder="insert product name"
        />
        
        
        <TextFieldComponent 
          value={description} 
          multiline
          rows={1}
          onChange={(e) => changeReducerFunction(dispatch, e, "DESCRIPTION")}
          placeholder="insert product description"
        />
        <NormalField 
          value={price}
          forLabelId="price-field" 
          errorText={errorPrice}
          change={(e) => changeReducerFunction(dispatch, e, "PRICE")}
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
            >Provider</InputLabel>
            <Select
              labelId="provider-label"
              id="simple-provider-label"
              value={provider}
              label="Provider"
              onChange={(e) => changeReducerFunction(dispatch, e, "PROVIDER")}
              >
                {!error && isLoading == false && data.length > 0
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
              onChange={previewImg}
            />
            <Button variant="contained" component="span">
                <ImageIcon/>
            </Button>
          </label> 
          <SubmitButton type="submit" variant='outlined'>Submit</SubmitButton>
        </ButtonContainers>
      </FormContainer>
    </Box>
  )
}

export default AddProductContent