import {create_, delete_, read_, update_, read_all} from "./genericCrud";
const table = "role";

export async function create_role(dict){
    return create_(table, dict);
}

export async function delete_role(id){
    return delete_(table, id);
}

export async function update_role(id, dict){
    return update_(table, id, dict);
}

export async function read_role(id){
    return read_(table, id);
}

export async function read_all_role(){
    return read_all(table);
}