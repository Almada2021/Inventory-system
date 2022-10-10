import { PropTypes } from "prop-types";
import { useTheme } from "@emotion/react"
export function useCustomTheme (selector = "primary"){
    const {palette} = useTheme();
    return palette[selector]
}
useCustomTheme.propTypes = {
    selector : PropTypes.string
}; 

