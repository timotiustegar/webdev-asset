import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { createTheme } from '@mui/material/styles';
import {
    makeStyles,
} from '@mui/styles';
const theme = createTheme();
const materialStyles = makeStyles(() => ({
    materialIcon: {
        [theme.breakpoints.down('sm')]: {
            fontSize: "16px !important"
        },
        [theme.breakpoints.between('sm', 'lg')]: {
            fontSize: "22px !important"
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            fontSize: "26px !important"
        }
    },
}));
type Props = {
    material?: string;
}
export default function MaterialClass({ material }: Props) {
    const classes = materialStyles()
    return (
        <div className="d-flex align-items-center mb-2">
            <CheckCircleIcon style={{ color: '#3935EB' }} className={classes.materialIcon} />
            <p className="paragraf m-0 primaryColor mt-1 ms-3">{material}</p>
        </div>
    )
}