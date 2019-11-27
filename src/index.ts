import { User } from './models/User';
const user = new User({ name: 'Max', age: 22 });

user.fetch();
