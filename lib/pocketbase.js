import PocketBase from 'pocketbase';

const pb = new PocketBase('https://idea-student.works');

export default pb;

export let currentUser = pb.authStore.model;

pb.authStore.onChange((auth) => {
    console.log('authStore changed', auth);
    currentUser = pb.authStore.model;
});
