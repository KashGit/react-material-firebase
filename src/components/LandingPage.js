import React from 'react'
import Lottie from 'react-lottie'
import { makeStyles } from '@material-ui/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Grid, Button, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import animationData from '../animations/landinganimation/data'
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileIcon from '../assets/mobileIcon.svg'
import websitesIcon from  '../assets/websiteIcon.svg'




const useStyles = makeStyles(theme => (
    {
        animation: {
            maxWidth: '50em',
            minWidth: '21em',
            marginTop: '2em',
            marginLeft: '10%',
            [theme.breakpoints.down('sm')]: {
                maxWidth: '25em'
            }
        },
        buttonEstimate: {
            ...theme.typography.estimates,
            backgroundColor: theme.palette.common.pink,
            borderRadius: 50,
            marginRight: 40,
            height: 45,
            '&:hover': {
                backgroundColor: theme.palette.secondary.light,
            },
        },
        buttonContainer: {
            marginTop: '1em'
        },
        heroButtonLearnMore: {
            ...theme.typography.buttonLearnMore,
            fontSize: '.9rem',
            height: 45,
            '&:hover': {
                backgroundColor: theme.palette.primary.light,
                color: 'white'
            },
        },
        heroTextContainer: {
            minWidth: '21.5em',
            marginLeft: '1em',
            [theme.breakpoints.down('xs')]: {
                marginLeft: 0
            }
        },
        buttonLearnMore: {
            ...theme.typography.buttonLearnMore,
            height: 35,
            padding: 5,
            fontSize: '.7rem',
            [theme.breakpoints.down('sm')] : {
                marginBottom:'2em'
            }
        },
        subtitle: {
            marginBottom: '1rem'
        },
        icon: {
            marginLeft: '2em',
            [theme.breakpoints.down('xs')]: {
                marginLeft: 0
            }
        },
        serviceContainer: {
            marginTop: '12em',
            [theme.breakpoints.down('sm')]:{
                padding: 20
            }
        }
    }
));

export default function LandingPage() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <Grid container direction='column'>
            <Grid item>{/* hero */}
                <Grid container justify='flex-end' alignItems='center'>
                    <Grid item sm className={classes.heroTextContainer}>
                        <Typography align='center' variant='h2'>Bringing West Coast Technology<br /> to the Midwest</Typography>
                        <Grid container justify='center' className={classes.buttonContainer}>
                            <Grid item>
                                <Button variant='contained' className={classes.buttonEstimate}>Free Estimates</Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    className={classes.heroButtonLearnMore}
                                    variant='outlined'
                                    endIcon={<ArrowForwardIcon />}>Learn More
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm className={classes.animation}>
                        <Lottie
                            options={defaultOptions}
                            height={"100%"}
                            width={"100%"} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>{/* Custom Software */}
                <Grid
                    container
                    direction='row'
                    className={classes.serviceContainer}
                    justify={matchesSM ? 'center' : undefined}
                >
                    <Grid item
                        style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}
                    >
                        <Typography variant='h4'>
                            Custom Software Development
                        </Typography>
                        <Typography variant='subtitle1' className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant='subtitle1'>
                            Complete digital solutions, from investigate to {" "}
                            <span>celebration</span>.
                        </Typography>
                        <Button
                            className={classes.buttonLearnMore}
                            variant='outlined'
                            endIcon={<ArrowForwardIcon />}>Learn More
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} src={customSoftwareIcon} alt='custom software icon' />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>{/* Mobile App */}
                <Grid
                    container
                    direction='row'
                    className={classes.serviceContainer}
                    justify={matchesSM ? 'center' : "flex-end"}
                >
                    <Grid item
                        style={{  textAlign: matchesSM ? 'center' : undefined }}
                    >
                        <Typography variant='h4'>
                            Mobile App Development
                        </Typography>
                        <Typography variant='subtitle1' className={classes.subtitle}>
                            Extend Functionality. Extend Acess. Increase Engagement.
                        </Typography>
                        <Typography variant='subtitle1'>
                            Integrate your web experience or create a standalone app {matchesSM ? null:<br />}
                            with either mobile platform.
                        </Typography>
                        <Button
                            className={classes.buttonLearnMore}
                            variant='outlined'
                            endIcon={<ArrowForwardIcon />}>Learn More
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : '5em'}}>
                        <img className={classes.icon} src={mobileIcon} alt='mobile icon' />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>{/* Websites */}
                <Grid
                    container
                    direction='row'
                    className={classes.serviceContainer}
                    justify={matchesSM ? 'center' : undefined}
                >
                    <Grid item
                        style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}
                    >
                        <Typography variant='h4'>
                            Website Development
                        </Typography>
                        <Typography variant='subtitle1' className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant='subtitle1'>
                           Optimized for Search Engines, built for speed.
                        </Typography>
                        <Button
                            className={classes.buttonLearnMore}
                            variant='outlined'
                            endIcon={<ArrowForwardIcon />}>Learn More
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} src={websitesIcon} alt='website development icon' />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
