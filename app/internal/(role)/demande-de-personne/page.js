import { initPocketBaseSSR } from '@/lib/pocketbasessr';
import FormsDemandePersonne from '@/components/form-demande-personne';

async function getRoles(pb) {
  return await pb.collection('role').getFullList(200, {
    filter: 'id != "ikh7yvq3uwspf8p"',
  })
}

async function getProject(pb) {
  return await pb.collection('projet').getFullList(200, {});
}

async function getSprint(pb) {
  const today = new Date().toISOString().slice(0, 10)
  return await pb.collection('sprint').getList(1, 50, {
    filter:  `dateDebChoix < '${today}' && dateDeb > '${today}'`,
  });
}

async function DemandePersonneSSR() {
  const pb = await initPocketBaseSSR();

  const projectsData = getProject(pb);
  const rolesData = getRoles(pb);
  const sprintData = getSprint(pb);

  const [roles, projects, sprint] = await Promise.all([rolesData, projectsData, sprintData]);

  return (
    <>
      <FormsDemandePersonne
        roles={JSON.stringify(roles)}
        projects={JSON.stringify(projects)}
        sprint={JSON.stringify(sprint)}
      />
    </>
  );
}

export default DemandePersonneSSR;