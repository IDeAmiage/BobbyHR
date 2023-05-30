import {create_, delete_, read_, update_, read_all} from "./genericCrud";
const table = "affectation";

export async function create_choix(dict){
    return create_(table, dict);
}

export async function delete_choix(id){
    return delete_(table, id);
}

export async function update_choix(id, dict){
    return update_(table, id, dict);
}

export async function read_choix(id){
    return read_(table, id);
}

export async function read_all_affectation() {
    return read_all(table);
}