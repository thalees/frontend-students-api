import axios from 'axios';

export default class StudentService {
  get = async () => {
    const response = await axios.get('/students/');
    return response;
  };

  post = data => {
    return axios.post('/students', { username: 'vaibrasil' });
  };
}
