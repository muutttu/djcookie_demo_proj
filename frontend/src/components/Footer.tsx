import { makeStyles, createStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const useStyles = makeStyles(() => createStyles({
  root: {
    display: 'flex',
    flexGrow: 1,
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
          <p>©Copyright 2050 by nobody. All rights reversed.</p>
        </BottomNavigation>
      </div>
    </footer>
  )
}

export default Footer
