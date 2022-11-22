import { styled } from '@mui/material/styles';
export const GeneralPage = styled("div")(({theme}) =>({
  alignItems: "center",
  display: "flex",
  justifyContent:"center",
  overflowX: "visible",
  flexDirection: "column",
  flexWrap: "wrap",
  minHeight: "100vh",
  maxHeight: "110vh",
  minWidth: "100vw",
  overflow: "hidden",
  [theme.breakpoints.down("md")]:{
    minHeight: "150vh",
    maxHeight: "350vh",
    paddingTop: "10px"
  }
}))
