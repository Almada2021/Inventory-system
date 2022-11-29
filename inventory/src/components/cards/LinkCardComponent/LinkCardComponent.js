import { styled } from '@mui/material/styles';
import {Link} from "react-router-dom";

export const LinkCardComponent = styled(Link)( ({ theme }) => ({
    alignItems: "center",
    color: "inherit",
    gap: "8px",
    display: "flex",
    textDecoration: "none",
}));