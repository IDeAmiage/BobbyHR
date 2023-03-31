import {create_, delete_, read_, update_, read_all} from "./genericCrud";
const table = "role";

async function create_role(dict){
    return create_(table, dict);
}

async function delete_role(table, id){
    return delete_(table, id);
}

async function update_role(table, id, dict){
    return update_(table, id, dict);
}

async function read_role(table, id){
    return read_(table, id);
}

export async function read_all_role(){
    return read_all(table)
}