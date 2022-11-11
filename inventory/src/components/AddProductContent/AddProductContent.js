import {useReducer, useRef} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ImageIcon from '@mui/icons-material/Image';
//need delete formik an yup because not supports file
// import { Formik, useFormik, Field } from "formik";
import TextField from '@mui/material/TextField/TextField';
import changeReducerFunction from '../../features/forms/changeReducerFunctions';
import { productsInitialFields, productsReducer } from '../../features/schema/productSchema/productSchema';
import { styled } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useGetUserProvidersQuery } from '../../app/api/apiSlice';
const FormContainer = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});
const ButtonContainers = styled(Box)({
  display: "flex",
  gap: "10px",
});
function AddProductContent() {
  const [values, dispatch] = useReducer(productsReducer, productsInitialFields)
  const uploadInputRef = useRef(null);
  const { name, description, price, stock, provider } = values
  const {data, error, isLoading} = useGetUserProvidersQuery(1)
  return (
    <Box>
      <FormContainer>

        <TextField 
          value={name} 
          onChange={(e) => changeReducerFunction(dispatch, e, "NAME")}
          placeholder="insert product name"
        />
        
        <TextField 
          value={description} 
          multiline
          rows={4}
          onChange={(e) => changeReducerFunction(dispatch, e, "DESCRIPTION")}
          placeholder="insert product description"
        />

        <TextField 
          value={price} 
          onChange={(e) => changeReducerFunction(dispatch, e, "PRICE")}
          placeholder="insert product price"
        />
        <TextField 
          value={stock} 
          onChange={(e) => changeReducerFunction(dispatch, e, "STOCK")}
          placeholder="insert product stock"
        />

        <Box sx={{ minWidth: 120,  }}>
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
                {data.length !== undefined
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
          <Button variant='outlined' sx={{width: "80%"}}>Submit</Button>
        </ButtonContainers>
      </FormContainer>

    </Box>
  )
}

export default AddProductContent