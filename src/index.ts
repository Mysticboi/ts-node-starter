import { User } from './types';

console.log('Welcome to TypeScript powered NodeJS');

const user: User = {
  email: 'giornogiovanna@gmail.com',
  password: '123456',
  age: 18,
  addresses: [
    {
      street: 'Via delle Grazie',
      city: 'Roma',
      country: 'Italia',
      zipCode: 20000,
    },
  ],
};

console.log(user);
