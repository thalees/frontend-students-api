import axios from 'axios';
import { envVars } from '../envVars';

export default class StudentService {
  studentUrl =
    'https://98wbf7keb5.execute-api.us-east-1.amazonaws.com/api' + '/students';

  get = () => {
    const response = axios
      .get('/students')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    return response;
  };

  post = data => {
    return axios.post('/students', { username: 'vaibrasil' });
  };
}
