import React, { useState } from 'react';
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
  const [data, setData] = useState({
    id: '',
    subject: '',
    title: '',
    author: '',
    link: ''
  });
  const [updateButton, setUpdateButton] = useState(false);

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={12} md={6} xl={8} xs={12}>
          <BookDetails bookToBeUpdated={data} updateButton={updateButton} />
        </Grid>
        <Grid item lg={12} md={6} xl={8} xs={12}>
          <BookList setData={setData} setUpdateButton={setUpdateButton} />
        </Grid>
      </Grid>
    </div>
  );
};

Book.propTypes = {
  history: PropTypes.object
};

export default withRouter(Book);
