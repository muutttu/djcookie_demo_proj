import { makeStyles } from '@material-ui/core';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  /* Page custom CSS here */
  headerRoot: {
    /* Header root element custom css here */
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <header>
      <Box display='flex' justifyContent='center' m={1} className={classes.headerRoot}>
        <Typography variant='h3' component='h1' color='textSecondary'>
          Sivuston otsikko
        </Typography>
      </Box>
    </header>
  )
}

export default Header
