import Stack from '@mui/material/Stack';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';

function CrossButton({size, direction, click}) {
  return (
    <Stack direction={direction}>
      <IconButton onClick={click} size={size}>
          <ClearIcon />
      </IconButton>        
    </Stack>
  )
}

export default CrossButton;