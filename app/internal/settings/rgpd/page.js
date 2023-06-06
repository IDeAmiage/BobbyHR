import { initPocketBaseSSR } from '@/lib/pocketbasessr';
import FormsDemandeRole from '@/components/form-rgpd';

async function getSprint(pb) {
  const today = new Date().toISOString().slice(0, 10)
  return await pb.collection('sprint').getList(1, 50, {
    filter:  `dateDebChoix < '${today}' && dateDeb > '${today}'`,
  });
}

async function getDemande(pb, id_sprint) {
  return await pb.collection('demande').getFullList(200, {
    filter: `id_sprint = '${id_sprint}'`,
    expand: 'id_role,id_projet',
  });
}

async function DemandeRoleSSR() {
  const pb = await initPocketBaseSSR();

  const sprint = await getSprint(pb);
  const demande = await getDemande(pb, sprint.items[0]["id"]);

  const res = {};
  for (const [key, value] of Object.entries(demande)) {
    res[value.id_projet] = res[value.id_projet] || {};
    res[value.id_projet]["nom"] = value.expand.id_projet["nom"];

    res[value.id_projet]["roles"] = res[value.id_projet]["roles"] || [];
    res[value.id_projet]["roles"].push({
      "id": value.expand.id_role.id,
      "type_role": value.expand.id_role["type_role"],
      "demande": value.id
    });
  }

  return (
    <FormsDemandeRole demande={JSON.stringify(res)} />
  );
}

export default DemandeRoleSSR;