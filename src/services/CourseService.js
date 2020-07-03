import axios from 'axios';

export default class CourseService {
  get = student_id => {
    axios
      .get('/students/' + student_id + '/courses')
      .then(response => {
        alert(response.data.json());
        return response.data.json();
      })
      .catch(error => {
        return error.message;
      });
  };
}
