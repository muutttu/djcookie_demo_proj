import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => createStyles({
  root: {

  },
  maincontainer: {
    justifyContent: 'center',
  },
  pageheader: {

  },
  table: {

  },
  tabletitle: {

  },
}));

const Users = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [usersLoaded, setUsersLoaded] = useState(false);
  // By default, TypeScript defines empty arrays as never[], thus a fix below:
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      //console.log("This will be logged on component mount");

      setIsLoading(true);
      setIsError(false);
      const token = 'c94d7e34f4cd8ef95291f6b0cd4cbf12397d6115'

      try {
        //const userdata = await axios('https://jsonplaceholder.typicode.com/users');
        const userdata = await axios.get('http://localhost:8000/api/users', {
          // https://github.com/agconti/cookiecutter-django-rest/blob/master/%7B%7Bcookiecutter.github_repository_name%7D%7D/docs/api/authentication.md
          headers: {
            Authorization: "Token " + token,
          }
        });
        //console.log(userdata.data);
        setUsers(userdata.data);
        setIsLoading(false);

      } catch (error) {
        // Handle Error Here
        console.error(error);
        alert("Virhe datan noutamisessa :( \n \n" + error)
        setIsError(true);
      }

      setIsLoading(false);
      setUsersLoaded(true);
    };

    fetchData();

    return () => {
      //console.log("This will be logged on component unmount");
    }
  }, []);

  return (
    <div className={classes.root}>
      <Grid container className={classes.maincontainer}>
        <Grid item className={classes.pageheader}>
          <h2>Aktiiviset käyttäjät</h2>
          {isError && <div>Jotain meni pieleen...</div>}
        </Grid>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant='h6' className={classes.tabletitle}>
                    Nimi
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant='h6' className={classes.tabletitle}>
                    URL
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.name}>
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell align="right">{user.url}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  )
}

export default Users
