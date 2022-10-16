import { styled } from '@mui/material/styles';
export const GeneralPage = styled("div")(({theme}) =>({
  alignItems: "center",
  background: `linear-gradient(to bottom,${theme.palette.primary.secondary}, ${theme.palette.primary.third})`,
  display: "flex",
  justifyContent:"center",
  flexDirection: "row",
  flexWrap: "wrap",
  minHeight: "100vh",
}))
