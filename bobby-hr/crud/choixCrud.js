import {create_, delete_, read_, update_} from "./genericCrud";
const table = "choix";

async function create_choix(dict){
    return create_(table, dict);
}

async function delete_choix(table, id){
    return delete_(table, id);
}

async function update_choix(table, id, dict){
    return update_(table, id, dict);
}

async function read_choix(table, id){
    return read_(table, id);
}