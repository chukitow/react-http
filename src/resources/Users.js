import axios from 'axios';

class Users {
  static all() {
    return axios.get('https://randomuser.me/api?results=20');
  }
}

export default Users;
