import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import background from '../assets/background.jpg'
import mobileBackground from '../assets/mobileBackground.jpg'
import { Link } from 'react-router-dom';

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
        background: {
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            height: '50em',
            width: '100%',
            [theme.breakpoints.down('md')]: {
                backgroundImage: `url(${mobileBackground})`,
                height: '30em'
            }
        },
        estimateButton: {
            ...theme.typography.estimates,
            borderRadius: 50,
            height: 80,
            width: 201,
            fontSize: '1.5rem',
            backgroundColor: theme.palette.common.pink,
            marginRight: '5em',
            marginLeft: '2em',
            '&:hover': {
                backgroundColor: theme.palette.secondary.light,
            },
            [theme.breakpoints.down('sm')]: {
                margin: 0
            }

        }
    }
))

export default function CallToAction({setTabIndex}) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Grid container
            className={classes.background}
            justify={matches ? undefined : 'space-between'}
            alignItems='center'
            direction={matches ? 'column' : 'row'}>
            <Grid item>
                <Grid container direction='column'>
                    <Grid item style={{ marginLeft: matches ? 0 : '5em', textAlign: matches ? 'center' : 'inherit' }} >
                        <Typography variant='h2'>
                            Simple Software. <br /> Revolutionary Results.
                   </Typography>
                        <Typography variant='subtitle2'>
                            Take advantage of 21st century.
                   </Typography>
                        <Grid item container justify='center'>
                            <Button 
                            onClick={() => setTabIndex(2)}
                            component={Link} to='/revolution'
                                className={classes.buttonLearnMore}
                                variant='outlined'
                                endIcon={<ArrowForwardIcon />}>
                                Learn More
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button 
                onClick={() => setTabIndex(5)}
                className={classes.estimateButton} component={Link} to='/estimates' >Free Estimates</Button>
            </Grid>
        </Grid>
    )
}
