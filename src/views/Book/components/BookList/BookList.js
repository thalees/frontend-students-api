import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
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

const BookList = ({ className, setData, setUpdateButton }) => {
  const [books, setBooks] = useState([]);

  const service = new BookService();

  const getBookList = async () => {
    const response = await service.get();
    setBooks(response.data);
  };

  const deleteItem = item => {
    const items = books;
    items.splice(item, 1);
    setBooks(items);
  };

  useEffect(() => {
    getBookList();
  }, []);

  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
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
                  <TableRow
                    hover
                    key={book.id}
                    id={book.id}
                    onClick={event => {
                      const cell = event.currentTarget.childNodes;
                      setData({
                        id: event.currentTarget.getAttribute('id'),
                        title: cell[1].textContent,
                        subject: cell[2].textContent,
                        author: cell[3].textContent,
                        link: cell[4].textContent
                      });
                      setUpdateButton(true);
                    }}>
                    <TableCell>{index}</TableCell>
                    <TableCell>{book.title}</TableCell>
                    <TableCell>{book.subject}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>{book.link}</TableCell>
                    <TableCell>
                      <div>
                        <ColorButton
                          variant="contained"
                          id={book.id}
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

export default BookList;
