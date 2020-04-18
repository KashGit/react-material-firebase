import React from 'react'
import { Grid, IconButton, Typography } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

import bulb from '../assets/bulb.svg'
import watch from '../assets/stopwatch.svg'
import cash from '../assets/cash.svg'

const useStyles = makeStyles(theme => (
    {
        heading: {
            maxWidth: '40em'
        },
        arrowContainer: {
            marginTop: '.3em'
        },
        mainContainer: {
            margin: '2em 5em 10em 5em'
        }
    }
))

export default function CustomSoftware({ setTabIndex, setSelectedIndex }) {
    const classes = useStyles();

    return (
        <Grid container direction='column' className={classes.mainContainer}>
            <Grid item container direction='row'>
                <Grid item style={{ marginRight: '1em', marginLeft: '-3.5em' }}>
                    <IconButton aria-label='Back Arrow'
                        className={classes.arrowContainer}
                        component={Link} to='/services'
                        onClick={() => { setTabIndex(1); setSelectedIndex(0) }}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                </Grid>

                <Grid item container direction='column' className={classes.heading}>
                    <Grid item>
                        <Typography variant='h2'>
                            Custom Softwares
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='body1' paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore Amet massa vitae tortor condimentum lacinia quis.
                            Nunc scelerisque viverra mauris in aliquam sem
                        </Typography>
                        <Typography variant='body1' paragraph>
                            Amet massa vitae tortor condimentum lacinia quis. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi.
                            Amet massa vitae tortor condimentum lacinia quis. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi.
                            Amet massa vitae tortor condimentum lacinia quis. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi.
                        </Typography>
                        <Typography variant='body1' paragraph>
                            Libero justo laoreet sit amet. Id diam vel quam elementum pulvinar.
                        </Typography>
                        <Typography variant='body1' paragraph>
                            Aliquet porttitor lacus luctus accumsan. Congue nisi vitae suscipit tellus mauris.
                        </Typography>
                    </Grid>

                </Grid>

                <Grid item>
                    <IconButton
                        aria-label='Forward Arrow'
                        className={classes.arrowContainer}
                        component={Link} to='/mobileapps'
                        onClick={() => { setTabIndex(1); setSelectedIndex(2) }}
                    >
                        <ArrowForwardIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item container direction="row" justify='center' style={{marginTop:'12em', marginBottom:'10em'}}>
                <Grid item container direction="column" md style={{maxWidth:'40em'}} alignItems='center'>
                    <Grid item>
                        <Typography variant='h4'>Save Energy</Typography>
                    </Grid>
                    <Grid item>
                        <img alt='Save Energy' src={bulb}/>
                    </Grid>
                </Grid>
                <Grid item container direction="column"md style={{maxWidth:'40em'}} alignItems='center'>
                    <Grid item>
                        <Typography variant='h4'>Save Time</Typography>
                    </Grid>
                    <Grid item>
                        <img alt='Save Time' src={watch}/>
                    </Grid>
                </Grid>
                <Grid item container direction="column"md style={{maxWidth:'40em'}} alignItems='center'>
                    <Grid item>
                        <Typography variant='h4'>Save Money</Typography>
                    </Grid>
                    <Grid item>
                        <img alt='Save Money' src={cash}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
