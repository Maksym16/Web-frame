import { User } from './models/User';
const user = new User({ name: 'Max', age: 27 });

user.on('change', () => {
  console.log('hi');
});

user.on('save', () => {
  console.log('bububi');
});
user.trigger('click');
