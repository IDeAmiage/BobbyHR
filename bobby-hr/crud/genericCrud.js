import pb from '../app/util/pocketbase'

export async function create_(table, dict){
    return pb.collection(table).create(dict);
}

export async function delete_(table, id){
    return await pb.collection(table).delete(id);
}

export async function update_(table, id, dict){
    return await pb.collection(table).update(id, dict);
}

export async function read_(table, id){
    return await pb.collection(table).getOne(id, {});
}

export async function read_all(table){
    return await pb.collection(table).getFullList(200, {
        sort: '-created',
    });
}