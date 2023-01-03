import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');


async function create_(pb, table, id, dict){
    const record1 = await pb.collection(table).create(id, 
        dict
        );
    return record1;
}

async function delete_(pb, table, id){
    const record1 = await pb.collection(table).delete(id
        );
    return record1;
}

async function update_(pb, table, id, dict){
    const record1 = await pb.collection(table).update(id, 
        dict
        );
    return record1;
}

async function read_(pb, table, id){
    const record1 = await pb.collection(table).getOne(id, 
        {}
        );
    return record1;
}