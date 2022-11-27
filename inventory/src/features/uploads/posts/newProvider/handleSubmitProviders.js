export const handleSubmitProviders = async(e, provider, close = null, postProduct) => {
    e.preventDefault()
    try {
        const {name, phone, created_by} = provider;
        if(!close){
            return close()
        }

    } catch (error) {
        console.log(error)
    }
}