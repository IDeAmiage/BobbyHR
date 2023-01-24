import pb from '../pocketbase';

export async function useLogin({ email, password }, isAdmin) {
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

export function useUser() {
    return {user: pb.authStore.model, valid: pb.authStore.isValid};
}

export async function useRegister({ username, email, password, passwordConfirm, nom, prenom, promotion}) {
    const data = {
        "username": username,
        "email": email,
        "emailVisibility": true,
        "password": password,
        "passwordConfirm": passwordConfirm,
        "nom": nom,
        "prenom": prenom,
        "promotion": promotion
    };
    const user = await pb.collection('users').create(data);
    await pb.collection('users').requestVerification('test@example.com');
    return user;
}

export async function useLogout() {

}
