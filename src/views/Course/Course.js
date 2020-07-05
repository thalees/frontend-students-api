import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { CourseDetails, CourseList } from './components';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Course = props => {
  const classes = useStyles();
  const [data, setData] = useState({
    id: '',
    name: '',
    platform: '',
    price: ''
  });
  const [updateButton, setUpdateButton] = useState(false);

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={12} md={6} xl={8} xs={12}>
          <CourseDetails courseToBeUpdated={data} updateButton={updateButton} />
        </Grid>
        <Grid item lg={12} md={6} xl={8} xs={12}>
          <CourseList setData={setData} setUpdateButton={setUpdateButton}/>
        </Grid>
      </Grid>
    </div>
  );
};

Course.propTypes = {
  history: PropTypes.object
};

export default withRouter(Course);
