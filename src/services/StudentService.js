import axios from 'axios';

export default class StudentService {
  get = async () => {
    const response = await axios.get('/students/');
    return response;
  };

  post = username => {
    return axios.post('/students', { username: username });
  };
}
