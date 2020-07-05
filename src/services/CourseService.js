import axios from 'axios';

export default class CourseService {
  student_id = localStorage.getItem('studentId');

  get = async () => {
    return await axios.get('/students/' + this.student_id + '/courses');
  };

  post = async data => {
    return await axios.post('/students/' + this.student_id + '/courses', data);
  };

  put = async data => {
    return await axios.put('/students/courses/' + data.id, data);
  };

  delete = async id => {
    return await axios.delete('/students/courses/' + id);
  };
}