import axios from 'axios';

export default class BookService {
  get = student_id => {
    axios
      .get('/students/' + student_id + '/books')
      .then(response => {
        alert(response.data.json());
        return response.data.json();
      })
      .catch(error => {
        return error.message;
      });
  };
}
