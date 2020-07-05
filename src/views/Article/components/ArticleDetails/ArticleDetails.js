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
import ArticleService from '../../../../services/ArticleService';

const ArticleDetails = ({ className, articleToBeUpdated, updateButton }) => {
  const [articleValues, setArticleValues] = useState({
    id: '',
    subject: '',
    link: ''
  });
  const service = new ArticleService();

  useEffect(() => {
    setArticleValues(articleToBeUpdated);
  }, [articleToBeUpdated]);

  const handleChange = event => {
    setArticleValues({
      ...articleValues,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Card className={clsx({}, className)}>
      <form autoComplete="off" noValidate>
        <CardHeader subheader="The information can be edited" title="Article" />
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
                value={articleValues.subject}
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
                value={articleValues.link}
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
            onClick={() => service.post(articleValues)}>
            Save article
          </Button>

          <Button
            color="primary"
            variant="contained"
            disabled={!updateButton}
            onClick={() => service.put(articleValues)}>
            Update article
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default ArticleDetails;
