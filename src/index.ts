import { User } from './models/User';
const user = new User({ name: 'Max', age: 27 });

user.set({ name: 'Yana' });
console.log(user.get('name'));
console.log(user.get('age'));
