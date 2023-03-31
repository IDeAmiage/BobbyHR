import {create_, delete_, read_, update_, read_all} from "./genericCrud";
const table = "projet";

async function create_projet(dict){
    return create_(table, dict);
}

async function delete_projet(table, id){
    return delete_(table, id);
}

async function update_projet(table, id, dict){
    return update_(table, id, dict);
}

async function read_projet(table, id){
    return read_(table, id);
}

export async function read_all_projet(){
    return read_all(table)
}