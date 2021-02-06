import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'black'
  },
  marginTop: {
      marginTop: '10px'
  }
}));

export default function Page({match, history}) {
    const classes = useStyles()
    const [name, setName] = useState('')
    useEffect(() => {
        axios.get('/users/list')
        .then(res => {
            res.data.forEach(item => {
                const newName = item.name
                item.name.toLowerCase() === match.params.name.toLowerCase() &&
                setName(newName) 
            })
        })
        
    }, [match.params.name])

    return (
        <Fragment>
        {
            name.length ? (
                <Grid item container className={classes.marginTop} direction="column" alignItems="center" justify="center">
                    <Grid item>
                        <Typography variant="h6" className={classes.title}>
                            This is {name} page.
                        </Typography>
                    </Grid>
                    <Grid item className={classes.marginTop}>
                        <Button onClick={() => history.push('/')} className={classes.topBut} variant="contained" color="primary">
                            Back
                        </Button>
                    </Grid>
                </Grid>)
                : (
                <Grid item container className={classes.marginTop} direction="column" alignItems="center" justify="center">
                    <Grid item>
                        <Typography variant="h6" className={classes.title}>
                            The user does not exist.
                        </Typography>
                    </Grid>
                    <Grid item className={classes.marginTop}>
                        <Button onClick={() => history.push('/')} className={classes.topBut} variant="contained" color="primary">
                            Back
                        </Button>
                    </Grid>
                </Grid>)
        }
        </Fragment>
    )
    
}
