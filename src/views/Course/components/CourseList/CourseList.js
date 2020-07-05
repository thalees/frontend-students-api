import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles, withStyles } from '@material-ui/styles';
import { red } from '@material-ui/core/colors';

import CourseService from '../../../../services/CourseService';

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

const CourseList = ({ className, setData, setUpdateButton }) => {
  const [course, setCourse] = useState([]);

  const service = new CourseService();

  const getCourseList = async () => {
    const response = await service.get();
    setCourse(response.data);
  };

  const deleteItem = item => {
    const items = course;
    items.splice(item, 1);
    setCourse(items);
  };

  useEffect(() => {
    getCourseList();
  }, []);

  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
      <CardHeader title="Course List" />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Course Ref</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Platform</TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {course.map((course, index) => (
                  <TableRow
                    hover
                    key={course.id}
                    id={course.id}
                    onClick={event => {
                      const cell = event.currentTarget.childNodes;
                      setData({
                        id: event.currentTarget.getAttribute('id'),
                        name: cell[1].textContent,
                        platform: cell[2].textContent,
                        price: cell[3].textContent
                      });
                      setUpdateButton(true);
                    }}>
                    <TableCell>{index}</TableCell>
                    <TableCell>{course.name}</TableCell>
                    <TableCell>{course.platform}</TableCell>
                    <TableCell>{course.price}</TableCell>
                    <TableCell>
                      <div>
                        <ColorButton
                          variant="contained"
                          id={course.id}
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

export default CourseList;
