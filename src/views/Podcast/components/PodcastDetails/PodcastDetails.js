import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
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

const PodcastDetails = props => {
  const { className, ...rest } = props;

  const [values, setValues] = useState({
    subject: '',
    time: '',
    link: ''
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Card {...rest} className={clsx({}, className)}>
      <form autoComplete="off" noValidate>
        <CardHeader subheader="Fomulário para adição e edição de Podcast" title="Podcast" />
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
                value={values.subject}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the Time"
                label="Time"
                margin="dense"
                name="time"
                onChange={handleChange}
                required
                value={values.title}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the link"
                label="Link"
                margin="dense"
                name="link"
                required
                onChange={handleChange}
                value={values.link}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" variant="contained">
            Save Podcast
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

PodcastDetails.propTypes = {
  className: PropTypes.string
};

export default PodcastDetails;
