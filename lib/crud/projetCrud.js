import {create_, delete_, read_, update_, read_all} from "./genericCrud";
const table = "projet";

export async function create_projet(dict){
    return create_(table, dict);
}

export async function delete_projet(id){
    return delete_(table, id);
}

export async function update_projet(id, dict){
    return update_(table, id, dict);
}

export async function read_projet(id){
    return read_(table, id);
}

export async function read_all_projet() {
    return read_all(table);
}