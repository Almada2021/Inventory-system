import { Box } from '@mui/material'
import React from 'react'
import CustomCircularProgress from '../CustomCircularProgress/CustomCircularProgress';

function WrongList({isLoading, error}) {
  const load = [isLoading, !error].every(Boolean);
  return (
    <Box>
      {
        load 
        ?
        <CustomCircularProgress/>
        :
        <p>{error}</p>
      }
    </Box>
  )
}

export default WrongList