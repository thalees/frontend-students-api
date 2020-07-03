import React, { useState } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/styles';
import { red } from '@material-ui/core/colors';

import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700]
    }
  }
}))(Button);

const PodcastList = props => {
  const [podcasts, setPodcasts] = useState([{}]);

  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title="Podcast List" />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Podcast Ref</TableCell>
                  <TableCell>Subject</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>Link</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {podcasts.map((podcast, index) => (
                  <TableRow hover key={podcasts.id}>
                    <TableCell>{index}</TableCell>
                    <TableCell>{podcasts.subject}</TableCell>
                    <TableCell>{podcasts.time}</TableCell>
                    <TableCell>{podcasts.link}</TableCell>
                    <TableCell>
                      <div>
                        <ColorButton
                          variant="contained"
                          startIcon={<DeleteIcon />}
                        >
                          Delete
                        </ColorButton>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
    </Card>
  );
};

PodcastList.propTypes = {
  className: PropTypes.string
};

export default PodcastList;
