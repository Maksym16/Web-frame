import { User } from './models/User';
const user = new User({ name: 'Max', age: 22 });

user.events.on('change', () => {
  console.log('hhhheeeee');
});
