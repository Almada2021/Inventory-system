import { styled } from '@mui/material/styles';
export const GeneralPage = styled("div")(({theme}) =>({
  // alignItems: "",
  background: `linear-gradient(to bottom,${theme.palette.primary.secondary}, ${theme.palette.primary.third})`,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "12px 25px",
  padding: "10px",
  flexWrap: "wrap",
  minHeight: "100vh",
}))
