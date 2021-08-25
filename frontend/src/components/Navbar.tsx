import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Modal,
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
  },
  modal: {
    position: 'absolute',
    top: '25%',
    left: '25%',
    backgroundColor: '#fafafa',
    border: '2px solid #000',
  }
});

const Navbar = () => {
  const classes = useStyles();
  //const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
  const [value, setValue] = React.useState(0);
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const [open, setOpen] = React.useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const modalBody = (
    <div className={classes.modal}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );


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
            <Tabs centered value={value} onChange={handleTabChange} aria-label='simple tabs' className={classes.navLinks}>
              <Tab label='Koti' component={RouterLink} to='/' {...tabProps(0)} />
              <Tab label='Käyttäjät' component={RouterLink} to='/users' {...tabProps(1)} />
              <Tab label='Alasivu 2' disabled component={RouterLink} to='#' {...tabProps(2)} />
            </Tabs>
            <ButtonGroup aria-label='btn group'>
              <Button color='inherit'>Rekisteröidy</Button>
              <Button color='inherit' onClick={handleModalOpen}>Kirjaudu</Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </Box>
      <Modal open={open} onClose={handleModalClose}>
        {modalBody}
      </Modal>
    </nav>
  )
}

export default Navbar
