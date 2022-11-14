import { useState } from 'react';
import {GeneralPage} from "../../components/GeneralPage/GeneralPage";
import { useGetUserProvidersQuery } from '../../app/api/apiSlice';
import ProviderCard from '../../components/Provider/Provider';
import { ListContainer } from '../../components/ListContainer/ListContainer';
import WrongList from "../../components/WrongList/WrongList"
import Pagination from '../../components/Pagination/Pagination';
function Providers() {
    const [ addProductModal, setAddProductModal] = useState(false)
    const closeAddProductModal = () => setAddProductModal(false);
    const {data, error, isLoading}= useGetUserProvidersQuery(1)

    return (
        <GeneralPage>
            
            {data?.length > 0 
                ?
                <ListContainer lenght={data.lenght}>
                {
                    data.map( (provider) => (
                        <ProviderCard provider={provider}/> 
                    ))
                }  
                    <Pagination length={Math.ceil(data.length / 9)}/> 
                </ListContainer>
                : <WrongList isLoading={isLoading} error={error}/>
            } 
        </GeneralPage>
    )
}

export default Providers