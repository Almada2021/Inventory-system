import { styled } from '@mui/material/styles';
export const FormContainer = styled("form")(({theme}) =>({
    display: "flex",
    flexDirection: "column",
    gap: "1px 4px",
  
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "start",
      justifyContent: "center",
    }
}));