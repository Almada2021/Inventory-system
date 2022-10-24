import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Button, Typography } from '@mui/material';
const Container = styled(Box)( ( { theme } ) => ({
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    boxShadow: "0 0 12px #333",
    position: 'absolute',
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "85vw",
    height: "35vh",
    padding: "5px",
    [theme.breakpoints.up("md")]:{
        width: "50vw",
        height: "25vh",
    },

}))
function WarningModal({question, stateModal ,buttonAcept="Of Course!", buttonReject="Cancel", clickAcept, clickReject}) {
    return(
        <Modal
            open={stateModal}
            onClose={clickReject}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"    
        >
            <Container>
                <Box display="flex" justifyContent="center">
                            <Typography variant='paragraph' fontSize="18px">
                                {question}
                            </Typography>
                </Box>
                <Stack direction="row" justifyContent="center" gap="10px" marginTop="20px">      
                    <Button onClick={clickAcept} variant="outlined" color="success">
                        {buttonAcept}
                    </Button>
                    <Button onClick={clickReject} variant="outlined" color="error">
                        {buttonReject}
                    </Button>
                </Stack>
            </Container>
        </Modal>
    )
}

export default WarningModal