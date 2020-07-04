import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { PodcastDetails } from './components';
import { PodcastList } from "../Podcast/components";
import { makeStyles } from '@material-ui/styles';
import {BookDetails, BookList} from "../Book/components";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Podcast = props => {
  const classes = useStyles();
  const [data, setData] = useState({
    id: '',
    subject: '',
    time: '',
    link: ''
  });

  const [updateButton, setUpdateButton] = useState(false);

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={12} md={6} xl={8} xs={12}>
          <PodcastDetails podcastToBeUpdated={data} updateButton={updateButton}/>
        </Grid>
        <Grid item lg={12} md={6} xl={8} xs={12}>
          <PodcastList setData={setData} setUpdateButton={setUpdateButton}/>
        </Grid>
      </Grid>
    </div>
  );
};

Podcast.propTypes = {
  history: PropTypes.object
};

export default withRouter(Podcast);
