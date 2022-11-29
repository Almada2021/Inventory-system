import {useReducer, useRef, useState} from 'react'
import Box from '@mui/material/Box';
// import {handleSubmitProviders} from "../../features/uploads/posts/newProvider/handleSubmitProviders"
import changeReducerFunction from '../../features/forms/changeReducerFunctions';
import { providersInitialFields, providersReducers } from '../../features/schema/providerSchema/providerSchema';
import { FormContainer } from '../../components/containers/FormContainer/FormContainer';
// import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import NormalField from '../../components/FormsComponents/Fields/NormalField/NormalField';
import { usePostUserProviderMutation } from '../../app/api/apiSlice';
import { ButtonsGroupSubmit } from '../../components/FormsComponents/ButtonsGroup/ButtonsGroup';
import useChangeImg from '../../hooks/useChangeImg/useChangeImg';
function AddProviderContent({close}) {
    const [values, dispatch] = useReducer(providersReducers, providersInitialFields);
    const uploadInputRef = useRef(null)
    const {name, phone} = values
    const [img, setImg] = useChangeImg()
    const [postUserProvider] = usePostUserProviderMutation()
    const handleSubmit = async(e) => {
        e.preventDefault();
        const obj = {
            name, 
            phone,
            created_by: "1"
        }
        console.log(obj)
        const resp = await postUserProvider(obj);
        close();
        console.log(resp)
    }
    return (
        <Box alignItems="center" display="flex" flexDirection="column">
            {
                uploadInputRef.current !== undefined
                ?
                <Box width="60vw" marginBottom="5px" height="150px" overflow="hidden" color="#fff">
                    <img src={img} style={{objectFit: "cover", width:"inherit", height:"inherit"}}/>
                </Box>
                : null
            }
            <FormContainer onSubmit={(e) => handleSubmit(e)}>
                <NormalField
                    value={name}
                    forLabelId="provider-name-field"
                    change={(e) => changeReducerFunction(dispatch, e, "NAME")}
                    errorText={null}
                    placeholder="insert a provider name"
                />
                <NormalField
                    change={(e) => changeReducerFunction(dispatch, e, "PHONE")}
                    errorText={null}
                    forLabelId="provider-phone-field"
                    placeholder="insert a phone number"
                    typeInput="tel"
                    value={phone}
                />
                <ButtonsGroupSubmit
                    objRef={uploadInputRef}
                    previewImg={setImg}
                />
            </FormContainer>
        </Box>
    )
}

export default AddProviderContent