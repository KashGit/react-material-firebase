import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { AppBar, Toolbar, Button, Menu, MenuItem } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles } from '@material-ui/styles';

import logo from '../assets/logo.svg'

const useStyles = makeStyles(theme => (
    {
        toolbarMargin: {
            ...theme.mixins.toolbar
        },
        tabContainer: {
            marginLeft: 'auto'
        },
        logo: {
            height: '8em'
        },
        logoContainer: {
            padding: 0,
            minWidth: '300px',
            '&:hover': { backgroundColor: 'transparent' }
        },
        tab: {
            ...theme.typography.tab,
            minWidth: '10px',
            marginLeft: '25px'
        },
        button: {
            ...theme.typography.estimates,
            marginLeft: '45px',
            marginRight: '25px',
            borderRadius: '45px',
            height: '45px'
        },
        menu: {
            backgroundColor: theme.palette.common.purple,
            color: 'white',
        }
    }
));

export default function Header() {
    const classes = useStyles();
    const [tabIndex, setTabIndex] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const handleTabChange = (e, newTabIndex) => {
        setTabIndex(newTabIndex);
    }
    useEffect(() => {
        if (window.location.pathname === "/" && tabIndex !== 0)
            setTabIndex(0)
        else if (window.location.pathname === "/services" && tabIndex !== 1)
            setTabIndex(1)
        else if (window.location.pathname === "/revolution" && tabIndex !== 2)
            setTabIndex(2)
        else if (window.location.pathname === "/about" && tabIndex !== 3)
            setTabIndex(3)
        else if (window.location.pathname === "/contact" && tabIndex !== 4)
            setTabIndex(4)

    }, [tabIndex]);
    const handleClick = e => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    }
    const handleClose = e => {
        setAnchorEl(null);
        setOpenMenu(false);
    }
    return (
        <>
            <AppBar position='static'>
                <Toolbar disableGutters>
                    <Button
                        component={Link}
                        disableRipple to='/'
                        className={classes.logoContainer}>
                        <img
                            alt='Mbbs Abroad Logo'
                            src={logo}
                            className={classes.log}
                            onClick={() => setTabIndex(0)} />
                    </Button>
                    <Tabs value={tabIndex} className={classes.tabContainer} onChange={handleTabChange}>
                        <Tab className={classes.tab} label='Home' component={Link} to='/' />
                        <Tab className={classes.tab}
                            label='Services'
                            aria-controls={anchorEl ? 'menu' : undefined}
                            aria-haspopup={anchorEl ? 'true' : undefined}
                            component={Link} to='/services'
                            onMouseOver={e => handleClick(e)}
                        />
                        <Tab className={classes.tab} label='Revolution' component={Link} to='/revolution' />
                        <Tab className={classes.tab} label='About Us' component={Link} to='/about' />
                        <Tab className={classes.tab} label='Contact' component={Link} to='/contact' />
                    </Tabs>
                    <Button variant='contained' color='secondary' className={classes.button}>Free Estimates</Button>
                    <Menu id='menu'
                        anchorEl={anchorEl}
                        open={openMenu}
                        MenuListProps={{ onMouseLeave: handleClose }}
                        classes={{ paper: classes.menu }}
                        elevation={0}
                        getContentAnchorEl={null}
                        anchorOrigin={{ vertical: 'bottom' }}
                        transformOrigin={{ vertical: 'top', }}
                    >
                        <MenuItem component={Link} to='/customsoftwares' onClick={() => { handleClose(); setTabIndex(1); }}>Custom Software Development</MenuItem>
                        <MenuItem component={Link} to='/mobileapps' onClick={() => { handleClose(); setTabIndex(1); }}>Mobile App Development</MenuItem>
                        <MenuItem component={Link} to='/websites' onClick={() => { handleClose(); setTabIndex(1); }}>Website Development</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </>
    )
}
