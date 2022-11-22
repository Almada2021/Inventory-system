import { useState } from 'react';
import {GeneralPage} from "../../components/GeneralPage/GeneralPage";
import { useGetUserProvidersQuery } from '../../app/api/apiSlice';
import ProviderCard from '../../components/Provider/Provider';
import { ListContainer } from '../../components/ListContainer/ListContainer';
import WrongList from "../../components/WrongList/WrongList"
import Pagination from '../../components/Pagination/Pagination';
import NavProductsSection from '../../components/NavProductsSection/NavProductsSection';
import useToggle from "../../hooks/useToggle/useToggle";
import BigModal from '../../components/BigModal/BigModal';
import CrossButton from '../../components/buttons/CrossButton/CrossButton';
function Providers() {
    const [modal, changeModal] = useToggle()
    const {data, error, isLoading}= useGetUserProvidersQuery(1)
    const providers = data
    const canLoad = [
        typeof error == 'undefined', 
        isLoading !== true,
        providers?.length > 0,
    ].every(Boolean)
    return (
        <>
        <GeneralPage>
            <NavProductsSection modal={modal} setModal={changeModal}/>
            <BigModal 
                open={modal} 
                onclose={changeModal} 
                closeBtn={
                    <CrossButton
                        size="medium"
                        direction="row-reverse"
                        click={changeModal}
                    />
                }
                content={null}
            />
            {canLoad
                ?
                <ListContainer lenght={providers?.lenght}>
                {
                    providers.map((provider) => (
                        <ProviderCard provider={provider}/> 
                    ))
                }  
                </ListContainer>
                : <WrongList isLoading={isLoading} error={error}/>
            } 
        </GeneralPage>
        <Pagination length={Math.ceil(providers ? providers?.length / 9 : 1 / 9)}/> 
        </>

    )
}

export default Providers