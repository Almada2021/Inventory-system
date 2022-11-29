function ProviderList({data}) {
  return (
    <FormControl fullWidth>
      <InputLabel  
        id="provider-label"
      >Provider</InputLabel>
      <Select
        labelId="provider-label"
        id="simple-provider-label"
        value={provider}
        label="Provider"
        onChange={(e) => changeReducerFunction(dispatch, e, "PROVIDER")}
        >
          <MenuItem value={"unknow"}>unknow</MenuItem>
          {!error && isLoading == false && data.length > 0
            ?
              data.map((element) => (
                <MenuItem value={element}>{element.name}</MenuItem>
              ))
            :  null 
          }
      </Select>
    </FormControl>
  )
}

export default ProviderList