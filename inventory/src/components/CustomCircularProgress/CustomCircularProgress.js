import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CustomCircularProgress() {
  return (
    <Stack sx={{margin: "50px", padding: "50px"  ,color: "#fff", height: "max-content", width: "max-content" }} spacing={2} direction="row">
      <CircularProgress color="inherit" />
    </Stack>
  );
}