import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { BookDetails, BookList } from './components';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Book = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={12} md={6} xl={8} xs={12}>
          <BookDetails />
        </Grid>
        <Grid item lg={12} md={6} xl={8} xs={12}>
          <BookList />
        </Grid>
      </Grid>
    </div>
  );
};

Book.propTypes = {
  history: PropTypes.object
};

export default withRouter(Book);
