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
import BookService from '../../../../services/BookService';

const BookDetails = ({ className, bookToBeUpdated, updateButton }) => {
  const [bookValues, setBookValues] = useState({
    id: '',
    subject: '',
    title: '',
    author: '',
    link: ''
  });
  const service = new BookService();

  useEffect(() => {
    setBookValues(bookToBeUpdated);
  }, [bookToBeUpdated]);

  const handleChange = event => {
    setBookValues({
      ...bookValues,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Card className={clsx({}, className)}>
      <form autoComplete="off" noValidate>
        <CardHeader subheader="The information can be edited" title="Book" />
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
                value={bookValues.subject}
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
                value={bookValues.title}
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
                value={bookValues.author}
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
                value={bookValues.link}
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
            onClick={() => service.post(bookValues)}>
            Save book
          </Button>

          <Button
            color="primary"
            variant="contained"
            disabled={!updateButton}
            onClick={() => service.put(bookValues)}>
            Update book
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default BookDetails;
