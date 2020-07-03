import React, { useState } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/styles';
import { red } from '@material-ui/core/colors';

import ArticleService from '../../../../services/ArticleService';

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

const ArticleList = props => {
  const [articles, setArticles] = useState([{}]);

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
      <CardHeader title="Article List" />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Article Ref</TableCell>
                  <TableCell>Subject</TableCell>
                  <TableCell>Link</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {articles.map((article, index) => (
                  <TableRow hover key={article.id}>
                    <TableCell>{index}</TableCell>
                    <TableCell>{article.subject}</TableCell>
                    <TableCell>{article.link}</TableCell>
                    <TableCell>
                      <div>
                        <ColorButton
                          variant="contained"
                          startIcon={<DeleteIcon />}
                          onClick={event => {
                            const service = new ArticleService();
                            setArticles(
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

ArticleList.propTypes = {
  className: PropTypes.string
};

export default ArticleList;
