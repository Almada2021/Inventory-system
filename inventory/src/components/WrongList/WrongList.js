import { Box } from '@mui/material'
import CustomCircularProgress from '../CustomCircularProgress/CustomCircularProgress';

function WrongList({isLoading, error}) {
  const load = [isLoading, !error].every(Boolean);
  console.log(error)
  return (
    <Box>
      {
        load 
        ?
        <CustomCircularProgress/>
        :
        <p>error</p>
      }
    </Box>
  )
}

export default WrongList