import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';

import PodcastService from '../../../../services/PodcastService';

const PodcastDetails = ({ className, podcastToBeUpdated, updateButton }) => {
  const [podcastValues, setPodcastValues] = useState({
    id: '',
    subject: '',
    time: '',
    link: ''
  });

  const service = new PodcastService();

  useEffect(() => {
    setPodcastValues(podcastToBeUpdated);
  }, [podcastToBeUpdated]);

  const handleChange = event => {
    setPodcastValues({
      ...podcastValues,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Card className={clsx({}, className)}>
      <form autoComplete="off" noValidate>
        <CardHeader subheader="The information can be edited" title="Podcast" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the subject"
                label="Subject"
                margin="dense"
                name="subject"
                onChange={handleChange}
                required
                value={podcastValues.subject}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Time"
                margin="dense"
                name="time"
                onChange={handleChange}
                required
                value={podcastValues.time}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Link"
                margin="dense"
                name="link"
                required
                onChange={handleChange}
                value={podcastValues.link}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            disabled={updateButton}
            onClick={() => service.post(podcastValues)}>
            Save podcast
          </Button>

          <Button
            color="primary"
            variant="contained"
            disabled={!updateButton}
            onClick={() => service.put(podcastValues)}>
            Update podcast
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default PodcastDetails;
