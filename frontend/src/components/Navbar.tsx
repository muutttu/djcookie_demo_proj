import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tabs,
  Tab,
  ButtonGroup,
  Button,
  IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function tabProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  /* Page custom CSS here */
  navRoot: {
    /* Navigation bar root element custom css here */
    display: 'flex',
  },
  navLinks: {
    flexGrow: 1,
  }
});

const Navbar = () => {
  const classes = useStyles();
  //const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <nav>
      <Box className={classes.navRoot}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton edge='start' color='inherit' aria-label='menu'>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6'>
              Logo
            </Typography>
            <Tabs centered value={value} onChange={handleChange} aria-label='simple tabs' className={classes.navLinks}>
              <Tab label='Koti' component={RouterLink} to='/' {...tabProps(0)} />
              <Tab label='Käyttäjät' component={RouterLink} to='/users' {...tabProps(1)} />
              <Tab label='Alasivu 2' disabled component={RouterLink} to='#' {...tabProps(2)} />
            </Tabs>
            <ButtonGroup aria-label='btn group'>
              <Button color='inherit'>Rekisteröidy</Button>
              <Button color='inherit'>Kirjaudu</Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  )
}

export default Navbar
