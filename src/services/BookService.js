import axios from 'axios';

export default class BookService {
  student_id = localStorage.getItem('studentId');

  get = async () => {
    return await axios.get('/students/' + this.student_id + '/books');
  };

  post = async data => {
    return await axios.post('/students/' + this.student_id + '/books', data);
  };

  put = async data => {
    return await axios.put('/students/books/' + data.id, data);
  };

  delete = async id => {
    return await axios.delete('/students/books/' + id);
  };
}
