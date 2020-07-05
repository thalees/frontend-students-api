import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
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

const ArticleList = ({ className, setData, setUpdateButton }) => {
  const [articles, setArticles] = useState([]);

  const service = new ArticleService();

  const getArticleList = async () => {
    const response = await service.get();
    setArticles(response.data);
  };

  const deleteItem = item => {
    const items = articles;
    items.splice(item, 1);
    setArticles(items);
  };

  useEffect(() => {
    getArticleList();
  }, []);

  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
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
                  <TableRow
                    hover
                    key={article.id}
                    id={article.id}
                    onClick={event => {
                      const cell = event.currentTarget.childNodes;
                      setData({
                        id: event.currentTarget.getAttribute('id'),
                        subject: cell[1].textContent,
                        link: cell[2].textContent
                      });
                      setUpdateButton(true);
                    }}>
                    <TableCell>{index}</TableCell>
                    <TableCell>{article.subject}</TableCell>
                    <TableCell>{article.link}</TableCell>
                    <TableCell>
                      <div>
                        <ColorButton
                          variant="contained"
                          id={article.id}
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

export default ArticleList;
