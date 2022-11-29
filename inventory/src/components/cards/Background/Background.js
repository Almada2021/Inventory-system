import { styled } from '@mui/material/styles';

export const Background = styled("div")( ( {theme } ) => ({
    backgroundColor: theme.palette.primary.background,
    borderRadius: "10px",
    boxSizing: "border-box",
    padding: "15px",
    overflow: "hidden",
    color: "#000",
    display: "flex",
    margin: "4px 4px",
    wrap: "wrap",
    minHeight: "150px",
    maxHeight: "200px",
    width: "80vw",
    [theme.breakpoints.between('md', 'lg')]: {
        width: "310px",
    },
    [theme.breakpoints.up('lg')]:{
        minWidth: "290px",
        maxWidth: "340px",
    }
    // [theme.breakpoints.between('md', 'lg')]: {
    //     width: "30vw",
    // }

}));
