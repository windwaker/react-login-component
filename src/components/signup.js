import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

const Signup = () => {

    const paperStyle = { padding: '20px 20px', height: '73vh', width: 280, margin: '0 auto' };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: '#1bbd7e' };

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}> <AddCircleOutlineOutlinedIcon /> </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption'>Create an account</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label="Name" required/>
                    <TextField fullWidth label="Email" required/>
                    <TextField fullWidth label="Password" type='password' required/>
                    <TextField fullWidth label="Confirm Password" type='password' required style={{ margin: '0px 0px 15px 0px' }} />
                    <Button type="submit" variant='contained' color='primary'>Sign Up</Button>
                </form>
            </Paper>
        </Grid>
    )

}

export default Signup;