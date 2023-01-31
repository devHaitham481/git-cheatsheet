import axios from 'axios';

class Users {
  static async getAll() {
    let res = await axios.get('http://localhost:3000/users');
    return res;
  }
}

export default Users;
