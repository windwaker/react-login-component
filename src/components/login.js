// https://www.youtube.com/watch?v=L2RnP5vhbdg&t=0s

import React from 'react';
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';

const Login = ({handleChange}) => {

    const paperStyle = { padding: 20, height: '73vh', width: 280, margin: '0 auto' };
    const avatarStyle = { backgroundColor: '#4ead4e' };
    const btnStyle = { margin: '8px 0' };
    const linkStyle = { margin: '0px 0px 0px 0px' };
    const headerStyle = { margin: 0 };

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}> <LockOutlinedIcon /> </Avatar>
                    <h2 style={headerStyle}>Sign in</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter your username' fullWidth required></TextField>
                <TextField label='Password' placeholder='Enter your password' type='password' fullWidth required></TextField>
                <FormControlLabel control={<Checkbox name='RememberMe' color='primary' />} label="Remember me" />
                <Button type='submit' color='primary' variant='contained' fullWidth style={btnStyle}>Sign In</Button>
                <Typography>
                    <Link href='#' style={linkStyle}>
                        Forgot Password?
                    </Link>
                </Typography>
                <Typography> Do you have an account?
                    <Link href='#' style={linkStyle} onClick={()=>handleChange("event", 1)}>
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;