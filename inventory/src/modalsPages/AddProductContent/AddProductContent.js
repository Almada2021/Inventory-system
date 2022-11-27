import {useReducer, useRef, useState} from 'react'
import Box from '@mui/material/Box';
import { handleSubmitProducts } from '../../features/uploads/posts/newProduct/handleSubmitProducts';
import changeReducerFunction from '../../features/forms/changeReducerFunctions';
import { productsInitialFields, productsReducer } from '../../features/schema/productSchema/productSchema';
import { FormContainer } from '../../components/containers/FormContainer/FormContainer';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { ButtonsGroupSubmit } from '../../components/FormsComponents/ButtonsGroup/ButtonsGroup';
import { useGetUserProvidersQuery, usePostUserProductMutation } from '../../app/api/apiSlice';
import NormalField from '../../components/FormsComponents/Fields/NormalField/NormalField';

function AddProductContent({close}) {
  const [values, dispatch] = useReducer(productsReducer, productsInitialFields)
  const uploadInputRef = useRef(null);
  const { name, description, price, stock, provider, errorForm } = values 
  const {errorName, errorPrice, errorStock} = errorForm
  const {data, error, isLoading} = useGetUserProvidersQuery(1);
  const [postProduct] = usePostUserProductMutation();
  const [image, setImage] = useState()
  const previewImg = (event) => {
    if (event.target.files && event.target.files[0]) {
        setImage( URL.createObjectURL(event.target.files[0]))
        return uploadInputRef.current = URL.createObjectURL(event.target.files[0])
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
      <FormContainer onSubmit={(e) => handleSubmitProducts(e, values, close, postProduct)}>       
        <NormalField
          value={name}
          forLabelId="name-field"
          change={(e) => changeReducerFunction(dispatch, e, "NAME")}
          errorText={errorName}
          placeholder="insert product name"
        />
        
        
        <NormalField
          value={description} 
          multiline
          rows={1}
          change={(e) => changeReducerFunction(dispatch, e, "DESCRIPTION")}
          placeholder="insert product description"
        />
        <NormalField 
          value={price}
          forLabelId="price-field" 
          errorText={errorPrice}
          change={(e) => changeReducerFunction(dispatch, e, "PRICE")}
          placeholder="insert product price"
        />

        <NormalField
          value={stock} 
          errorText={errorStock}
          change={(e) => changeReducerFunction(dispatch, e, "STOCK")}
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
                <MenuItem value={"unknow"}>unknow</MenuItem>
                {!error && isLoading == false && data.length > 0
                  ?
                    data.map((element) => (
                      <MenuItem value={element}>{element.name}</MenuItem>
                    ))
                  :  null 
                }
            </Select>
          </FormControl>
        </Box>
        <ButtonsGroupSubmit
          objRef={uploadInputRef}
          previewImg={previewImg}
        />
      </FormContainer>
    </Box>
  )
}

export default AddProductContent