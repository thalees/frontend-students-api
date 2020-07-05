import axios from 'axios';

export default class PodcastService {
  student_id = localStorage.getItem('studentId');

  get = async () => {
    return await axios.get('/students/' + this.student_id + '/podcasts');
  };

  post = async data => {
    return await axios.post('/students/' + this.student_id + '/podcasts', data);
  };

  put = async data => {
    return await axios.put('/students/podcasts/' + data.id, data);
  };

  delete = async id => {
    return await axios.delete('/students/podcasts/' + id);
  };
}
