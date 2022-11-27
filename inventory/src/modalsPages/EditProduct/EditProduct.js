import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'
import { useCustomTheme } from '../../hooks/useCustomTheme/useCustomTheme';

function EditProduct({product}) {
    const {name} = product
    const color = useCustomTheme("primary", "secondary")
    return (
    <>
      <Stack direction="column" >
          <Typography variant='h4' fontWeight="bold" color={color} textAlign="center">
              Edit Product
          </Typography>            
          <Typography variant='h6' fontWeight="lighter" color={color} textAlign="center">
              {name}
          </Typography>            
      </Stack>
    </>
  )
}
export default EditProduct