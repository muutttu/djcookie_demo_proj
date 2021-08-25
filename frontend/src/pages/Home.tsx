import { Container, Box, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  /* Page custom CSS here */
  homepage: {
    /* Home page custom css here */
  },
  title: {

  },
});


const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.homepage}>
      <Container maxWidth='sm'>
        <Box m={2} className={classes.title}>
          <Typography variant='h3' component='h2' align='center'>
            Home page
          </Typography>
        </Box>
      </Container>
      <Container maxWidth='md'>
        <Paper elevation={0}>
          <Typography variant='h5' align='center' color='textSecondary' paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.
          </Typography>
        </Paper>
      </Container>
    </div >
  )
}

export default Home
