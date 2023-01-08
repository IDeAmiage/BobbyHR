import pb from '../pocketbase';

async function login({ email, password }, isAdmin) {
    if (isAdmin) {
        const user = await pb.admins.authWithPassword(email, password);
        pb.authStore.exportToCookie();
        return user;
    } else {
        const user = await pb.collection('users').authWithPassword(email, password);
        pb.authStore.exportToCookie();
        return user;
    }
}

async function register({ username, email, password, passwordConfirm, name }) {
    const data = {
        "username": username,
        "email": email,
        "emailVisibility": true,
        "password": password,
        "passwordConfirm": passwordConfirm,
        "name": name
    };
    const user = await pb.collection('users').create(data);
    await pb.collection('users').requestVerification('test@example.com');
    return user;
}

async function logout() {
    pb.authStore.clear();
    window.location.reload();
}

const authService = {
    login,
    register,
    logout,
};

export default authService;