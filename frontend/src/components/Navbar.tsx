import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Link,
  IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => createStyles({
  root: {
    display: 'flex',
  },
  menuButton: {

  },
  logotitle: {
  },
  logolink: {
    color: 'inherit',
  },
  navleft: {
    flexGrow: 1,
    flexWrap: 'nowrap',
    color: 'inherit',
  },
  navcenter: {
    flexGrow: 1,
    color: 'inherit',
  },
  navright: {
    color: 'inherit',
  },
  navlink: {
    color: 'inherit',
  }
}));

const Navbar = () => {
  const classes = useStyles();
  //const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    <nav>
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
          <Box className={classes.navleft}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' className={classes.logotitle}>
              <Link className={classes.logolink} component={RouterLink} to='/'>
                Logo
              </Link>
            </Typography>
            </Box>
            <Box className={classes.navcenter}>
              <Link className={classes.navlink} component={RouterLink} to='/users'>
                Alasivu1
              </Link>
            </Box>
            <Box className={classes.navright}>
              <Button color='inherit'>Rekisteröidy</Button>
              <Button color='inherit'>Kirjaudu</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    </nav>
  )
}

export default Navbar
