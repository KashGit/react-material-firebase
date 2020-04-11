import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { AppBar, Toolbar, Button, Menu, MenuItem } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
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
            height: '8em',
            [theme.breakpoints.down('md')]:{height:'7em'},
            [theme.breakpoints.down('xs')]:{height:'5.5em'}
        },
        logoContainer: {
            padding: 0,
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
        },
        menuItem: {
            ...theme.typography.tab,
            '&:hover': { opacity: 0.7 }
        }
    }
));

export default function Header() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [tabIndex, setTabIndex] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const menuOptions = [{ name: 'Services', link: '/services' },
    { name: 'Custom Software Development', link: '/customsoftware' },
    { name: 'Mobile App Development', link: 'mobileapps' },
    { name: 'Website Development', link: '/websites' }
    ];

    const handleTabChange = (e, newTabIndex) => {
        setTabIndex(newTabIndex);
    }

    useEffect(() => {

        switch (window.location.pathname) {
            case "/":
                if (tabIndex !== 0) {
                    setTabIndex(0)
                }
                break;
            case "/services":
                if (tabIndex !== 1) {
                    setTabIndex(1);
                    setSelectedIndex(0)
                }
                break;
            case "/customsoftwares":
                if (tabIndex !== 1) {
                    setTabIndex(1);
                    setSelectedIndex(1)
                }
                break;
            case "mobileapp":
                if (tabIndex !== 1) {
                    setTabIndex(1);
                    setSelectedIndex(2)
                }
                break;
            case "/websites":
                if (tabIndex !== 1) {
                    setTabIndex(1);
                    setSelectedIndex(3)
                }
                break;
            case "revolution":
                if (tabIndex !== 2) {
                    setTabIndex(2)
                }
                break;
            case "/about":
                if (tabIndex !== 3) {
                    setTabIndex(3)
                }
                break;
            case "/contact":
                if (tabIndex !== 4) {
                    setTabIndex(4)
                }
                break;
            default:
                break;
        }
    }, [tabIndex]);

    const handleClick = e => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    }

    const handleMenuItemClick = (e, index) => {
        setAnchorEl(null);
        setOpenMenu(false);
        setSelectedIndex(index);
    }

    const handleClose = e => {
        setAnchorEl(null);
        setOpenMenu(false);
    }
    const tabs = (
        <>
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
            >
                {menuOptions.map((option, i) => (
                    <MenuItem
                        classes={{ root: classes.menuItem }}
                        component={Link} to={option.link}
                        onClick={(e) => { handleMenuItemClick(e, i); setTabIndex(1) }}
                        selected={i === selectedIndex && tabIndex === 1}>
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </>);

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
                            className={classes.logo}
                            onClick={() => setTabIndex(0)} />
                    </Button>
                    {matches ? null : tabs}
                </Toolbar>
            </AppBar>
        </>
    )
}
