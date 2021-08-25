import { CircularProgress, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  /* Component custom CSS here */
  loader: {
    /* Loader spinner element custom css here */
    display: 'flex',
    justifyContent: 'center',
  },
});

const Loader = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='sm'>
      <Box m={3} className={classes.loader}>
          <CircularProgress />
      </Box>
    </Container>
  )
}

export default Loader
