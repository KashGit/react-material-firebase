import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Grid, Hidden } from '@material-ui/core';

import footerAdornment from '../assets/Footer Adornment.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.purple,
        width: '100%',
        position: 'relative',
        zIndex: 1302
    },
    adornment: {
        verticalAlign: 'bottom',
        width: '25em',
        [theme.breakpoints.down('xs')]: {
            width: '8em'
        }
    },
    link: {
        fontFamily: 'Arial',
        fontSize: '.75rem',
        color: 'white',
        textDecoration: 'none'
    },
    mainContainer: {
        position: 'absolute'
    },
    gridItem: {
        margin: '2em'
    },
    icon: {
        width: '4em',
        height: '4em',
        [theme.breakpoints.down('xs')]:{
            width:'2em',
            height:'2em'
        },
    },
    socialContainer:{
        position:'absolute',
        marginTop:'-5em',
        right:'1.5em',
        [theme.breakpoints.down('xs')]:{
            marginTop:'-3.5em',
            right:'.6em'
        },
    }
}))

export default function Footer({ tabIndex, setTabIndex, selectedIndex, setSelectedIndex }) {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid container className={classes.mainContainer} justify='center'>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid onClick={() => setTabIndex(0)} item component={Link} to='/' className={classes.link}>
                                Home
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid onClick={() => { setTabIndex(1); setSelectedIndex(0) }} item component={Link} to='/services' className={classes.link}>
                                Services
                        </Grid>
                            <Grid onClick={() => { setTabIndex(1); setSelectedIndex(1) }} item component={Link} to='/customsoftware' className={classes.link}>
                                Custom  Software
                        </Grid>
                            <Grid onClick={() => { setTabIndex(1); setSelectedIndex(2) }} item component={Link} to='/mobileapps' className={classes.link}>
                                Mobile Apps
                        </Grid>
                            <Grid onClick={() => { setTabIndex(1); setSelectedIndex(3) }} item component={Link} to='/websites' className={classes.link}>
                                Websites
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid onClick={() => setTabIndex(2)} item component={Link} to='/revolution' className={classes.link}>
                                Revolution
                        </Grid>
                            <Grid onClick={() => setTabIndex(2)} item component={Link} to='/revolution' className={classes.link}>
                                Vision
                        </Grid>
                            <Grid onClick={() => setTabIndex(2)} item component={Link} to='/revolution' className={classes.link}>
                                Technology
                        </Grid>
                            <Grid onClick={() => setTabIndex(2)} item component={Link} to='/revolution' className={classes.link}>
                                Process
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid onClick={() => setTabIndex(3)} item component={Link} to='/about' className={classes.link}>
                                About Us
                        </Grid>
                            <Grid onClick={() => setTabIndex(3)} item component={Link} to='/about' className={classes.link}>
                                History
                        </Grid>
                            <Grid onClick={() => setTabIndex(3)} item component={Link} to='/about' className={classes.link}>
                                Team
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid onClick={() => setTabIndex(4)} item component={Link} to='/contact' className={classes.link}>
                                Contact
                        </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Hidden>
            <img alt='footer adornment'
                src={footerAdornment}
                className={classes.adornment}
            />
            <Grid container justify='flex-end' spacing={2} 
            className={classes.socialContainer}>
                <Grid
                    item
                    component={'a'}
                    href='https://www.facebook.com'
                    rel='noopener noreferrer'
                    target='_blank'>
                    <img
                        alt='facebook logo'
                        src={facebook}
                        className={classes.icon}
                    />
                </Grid>
                <Grid
                    item
                    component={'a'}
                    href='https://www.instagram.com'
                    rel='noopener noreferrer'
                    target='_blank'>
                    <img
                        alt='instagram logo'
                        src={instagram}
                        className={classes.icon}
                    />
                </Grid>
                <Grid
                    item
                    component={'a'}
                    href='https://www.twitter.com'
                    rel='noopener noreferrer'
                    target='_blank'>
                    <img
                        alt='twitter logo'
                        src={twitter}
                        className={classes.icon}
                    />
                </Grid>
            </Grid>
        </footer>
    )
}
