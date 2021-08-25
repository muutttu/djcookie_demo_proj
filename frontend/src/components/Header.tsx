import { makeStyles } from '@material-ui/core';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  /* Page custom CSS here */
  header: {
    /* Header element custom css here */
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <header>
      <Box m={1} className={classes.header}>
        <Typography variant='h2' component='h1' align='center' color='textSecondary'>
          Sivuston otsikko
        </Typography>
      </Box>
    </header>
  )
}

export default Header
