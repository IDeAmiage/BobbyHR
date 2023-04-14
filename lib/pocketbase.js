import PocketBase from 'pocketbase';

const pb = new PocketBase('https://idea-student.works');

export default pb;

export const currentUser = pb.authStore.model;

pb.authStore.onChange((auth) => {
    console.log('authStore changed', auth);
    currentUser.set(pb.authStore.model);
});
