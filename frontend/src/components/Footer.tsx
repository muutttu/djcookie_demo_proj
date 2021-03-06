import { makeStyles, createStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const useStyles = makeStyles(() => createStyles({
  root: {

  },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer>
      <div className={classes.root}>
        <BottomNavigation className={classes.stickToBottom}>
          <p>┬ęCopyright 2050 by nobody. All rights reversed.</p>
        </BottomNavigation>
      </div>
    </footer>
  )
}

export default Footer
