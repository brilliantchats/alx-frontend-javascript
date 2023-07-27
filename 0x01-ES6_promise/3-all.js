import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  promise1.then((result) => process.stdout.write(`${result.body} `))
    .catch(() => console.log('Signup system offline'));
  promise2.then((result) => console.log(`${result.firstName} ${result.lastName}`))
    .catch(() => console.log('Signup system offline'));
}
