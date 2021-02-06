import React, {useState} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  error: {
    color: 'red',
    fontFamily: 'helvetica',
    fontSize: '12px'
  },
  topBut: {
    marginTop: '8px'
  }
}));

export default function AddUser({listAll}) {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
      e.preventDefault()
      if(!name.length){
          setError('You have to write a name.')
      } else {
          setError('')
          axios.post('/users/add', {name})
          .then(res => {
            res.data.message ? 
            setError(res.data.message) :
            setName('')})
          .then(listAll)
      }
  }

  return (
    <>
    <form className={classes.root} onSubmit={e => handleSubmit(e)}>
    <Grid container direction="column" justify="space-evenly" alignItems="center">
        <Grid item>
            <TextField
            id="name"
            label="Name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value) }
            variant="outlined"
            color="primary"
            />
        </Grid>
        <span className={classes.error}>{error}</span>
        <Grid item>
            <Button className={classes.topBut} type="submit" variant="contained" color="primary">
                Add
            </Button>
        </Grid>
    </Grid>
    </form>
    </>
  );
}
