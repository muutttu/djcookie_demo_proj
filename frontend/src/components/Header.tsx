import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
  root: {

  },
  headercontainer: {
    justifyContent: 'center',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header>
      <div className={classes.root}>
        <Grid container className={classes.headercontainer}>
          <Grid item>
            <h1>Otsikko</h1>
          </Grid>
        </Grid>
      </div>
    </header>
  )
}

export default Header
