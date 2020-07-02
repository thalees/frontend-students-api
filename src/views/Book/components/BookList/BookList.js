import React, { useState } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/styles';
import { red } from '@material-ui/core/colors';

import BookService from '../../../../services/BookService';

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

const BookList = props => {
  const [books, setBooks] = useState([{}]);

  // useEffect(() => {
  //   function handleStatusChange(data) {
  //     setBooks(data);
  //   }

  //   const service = new BookService();
  //   service.get('f58160c6-4e88-460d-8448-bfba8aa6f4b0', handleStatusChange);
  // }, [setBooks]);

  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title="Book List" />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Book Ref</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Subject</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell>Link</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {books.map((book, index) => (
                  <TableRow hover key={book.id}>
                    <TableCell>{index}</TableCell>
                    <TableCell>{book.title}</TableCell>
                    <TableCell>{book.subject}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>{book.link}</TableCell>
                    <TableCell>
                      <div>
                        <ColorButton
                          variant="contained"
                          startIcon={<DeleteIcon />}
                          onClick={event => {
                            const service = new BookService();
                            setBooks(
                              service.get(
                                'f58160c6-4e88-460d-8448-bfba8aa6f4b0'
                              )
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

BookList.propTypes = {
  className: PropTypes.string
};

export default BookList;
