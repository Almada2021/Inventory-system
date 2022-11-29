export const handleSubmitProviders = async(e, provider, close = null, postProduct) => {
    e.preventDefault()
    try {
        console.log(provider)
        const response = await postProduct({...provider, created_by: "1"})
        console.log(response)
        if(close !== null){
            close()
        }
    } catch (error) {
        console.log(error)
    }
}