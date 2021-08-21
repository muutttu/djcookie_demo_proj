import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  gridcontainer: {
    justifyContent: 'center',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header>
      <div className={classes.root}>
        <Grid container className={classes.gridcontainer}>
          <Grid item>
            <h1>Otsikko</h1>
          </Grid>
        </Grid>
      </div>
    </header>
  )
}

export default Header
