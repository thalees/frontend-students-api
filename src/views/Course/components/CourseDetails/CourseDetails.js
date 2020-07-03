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

const CourseDetails = props => {
  const { className, ...rest } = props;

  const [values, setValues] = useState({
    subject: '',
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
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the subject"
                label="Name"
                margin="dense"
                name="name"
                onChange={handleChange}
                required
                value={values.subject}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Platform"
                margin="dense"
                name="platform"
                required
                onChange={handleChange}
                value={values.link}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Price"
                margin="dense"
                name="price"
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
            Save Course
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

CourseDetails.propTypes = {
  className: PropTypes.string
};

export default CourseDetails;
