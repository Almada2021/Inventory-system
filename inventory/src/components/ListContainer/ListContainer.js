import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
export const ListContainer =styled(Box)( ( {theme} ) => {
    return({
        display:"flex",
        flexWrap: "wrap",
        width:"82vw",
        minHeight: "60vh",
        overflow: "hidden",
        justifyContent: "center",
        [theme.breakpoints.between('sm','lg')]: {
            width: "100vw",
            justifyContent: "center",
        },
    })
})

