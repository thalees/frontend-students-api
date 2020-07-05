import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles, withStyles } from '@material-ui/styles';
import { red } from '@material-ui/core/colors';

import PodcastService from '../../../../services/PodcastService';

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

const PodcastList = ({ className, setData, setUpdateButton }) => {
  const [podcasts, setPodcasts] = useState([]);

  const service = new PodcastService();

  const getPodcastList = async () => {
    const response = await service.get();
    setPodcasts(response.data);
  };

  const deleteItem = item => {
    const items = podcasts;
    items.splice(item, 1);
    setPodcasts(items);
  };

  useEffect(() => {
    getPodcastList();
  }, []);

  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
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
                  <TableRow
                    hover
                    key={podcast.id}
                    id={podcast.id}
                    onClick={event => {
                      const cell = event.currentTarget.childNodes;
                      setData({
                        id: event.currentTarget.getAttribute('id'),
                        subject: cell[1].textContent,
                        time: cell[2].textContent,
                        link: cell[3].textContent
                      });
                      setUpdateButton(true);
                    }}>
                    <TableCell>{index}</TableCell>
                    <TableCell>{podcast.subject}</TableCell>
                    <TableCell>{podcast.time}</TableCell>
                    <TableCell>{podcast.link}</TableCell>
                    <TableCell>
                      <div>
                        <ColorButton
                          variant="contained"
                          id={podcast.id}
                          startIcon={<DeleteIcon />}
                          onClick={event => {
                            service.delete(
                              event.currentTarget.getAttribute('id')
                            );
                            deleteItem(
                              event.currentTarget.childNodes[0].textContent
                            );
                          }}>
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

export default PodcastList;
