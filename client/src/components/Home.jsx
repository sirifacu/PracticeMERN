import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddUser from './AddUser'
import { Grid, List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    topGrid: {
        marginTop: '15px'
    },
    noStyle: {
        textDecoration: 'none',
        color: 'black',
        fontFamily: 'helvetica'
    }
  }));

export default function Home() {
    const [names, setNames] = useState([]);
    const classes = useStyles();

    const listAll = () => {
        axios.get('/users/list')
        .then(res => setNames(res.data))
    }

    useEffect(listAll, [])

    const deleteUser = (id) => {
        axios.delete(`/users/delete/${id}`)
        .then(listAll)
    }

    return (
        <>
        <Grid container justify="space-between" className={classes.topGrid}>
            <Grid item xs={6} >
                <List className={classes.root}>
                    {names.map(name => (
                            <ListItem key={name._id}>
                                <DeleteIcon onClick={() => deleteUser(name._id)} style={{cursor: 'pointer'}} />
                                <Link to={`/${name.name}`} className={classes.noStyle} > - {name.name}</Link>
                            </ListItem>
                        )
                    )}
                </List>
            </Grid>
            <Grid item xs={6}>
                <AddUser listAll={listAll} />
            </Grid>
        </Grid>
        </>
    )
}
