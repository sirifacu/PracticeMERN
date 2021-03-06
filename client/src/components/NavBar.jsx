import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'white'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton component={Link} to="/" edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeIcon style={{textDecoration: 'none', color: 'white'}} />
          </IconButton>
          <Typography component={Link} to="/" variant="h6" className={classes.title}>
            Job Interview
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
