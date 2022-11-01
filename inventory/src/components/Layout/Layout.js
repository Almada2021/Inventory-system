import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../navbar/Navbar'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
const ContainerNavBar = styled(Box)( ({theme}) => ({
  minHeight: "55px",
  [theme.breakpoints.up("md")]:{
    minHeight: "65px"
  }

}))
function Layout() {
  return    (
    <>  
        <ContainerNavBar>
          <Navbar/>
        </ContainerNavBar>
        <Outlet/>
        <Footer/>
    </>

    )
}

export default Layout