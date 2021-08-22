import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  root: {

  },
}));

const NotFound404 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      404 - Sivua ei löydy!
    </div>
  )
}

export default NotFound404
