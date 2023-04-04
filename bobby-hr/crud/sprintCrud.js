import {create_, delete_, read_, update_} from "./genericCrud";
const table = "sprint";

async function create_choix(dict){
    return create_(table, dict);
}

async function delete_choix(id){
    return delete_(table, id);
}

async function update_choix(id, dict){
    return update_(table, id, dict);
}

async function read_choix(id){
    return read_(table, id);
}

async function read_all_sprint() {
    return read_all(table);
}