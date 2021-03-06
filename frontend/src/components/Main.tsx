import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Users from '../pages/Users';
import NotFound404 from '../common/NotFound404';

import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  /* Page custom CSS here */
  page: {
    /* Main page element custom css here */
  },
});

const Main = () => {
  const classes = useStyles();

  return (
    <main>
      <Container className={classes.page}>
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
    </main>
  )
}

export default Main
