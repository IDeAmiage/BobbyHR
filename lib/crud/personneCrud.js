import {create_, delete_, read_, update_, read_all} from "./genericCrud";
const table = "personne";

export async function create_personne(dict){
    return create_(table, dict);
}

export async function delete_personne(id){
    return delete_(table, id);
}

export async function update_personne(id, dict){
    return update_(table, id, dict);
}

export async function read_personne(id){
    return read_(table, id);
}

export async function read_all_personne() {
    return read_all(table);
}