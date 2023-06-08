import {initPocketBaseSSR} from "@/lib/pocketbasessr";

async function getSprint(pb) {
  const today = new Date().toISOString().slice(0, 10)
  return await pb.collection('sprint').getList(1, 50, {
    filter:  `dateDebChoix < '${today}' && dateDeb > '${today}'`,
  });
}

async function getAffectation(pb) {
  return await pb.collection('affectation').getFirstListItem(`id_personne='${pb.authStore.model.id}'`, {
    expand: 'id_demande.id_role,id_demande.id_projet',
  });
}

export default async function Internal() {
  const pb = await initPocketBaseSSR();
  const sprint = await getSprint(pb);
  const affectation = await getAffectation(pb);
  const projet = affectation.expand.id_demande.expand.id_projet["nom"];
  const role = affectation.expand.id_demande.expand.id_role["type_role"];

  return (
    <main className="flex h-screen flex-col bg-white_background_bobby">
      <div className="m-10 flex flex-col items-center justify-center font-Playfair text-5xl font-bold">
        Welcome {pb.authStore.model.username}
      </div>

      <div className="flex flex-col items-center px-10 font-Playfair">
        <div className="mx-6 grid w-[80%] grid-rows-3 gap-4 text-center md:w-1/2 md:grid-cols-3">
          <div className="flex-col rounded-xl bg-[#E9E6E4] text-[#63535B]">
            <div className="pt-2 text-2xl">PROJET</div>
            <div className="py-4 text-2xl font-semibold sm:text-3xl">{projet}</div>
          </div>
          <div className="rounded-xl bg-[#63535B] text-[#E9E6E4]">
            <div className="pt-2 text-2xl">SPRINT</div>
            <div className="py-4 text-2xl font-semibold sm:text-3xl">{sprint.items[0]["numSprint"]}</div>
          </div>
          <div className="rounded-xl bg-[#CACACA] text-[#63535B]">
            <div className="pt-2 text-2xl">RÔLE</div>
            <div className="py-4 text-2xl font-semibold sm:text-3xl">{role}</div>
          </div>
        </div>
      </div>
    </main>
  );
}