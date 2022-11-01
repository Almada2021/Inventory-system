import React from 'react'
import { styled } from '@mui/material/styles';
const DivPhoto = styled("div")( ({ theme }) => ({
    width: "40%",
    padding: "10px"
    
}));
const ProductImg = styled("img")( ({ theme }) => ({
    width: "100px",
    height: "130px",

    objectFit: "cover",
})); 
function PhotoDiv({link, title = "No idea"}) {
  return (
    <DivPhoto>
      <div>
         <ProductImg
             alt={title}
             src={link}    
         />
      </div>
    </DivPhoto>
  )
}

export default PhotoDiv