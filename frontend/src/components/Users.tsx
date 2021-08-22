import { Grid } from '@material-ui/core';
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

const Users = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.maincontainer}>
        <Grid item className={classes.pageheader}>
          <h2>Aktiiviset käyttäjät</h2>
        </Grid>
        <Grid item>
          
        </Grid>
      </Grid>
    </div>
  )
}

export default Users
