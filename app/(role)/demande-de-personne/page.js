import { initPocketBaseSSR } from '@/lib/pocketbasessr';
import FormsDemandeRole from '@/components/form-demande-role';

async function getRoles(pb) {
    return await pb.collection('role').getFullList(200, {
        filter: 'id != "ikh7yvq3uwspf8p"',
    })
}

async function getProject(pb) {
    return await pb.collection('projet').getFullList(200, {});
}

async function RoleForms() {
    const pb = await initPocketBaseSSR();

    const projectsData = getProject(pb);
    const rolesData = getRoles(pb);

    const [roles, projects] = await Promise.all([rolesData, projectsData]);

    return <FormsDemandeRole roles={JSON.stringify(roles)}
                  projects={JSON.stringify(projects)}/>;
}

export default RoleForms;