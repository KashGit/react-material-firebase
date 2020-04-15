import React from 'react'
import Lottie from 'react-lottie'
import { makeStyles } from '@material-ui/styles'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Grid, Button, Typography, Card, CardContent } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

import animationData from '../animations/landinganimation/data'
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileIcon from '../assets/mobileIcon.svg'
import websitesIcon from '../assets/websiteIcon.svg'
import revolutionBg from '../assets/repeatingBackground.svg'
import informationBg from '../assets/infoBackground.svg'
import CallToAction from './CallToAction'
import { Link } from 'react-router-dom'




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
            [theme.breakpoints.down('sm')]: {
                marginBottom: '2em'
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
            [theme.breakpoints.down('sm')]: {
                padding: 20
            }
        },
        revolutionBg: {
            backgroundImage: `url(${revolutionBg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            height: '100%',
            width: '100%'
        },
        revolutionCard: {
            position: 'absolute',
            boxShadow: theme.shadows[10],
            borderRadius: 15,
            padding: '8em',
            [theme.breakpoints.down('sm')]: {
                borderRadius: 0,
                padding: '6em 0',
                width: '100%',
            }
        },
        informationBg: {
            backgroundImage: `url(${informationBg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            width: '100%'
        },
    }
));

export default function LandingPage({ setTabIndex, setSelectedIndex }) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

    const defaultOptions = {
        loop: true,
        autoplay: false,
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
                                <Button component={Link} to='/estimates' variant='contained' className={classes.buttonEstimate}>Free Estimates</Button>
                            </Grid>
                            <Grid item>
                                <Button component={Link} to='/revolution'
                                    onClick={() => setTabIndex(2)}
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
                            onClick={() => { setTabIndex(1); setSelectedIndex(1) }}
                            component={Link} to='/customsoftware'
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
                        style={{ textAlign: matchesSM ? 'center' : undefined }}
                    >
                        <Typography variant='h4'>
                            Mobile App Development
                        </Typography>
                        <Typography variant='subtitle1' className={classes.subtitle}>
                            Extend Functionality. Extend Acess. Increase Engagement.
                        </Typography>
                        <Typography variant='subtitle1'>
                            Integrate your web experience or create a standalone app {matchesSM ? null : <br />}
                            with either mobile platform.
                        </Typography>
                        <Button
                            onClick={() => { setTabIndex(1); setSelectedIndex(2) }}
                            component={Link} to='/mobileapps'
                            className={classes.buttonLearnMore}
                            variant='outlined'
                            endIcon={<ArrowForwardIcon />}>Learn More
                        </Button>
                    </Grid>
                    <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
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
                            onClick={() => { setTabIndex(1); setSelectedIndex(3) }}
                            component={Link} to='/websites'
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
            <Grid item>{/* Revolution */}
                <Grid container style={{ height: '50em', marginTop: '8em' }} justify='center' alignItems='center'>
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction='column' style={{ textAlign: 'center' }}>
                                <Grid item>
                                    <Typography variant='h3' gutterBottom>
                                        The Revolution
                                   </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='subtitle1'>
                                        Visionay insights coupled with cutting-edge technology is a reciepe for revolution
                                    </Typography>
                                    <Button
                                        onClick={() => setTabIndex(2)}
                                        component={Link} to='/revolution'
                                        className={classes.heroButtonLearnMore}
                                        variant='outlined'
                                        endIcon={<ArrowForwardIcon />}>Learn More
                                </Button>
                                </Grid>
                            </Grid>

                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBg}></div>
                </Grid>
            </Grid>
            <Grid item> {/* About Us */}
                <Grid container style={{ height: '40em' }} direction='row' alignItems='center' className={classes.informationBg}>
                    <Grid item container
                        style={{ textAlign: matchesXS ? 'center' : 'inherit' }}
                        direction={matchesXS ? 'column' : 'row'}
                    >
                        <Grid item style={{ marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em' }} sm>
                            <Grid container direction='column' style={{ marginBottom: matchesXS ? 10 : 0 }}>
                                <Grid item>
                                    <Typography variant='h4' style={{ color: 'white' }}>
                                        About Us
                                </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='subtitle2'>
                                        Get personal
                            </Typography>
                                </Grid>
                                <Grid item>
                                    <Button
                                        onClick={() => setTabIndex(3)}
                                        component={Link} to='/about'
                                        className={classes.buttonLearnMore} style={{ color: 'white', borderColor: 'white' }}
                                        variant='outlined'
                                        endIcon={<ArrowForwardIcon />}>Learn More
                                </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item style={{ marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em', textAlign: matchesXS ? 'center' : 'right' }} sm>
                            <Grid container direction='column'>
                                <Grid item>
                                    <Typography variant='h4' style={{ color: 'white' }}>
                                        Contact Us
                                </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='subtitle2'>
                                        Say hello!
                            </Typography>
                                </Grid>
                                <Grid item>
                                    <Button
                                        onClick={() => setTabIndex(4)}
                                        component={Link} to='/contact'
                                        className={classes.buttonLearnMore} style={{ color: 'white', borderColor: 'white' }}
                                        variant='outlined'
                                        endIcon={<ArrowForwardIcon />}>
                                        Learn More
                                   </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/* Call to action */}
                <CallToAction setTabIndex={setTabIndex} />
            </Grid>
        </Grid >
    )
}
