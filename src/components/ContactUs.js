import React, { useState } from 'react'
import { Grid, Typography, Icon, Button, TextField } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import SendIcon from '@material-ui/icons/Send'

import background from '../assets/background.jpg'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles(theme => ({

    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '50em',
        [theme.breakpoints.down('sm')]: {
            height:'40em'
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
    estimateButton: {
        ...theme.typography.estimates,
        borderRadius: 50,
        height: 50,
        width: 201,
        fontSize: '1.5rem',
        backgroundColor: theme.palette.common.pink,
        marginRight: '5em',
        marginLeft: '2em',
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
        },
        [theme.breakpoints.down('sm')]: {
            margin: 0,
            fontSize:'1em',
            height:40,
            width:201
        }

    },
    message: {
        border: `2px solid ${theme.palette.common.purple}`,
        marginTop: '5em',
        borderRadius: 5,
        [theme.breakpoints.down('sm')]:{
            marginTop:'3em'
        }
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 20,
        height: 40,
        width: 215,
        fontSize: '1em',
        backgroundColor: theme.palette.common.pink,
        '$:hover': {
            backgroundColor: theme.palette.secondary.light
        }


    },
}))

export default function ContactUs({ setTabIndex }) {
    const theme = useTheme();
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const matches = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Grid container direction='row'>
            <Grid item container direction='column' lg={4} xl={3} alignItems='center' justify='center'
                style={{ height:'100vh', marginTop: matches ? '2em' : 0, marginBottom: matches ? '2em' : 0 }} >
                <Grid item >
                    <Typography variant='h4' style={{ lineHeight: '1em' }}>
                        Contact Us
                    </Typography>
                    <Typography variant='body1' style={{ color: theme.palette.common.purple, textAlign: 'center' }}>
                        We are waiting.
                    </Typography>
                </Grid>
                <Grid item style={{ marginTop: '2em' }}>

                    <Typography variant='body1' style={{ color: theme.palette.common.purple, fontSize: '1em' }}>
                        <PhoneIcon aria-label='phone' style={{ verticalAlign: 'bottom' }} /> 555 555 555 555
                    </Typography>
                </Grid>
                <Grid item style={{ marginBottom: '2em' }}>

                    <Typography variant='body1' style={{ color: theme.palette.common.purple, fontSize: '1em' }}>
                        <EmailIcon aria-label='envelope' style={{ verticalAlign: 'bottom' }} /> kash@gmail.com
                    </Typography>
                </Grid>
                <Grid item container direction='column' style={{ maxWidth: '20em' }}>
                    <Grid item>
                        <TextField fullWidth label='Name' id='name' value={name} onChange={e => setName(e.target.value)} />
                    </Grid>
                    <Grid item>
                        <TextField fullWidth label='Phone' id='phone' value={email} onChange={e => setEmail(e.target.value)} />
                    </Grid>
                    <Grid item>
                        <TextField fullWidth label='Email' id='email' value={phone} onChange={e => setPhone(e.target.value)} />
                    </Grid>
                    <Grid item>
                        <TextField
                            fullWidth
                            className={classes.message}
                            InputProps={{ disableUnderline: true }}
                            multiline
                            rows={matches? 5:10}
                            label='Message'
                            id='message'
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                    </Grid>
                    <Grid item style={{ marginTop: '2em',textAlign:'center' }}>
                        <Button
                            className={classes.sendButton}
                            variant="contained"
                            color="primary"

                            endIcon={<SendIcon />}
                        >
                            Send Message
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            {/** Right Image*/}
            <Grid item container className={classes.background} lg={8} xl={9} alignItems='center' direction={matches?'column':'row'}>
                <Grid item>
                    <Grid container direction='column'>
                        <Grid item style={{ marginLeft: matches ? 0 : '2em', textAlign: matches ? 'center' : 'inherit' }} >
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
        </Grid>
    )
}
