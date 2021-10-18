import { Paper, Tabs, Tab, Box, Typography} from '@material-ui/core';
import React, { useState } from 'react';

import Login from '../components/login';
import SignUp from '../components/signup'

const SignInSignUpContainer = () => {

    const paperStyle = {width: 320, margin: '20px auto'};

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function TabPanel(props) {
      const { children, value, index, ...other } = props;
    
      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }

    return (
        <Paper elevation={20} style={paperStyle}>
            <Tabs value={value} 
                indicatorColor='primary' 
                textColor='primary'
                onChange={handleChange}
                aria-label='Sign In or Sign Up'
            >
                <Tab label='Sign In'/>
                <Tab label='Sign Up'/>
            </Tabs>
                <TabPanel value={value} index={0}>
                    <Login handleChange={handleChange}></Login>
                </TabPanel>
            <TabPanel value={value} index={1}>
                <SignUp></SignUp>
            </TabPanel>

        </Paper>
    )

}

export default SignInSignUpContainer;