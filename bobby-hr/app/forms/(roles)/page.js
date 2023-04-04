import pb from './../../util/pocketbase'

async function getRoles() {
    return await pb.collection('role').getFullList(200, {})
}

async function getProject() {
    return await pb.collection('projet').getFullList(200, {});
}

async function RoleForms() {
    const rolesData = getRoles();
    const projectsData = getProject();

    const [roles, projects] = await Promise.all([rolesData, projectsData]);

    console.log(roles)
    console.log(projects)

    return (
        <h1>Roles</h1>
    );
}

export default RoleForms;