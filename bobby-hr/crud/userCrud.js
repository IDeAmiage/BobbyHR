import {create_, delete_, read_, update_} from "./genericCrud";
const table = "user";

async function create_user(dict){
    return create_(table, dict);
}

async function delete_user(table, id){
    return delete_(table, id);
}

async function update_user(table, id, dict){
    return update_(table, id, dict);
}

async function read_user(table, id){
    return read_(table, id);
}