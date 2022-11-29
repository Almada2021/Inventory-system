import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import {useCustomTheme} from "../../hooks/useCustomTheme/useCustomTheme";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import PhotoDiv from './PhotoDiv/PhotoDiv';
import CrossButton from '../buttons/CrossButton/CrossButton';
import WarningModal from '../WarningModal/WarningModal';
import BigModal from '../BigModal/BigModal';
import AddProductContent from '../../modalsPages/AddProductContent/AddProductContent';
import { Background } from '../cards/Background/Background';
import useToggle from '../../hooks/useToggle/useToggle';
import { LinkCardComponent } from '../cards/LinkCardComponent/LinkCardComponent';
import {  useDeleteUserProductMutation } from '../../app/api/apiSlice';
function Product({product = null}) {
    const {id, name, description, price, stock } = product;
    const [formModal, setFormModal] = useToggle();
    const [deleteModal, setDeleteModal] = useToggle();
    const selected = useCustomTheme("primary","third");
    const [deleteProductQuery] = useDeleteUserProductMutation()
    const deleteProduct = async() => {
        try {
            await deleteProductQuery(id)
            setDeleteModal();
            return true

        } catch (err) {
            console.error(err)
        }
    }
    return (
        <>
            {
                !product 
                ? null 
                :  
                <Background title={`${product.name}`} >
                 <div style={{width:"60%"}}>
                        <Typography  variant="h4" fontStyle="revert" fontWeight="500" color={selected} >
                            <Stack direction="row" alignItems="center" gap="6px" padding="3px">
                                <IconButton title='edit product' size="small" onClick={setFormModal}  sx={{borderRadius: "2px",backgrounColor: "#fff", outline: `1px solid ${selected}`, height: "30px", display: "flex", alignItems: "center", justifyContent:"center"}}>
                                    <ModeEditOutlineIcon sx={{color: selected}}/>
                                </IconButton>
                                <IconButton title='delete product' size="small" onClick={setDeleteModal} sx={{borderRadius: "2px",backgrounColor: "#fff", outline: `1px solid ${selected}`, height: "30px", display: "flex", alignItems: "center", justifyContent:"center"}}>
                                    <ClearIcon sx={{color: selected}}/>
                                </IconButton>
                                <LinkCardComponent to={`./${id}`}>
                                    {name.substring(0,4)}
                                    {name.length > 8 ? "..." : null}
                                </LinkCardComponent>
                            </Stack>
                        </Typography>
                        <Stack sx={{minHeight: "80px", maxHeight: "100px"}}>
                            <Typography variant='paragraph'>
                                {description.substring(0,100)}
                            </Typography>
                        </Stack>
                    </div>
                    <PhotoDiv 
                        title={name}
                        link="data:image/jpeg;base64,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"
                    />

                    
                    <BigModal 
                        open={formModal} 
                        onclose={setFormModal} 
                        closeBtn={
                          <CrossButton
                            size="medium"
                            direction="row-reverse"
                            click={setFormModal}
                          />
                        } 
                        content={<AddProductContent product={product} close={setFormModal}/>}
                    />
                    <WarningModal
                        stateModal={deleteModal}
                        question={`Are you sure do you want delete ${name}?`}
                        clickAcept={deleteProduct}
                        clickReject={setDeleteModal}
                    />
                </Background>
            }
        </>
  ) 
}   

export default Product