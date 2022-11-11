import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';

const Container = styled(Box)( ({theme}) => ({
    zIndex: 100,
    display: "block",
    boxShadow: "none",
    position: "fixed",
    left: "80%",
    top: "75%",
    margin: "0 auto",
    [theme.breakpoints.up("md")]:{
        left: "90%",
        // display: "none",        
    },
    ['&:active']: {
        boxShadow: "none"
    }
}));
function NavProductsSection({modal, setModal}) {
    const openModal = () => setModal(true);
    return (
        <Container onClick={openModal}>
            <Fab color="info" aria-label="add" size="large" sx={{boxShadow: "none", "&:active": {boxShadow: "none", backgroundColor: "#0cf"}}}>
                <AddIcon />
            </Fab>
        </Container>
    )
}

export default NavProductsSection