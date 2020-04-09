import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
//import { makeStyles } from '@material-ui/styles';
import logo from '../assets/logo.svg'

// const useStyles = makeStyles(theme => (
//     {
//         toolbarMargin: {
//             ...theme.mixins.toolbar
//         }
//     }
// ));

export default function Header() {
    //const classes = useStyles();
    return (
        <>
            <AppBar position='static'>
                <Toolbar disableGutters>
                    <img alt='Mbbs Abroad Logo' src={logo} />
                </Toolbar>
            </AppBar>
        </>
    )
}
