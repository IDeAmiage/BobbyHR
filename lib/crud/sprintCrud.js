import {create_, delete_, read_, update_, read_all} from "./genericCrud";
const table = "sprint";

export async function create_sprint(dict){
    return create_(table, dict);
}

export async function delete_sprint(id){
    return delete_(table, id);
}

export async function update_sprint(id, dict){
    return update_(table, id, dict);
}

export async function read_sprint(id){
    return read_(table, id);
}

export async function read_all_sprint() {
    return read_all(table);
}

export async function read_last_sprint() {
    return read_all(table); 
}