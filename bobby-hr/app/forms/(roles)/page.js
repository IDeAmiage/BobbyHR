import Forms from "./forms";
import pb from './../../util/pocketbase'

async function getRoles() {
    try {
        const records = await pb.collection('role').getFullList();
        console.log(records)
        return records;
    } catch (e) {
        console.log(e);
    }
    return [];
}

async function getProject() {
    try {
        const records = await pb.collection('projet').getFullList();
        console.log(records)
        return records;
    } catch (e) {
        console.log(e);
    }
    return [];
}

async function RoleForms() {
    const roles = await getRoles();
    const projects = await getProject();
    console.log(roles)

    return (
    <Forms roles={roles} projects={projects}/>
    );
}

export default RoleForms;