import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
const authData = await pb.collection('users').authWithPassword('YOUR_USERNAME_OR_EMAIL', '1234567890');

console.log(pb.authStore.isValid);
console.log(pb.authStore.token);
console.log(pb.authStore.model.id);

// "logout" the last authenticated account
pb.authStore.clear();

const LoginPage = () => {
  return (
    <form>
      <input
        type="email"
        placeholder="Email"
      />
      <input
        type="password"
        placeholder="Password"
      />
        <button type="submit">Log in</button>
    </form>
  );
};

export default LoginPage;