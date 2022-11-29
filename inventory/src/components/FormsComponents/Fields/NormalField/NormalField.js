import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField/TextField';
import { InputLabel } from '@mui/material';
import Stack from '@mui/material/Stack';
const TextFieldComponent = styled(TextField)(({theme}) => ({
    width: "60vw",
    [theme.breakpoints.up("md")]:{
      width: "40vw"
    
    },
    [theme.breakpoints.up("lg")]:{
      width: "30vw"
    }
}));
function NormalField({value, forLabelId =`unknow${Math.random(0,100).toFixed(3)}`, errorText = false, change, placeholder = "", typeInput = "text"}) {
    const errorTest = [
        errorText !== "",
        errorText !== undefined,
        JSON.stringify(errorText) !== JSON.stringify({})
    ]
    return (
        <Stack 
            direction="column"
            sx={{
                height: "80px",
                margin: "0",
            }}
        >
            <InputLabel
              id={forLabelId}
              sx={{
                    color: "#f00",
                    height: "16px",
                    fontSize: "14px",
                    marginBottom: "2px"
                }}
            >
                {errorTest  ? errorText : null }
            </InputLabel>
            <TextFieldComponent
                labelId={forLabelId}
                type={typeInput}
                value={value}
                error={errorText}
                onChange={change}
                placeholder={placeholder}
            />
        </Stack>
  )
}

export default NormalField