import { PropTypes } from "prop-types";
import { useTheme } from "@emotion/react"
export function useCustomTheme (selector = "primary", secondarySelector = null){
    const {palette} = useTheme();
    if(secondarySelector === null) return palette[selector]
    if(secondarySelector) return palette[selector][secondarySelector]

    
}
useCustomTheme.propTypes = {
    selector : PropTypes.string,
    secondarySelector : PropTypes.string
}; 

