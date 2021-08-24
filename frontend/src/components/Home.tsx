import { Grid, Paper } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  root: {

  },
  maincontainer: {
    justifyContent: 'center',
  },
  pageheader: {

  }
}));


const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.maincontainer}>
        <Grid item className={classes.pageheader}>
          <h2>Home page</h2>
        </Grid>
        <Grid item>
          <Paper elevation={0}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
