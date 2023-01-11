import {create_, delete_, read_, update_} from "./genericCrud";
const table = "personne";

async function create_personne(dict){
    return create_(table, dict);
}

async function delete_personne(table, id){
    return delete_(table, id);
}

async function update_personne(table, id, dict){
    return update_(table, id, dict);
}

async function read_personne(table, id){
    return read_(table, id);
}