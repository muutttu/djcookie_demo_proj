import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Switch, Route } from "react-router-dom";

import Home from '../components/Home'
import Users from '../components/Users';
import NotFound404 from '../common/NotFound404';
import { Grid, Container } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
  root: {

  },
  maincontainer: {
    justifyContent: 'center',
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <main>
      <div className={classes.root}>
        <Grid container>
        <Container className={classes.maincontainer}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="*">
              <NotFound404 />
            </Route>
          </Switch>
        </Container>
        </Grid>
      </div>
    </main>
  )
}

export default Main
