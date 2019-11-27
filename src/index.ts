import { User } from './models/User';
const user = new User({ id: 1, name: 'kakaha', age: 2 });

user.on('save', () => {
  console.log(user);
});

user.save();
