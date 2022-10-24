import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
const BoxContent =styled(Box)( ({theme}) => ({
    backgroundColor: theme.palette.primary.background,
    borderRadius: "10px",
    boxShadow: "0 0 12px #333",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    height: "90vh",
    padding: "20px",
}));

function BigModal({open, onclose, closeBtn, content=null}) {
  return (
    <Modal
        open={open}
        onClose={onclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >     
        <BoxContent>
            {closeBtn}
            {content}
        </BoxContent>
    </Modal>
  )
}

export default BigModal