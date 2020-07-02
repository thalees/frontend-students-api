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

const BookDetails = props => {
  const { className, ...rest } = props;

  const [values, setValues] = useState({
    subject: '',
    title: '',
    author: '',
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
                label="Title"
                margin="dense"
                name="title"
                onChange={handleChange}
                required
                value={values.title}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Author"
                margin="dense"
                name="author"
                onChange={handleChange}
                required
                value={values.author}
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
                value={values.link}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" variant="contained">
            Save book
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

BookDetails.propTypes = {
  className: PropTypes.string
};

export default BookDetails;
