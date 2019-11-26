import axios from 'axios';

axios.post(' http://localhost:3000/users', {
  name: 'myname',
  age: 20,
});

const user = axios.get(' http://localhost:3000/users/1');
console.log(user);
