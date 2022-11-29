import Button from '@mui/material/Button';
import ImageIcon from '@mui/icons-material/Image';

function ImgUploadButton({inputRef, section=`${Math.random()}`}, change) {
  return (
    <label htmlFor={`contained-button-file${section}`}>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          id={`contained-button-file${section}`}
          style={{ display: "none" }}
          onChange={change}
        />
        <Button variant="contained" component="span">
            <ImageIcon/>
        </Button>
    </label> 
  )
}

export default ImgUploadButton