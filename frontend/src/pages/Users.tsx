import { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Loader from '../components/Loader';
import axios from 'axios';

const useStyles = makeStyles({
  /* Page custom CSS here */
  userspage: {

  },
  title: {

  },
  tableContainer: {
    boxShadow: '5px 5px 10px black',
  }
});

const Users = () => {
  const classes = useStyles();
  // By default, TypeScript defines empty arrays as never[], thus a fix below:
  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
        //Custom sleep event to see loader-spinner
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);

      } catch (error) {
        // Handle Error Here
        console.error(error);
        alert("Virhe datan noutamisessa :( \n \n" + error)
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();

    return () => {
      //console.log("This will be logged on component unmount");
    }
  }, []);

  return (
    <div className={classes.userspage}>
      <Container maxWidth='sm'>
        <Box m={2} className={classes.title}>
          <Typography variant='h4' component='h2' align='center'>
            Aktiiviset käyttäjät
            {isError && <div>Jotain meni pieleen...</div>}
          </Typography>
        </Box>
      </Container>
      <Container maxWidth='md'>
        {isLoading ? <Loader /> :
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align='center'>
                    <Typography variant='h6' component='h3'>
                      Nimi
                    </Typography>
                  </TableCell>
                  <TableCell align='center'>
                    <Typography variant='h6' component='h3'>
                      URL
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell align='center' component="th" scope="row">
                      {user.name}
                    </TableCell>
                    <TableCell align='center'>{user.url}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        }
      </Container>
    </div>
  )
}

export default Users
