import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ImageIcon from '@mui/icons-material/Image';

const ButtonContainers = styled(Box)(({theme}) =>({
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    [theme.breakpoints.up("md")]:{
      marginTop: "15px",
      width: "40vw",
    }
}));
const SubmitButton = styled(Button)(({theme}) => ({
    width: "80%",
    [theme.breakpoints.up("md")]: {
      width: "40%"
    }
}));
export function ButtonsGroupSubmit ({objRef, previewImg}){
    return(
        <ButtonContainers>
          <label htmlFor="contained-button-file">
            <input
              ref={objRef}
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
    )
}