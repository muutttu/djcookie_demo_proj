import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
  root: {
    flexGrow: 1,
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <main>
      <div className={classes.root}>
        <Container>
          <h2>Main section</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.</p>
        </Container>
      </div>
    </main>
  )
}

export default Main
