import React from 'react'
import { styled } from '@mui/material/styles';
import Page  from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Container = styled("div")( ( { theme } ) => ({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    height: "50px",
    width: "100vw",
}))


function Pagination({length}) {
  return (
    <Container>
        <Page 
          count={length} 
          color="primary" 
          renderItem={(item) => (
            <PaginationItem
              sx={{color: "#fff", backgroundColor: "#00f"}}
              components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
    </Container>
  )
}

export default Pagination