import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
// style={{display: "flex", flexWrap:"wrap", width: "82vw",justifyContent: "space-between"}}
export const ListContainer =styled(Box)( ( {theme, length} ) => {
    console.log(length)
    return({
        display:"flex",
        flexWrap: "wrap",
        width:"82vw",
        justifyContent: length/3 === 0 ? "center": "start",
        [theme.breakpoints.between('sm','lg')]: {
            width: "100vw",
            justifyContent: "center",
        },
    })
})

