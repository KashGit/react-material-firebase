import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles } from '@material-ui/styles';
import logo from '../assets/logo.svg'

 const useStyles = makeStyles(theme => (
     {
         toolbarMargin: {
             ...theme.mixins.toolbar
         },
         tabContainer:  {
             marginLeft: 'auto'
         },
         tab:{
             ...theme.typography.tab,
             minWidth: '10px',
             marginLeft:'25px'
         }
     }
 ));

export default function Header() {
    const classes = useStyles();
    return (
        <>
            <AppBar position='static'>
                <Toolbar disableGutters>
                    <img alt='Mbbs Abroad Logo' src={logo} />
                    <Tabs className={classes.tabContainer}>
                        <Tab className={classes.tab}  label='Home'/>
                        <Tab className={classes.tab} label='Services'/>
                        <Tab className={classes.tab} label='Revolution'/>
                        <Tab className={classes.tab} label='About Us'/>
                        <Tab className={classes.tab} label='Contact'/>
                    </Tabs>
                </Toolbar>
            </AppBar>
        </>
    )
}
