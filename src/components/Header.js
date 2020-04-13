import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { AppBar, Toolbar, Button, Menu, MenuItem } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { makeStyles } from '@material-ui/styles'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

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
            [theme.breakpoints.down('md')]: { height: '7em' },
            [theme.breakpoints.down('xs')]: { height: '5.5em' }
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
            height: '45px',
            [theme.breakpoints.down('md')]: { fontSize: '.7em', marginLeft: '5px', marginRight: '5px' },
        },
        menu: {
            backgroundColor: theme.palette.common.purple,
            color: 'white',
        },
        menuItem: {
            ...theme.typography.tab,
            '&:hover': { opacity: 0.7 }
        },
        drawerIconContainer: {
            marginLeft: 'auto',
            '&:hover': { backgroundColor: 'transparent' },
            color: theme.palette.common.pink
        },
        drawerIcon: {
            height: "30px",
            width: "30px"
        },
        drawer: {
            backgroundColor: theme.palette.common.purple
        },
        drawerItem: {
            ...theme.typography.tab,
            color: 'white'
        },
        drawerItemEstimate: {
            backgroundColor: theme.palette.common.pink
        }
    }
));

export default function Header({tabIndex, setTabIndex, selectedIndex, setSelectedIndex}) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const menuOptions = [
        { name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
        { name: 'Custom Software', link: '/customsoftware', activeIndex: 1, selectedIndex: 1 },
        { name: 'Mobile Apps', link: '/mobileapps', activeIndex: 1, selectedIndex: 2 },
        { name: 'Websites', link: '/websites', activeIndex: 1, selectedIndex: 3 }
    ];
    const routes = [
        { name: 'Home', link: '/', activeIndex: 0 },
        {
            name: 'Services', link: '/services', activeIndex: 1,
            ariaOwns: anchorEl ? 'menu' : undefined,
            ariaPopus: anchorEl ? 'true' : undefined,
            mouseOver: e => handleClick(e)
        },
        { name: 'Revolution', link: '/revolution', activeIndex: 2 },
        { name: 'About Us', link: '/about', activeIndex: 3 },
        { name: 'Contact', link: '/contact', activeIndex: 4 },
    ];

    const handleTabChange = (e, newTabIndex) => {
        setTabIndex(newTabIndex);
    }

    useEffect(() => {
        [...menuOptions, ...routes].map(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (tabIndex !== route.activeIndex) {
                        setTabIndex(route.activeIndex);
                        if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
                            setSelectedIndex(route.selectedIndex);
                        }
                    }
                    break;
                default:
                    break;
            }
        })
    }, [tabIndex, menuOptions, routes, selectedIndex]);

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

                {routes.map(route => (
                    <Tab
                        key={`${route}${route.activeIndex}`}
                        className={classes.tab}
                        label={route.name}
                        aria-owns={route.ariaOwns}
                        aria-haspopup={route.ariaPopus}
                        component={Link} to={route.link}
                        onMouseOver={route.mouseOver} />
                ))}
            </Tabs>
            <Button
                variant='contained'
                color='secondary'
                className={classes.button}>
                Free Estimates
            </Button>
            <Menu id='menu'
                anchorEl={anchorEl}
                open={openMenu}
                MenuListProps={{ onMouseLeave: handleClose }}
                classes={{ paper: classes.menu }}
                elevation={0}
            >
                {menuOptions.map((option, i) => (
                    <MenuItem
                        key={`${option}${i}`}
                        classes={{ root: classes.menuItem }}
                        component={Link} to={option.link}
                        onClick={(e) => { handleMenuItemClick(e, i); setTabIndex(1) }}
                        selected={i === selectedIndex && tabIndex === 1}>
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );

    const drawer = (
        <>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onOpen={() => { setOpenDrawer(true) }}
                onClose={() => setOpenDrawer(false)}
                classes={{ paper: classes.drawer }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
            >
                <List disablePadding>
                    {routes.map(route => (
                        <ListItem
                            key={`${route}${route.activeIndex}`}
                            button
                            divider
                            component={Link}
                            to={route.link}
                            onClick={() => {
                                setOpenDrawer(false); setTabIndex(route.activeIndex)
                            }}
                            selected={tabIndex === route.activeIndex}
                        >
                            <ListItemText
                                className={classes.drawerItem}
                                disableTypography>
                                {route.name}
                            </ListItemText>
                        </ListItem>
                    ))}
                    <ListItem
                        key={'estimates5'}
                        className={classes.drawerItemEstimate}
                        button
                        divider
                        component={Link}
                        to='/estimates'
                        onClick={() => { setOpenDrawer(false); setTabIndex(5) }}
                        selected={tabIndex === 5}
                    >
                        <ListItemText
                            className={classes.drawerItem}
                            disableTypography>
                            Free Estimates
                        </ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple
                className={classes.drawerIconContainer}>
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </>
    )

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
                    {matches ? drawer : tabs}
                </Toolbar>
            </AppBar>
        </>
    )
}
