import axios from 'axios';

export default class ArticleService {
  get = student_id => {
    axios
      .get('/students/' + student_id + '/articles')
      .then(response => {
        alert(response.data.json());
        return response.data.json();
      })
      .catch(error => {
        return error.message;
      });
  };
}
