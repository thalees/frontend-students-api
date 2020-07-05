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
import CourseService from '../../../../services/CourseService';

const CourseDetails = ({ className, courseToBeUpdated, updateButton }) => {
  const [courseValues, setCourseValues] = useState({
    id: '',
    name: '',
    platform: '',
    price:''
  });
  const service = new CourseService();

  useEffect(() => {
    setCourseValues(courseToBeUpdated);
  }, [courseToBeUpdated]);

  const handleChange = event => {
    setCourseValues({
      ...courseValues,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Card className={clsx({}, className)}>
      <form autoComplete="off" noValidate>
        <CardHeader subheader="The information can be edited" title="Course" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the name"
                label="Name"
                margin="dense"
                name="name"
                onChange={handleChange}
                required
                value={courseValues.name}
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
                value={courseValues.platform}
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
                value={courseValues.price}
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
            onClick={() => service.post(courseValues)}>
            Save course
          </Button>

          <Button
            color="primary"
            variant="contained"
            disabled={!updateButton}
            onClick={() => service.put(courseValues)}>
            Update course
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default CourseDetails;
