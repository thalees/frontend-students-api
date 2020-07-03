import React, { useState } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
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

const CourseList = props => {
  const [courses, setCourses] = useState([{}]);

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
                {courses.map((course, index) => (
                  <TableRow hover key={course.id}>
                    <TableCell>{index}</TableCell>
                    <TableCell>{course.subject}</TableCell>
                    <TableCell>{course.platform}</TableCell>
                    <TableCell>{course.price}</TableCell>
                    <TableCell>
                      <div>
                        <ColorButton
                          variant="contained"
                          startIcon={<DeleteIcon />}
                          onClick={event => {
                            const service = new CourseService();
                            setCourses(
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

CourseList.propTypes = {
  className: PropTypes.string
};

export default CourseList;
