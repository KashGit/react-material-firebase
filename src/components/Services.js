import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';

import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileIcon from '../assets/mobileIcon.svg'
import websitesIcon from '../assets/websiteIcon.svg'

const useStyles = makeStyles(theme => (
    {
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
            marginTop: '10em',
            [theme.breakpoints.down('sm')]: {
                padding: 20,
            }
        },

    }
));

export default function Services({ setTabIndex, setSelectedIndex }) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Grid container direction='column'>
            <Grid item
                style={{
                    textAlign: matchesSM ? 'center' : undefined,
                    marginTop: matchesSM ? '1em' : '2em',
                    marginLeft: matchesSM? undefined: '5em'
                }}

            >
                <Typography variant='h2'>
                    Services
                </Typography>
            </Grid>
            <Grid item>{/* Mobile App */}
                <Grid
                    container
                    direction='row'
                    className={classes.serviceContainer}
                    justify={matchesSM ? 'center' : "flex-end"}
                    style={{ marginTop: matchesSM ? '1em' : '5em' }}
                >
                    <Grid item
                        style={{
                            textAlign: matchesSM ? 'center' : undefined,
                            width: matchesSM ? undefined : '35em',
                        }}
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
                    <Grid item style={{ marginRight: matchesSM ? 0 : '5em', }}>
                        <img
                            style={{ width: matchesSM ? undefined : '20em' }}
                            className={classes.icon} src={mobileIcon} alt='mobile icon' />
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

            <Grid item>{/* Websites */}
                <Grid
                    container
                    direction='row'
                    className={classes.serviceContainer}
                    justify={matchesSM ? 'center' : 'flex-end'}
                    style={{ marginBottom: matchesSM ? '2em' : '5em' }}
                >
                    <Grid item
                        style={{
                            textAlign: matchesSM ? 'center' : undefined,
                            width: matchesSM ? undefined : '35em',
                        }}
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
                    <Grid item style={{ marginRight: matchesSM ? 0 : '5em', }} >
                        <img
                            style={{ width: matchesSM ? undefined : '20em' }}
                            className={classes.icon}
                            src={websitesIcon}
                            alt='website development icon' />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
