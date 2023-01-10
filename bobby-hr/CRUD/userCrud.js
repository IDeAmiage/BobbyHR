import './genericCrud'
const table = "users";

async function create_user(pb, dict){
    ret_var = create_(pb, table, dict);
    return ret_var;
}

async function delete_user(pb, table, id){
    ret_var = delete_(pb, table, id);
    return ret_var;
}

async function update_user(pb, table, id, dict){
    ret_var = update_(pb, table, id, dict);
    return ret_var;
}

async function read_user(pb, table, id){
    ret_var = read_(pb, table, id);
    return ret_var;
}