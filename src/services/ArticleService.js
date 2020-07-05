import axios from 'axios';

export default class ArticleService {
  student_id = localStorage.getItem('studentId');

  get = async () => {
    return await axios.get('/students/' + this.student_id + '/articles');
  };

  post = async data => {
    return await axios.post('/students/' + this.student_id + '/articles', data);
  };

  put = async data => {
    return await axios.put('/students/articles/' + data.id, data);
  };

  delete = async id => {
    return await axios.delete('/students/articles/' + id);
  };
}