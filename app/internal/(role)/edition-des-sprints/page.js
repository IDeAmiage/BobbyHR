import {AddButton, DeleteButton, EditButton} from "@/components/button-edit-sprints";
import {initPocketBaseSSR} from "@/lib/pocketbasessr";

async function getSprint(pb) {
  return await pb.collection('sprint').getFullList(200, {
    sort: '-dateDeb'
  })
}

export default async function EditionSprintSSR() {
  const pb = await initPocketBaseSSR();
  const sprints = await getSprint(pb);

  return (
    <div className="h-screen bg-white_background_bobby">
      <div className="flex flex-col items-center py-8">
        <h1 className="font-Playfair text-4xl font-extrabold text-black_bobby md:text-7xl">
          Edition des sprints
        </h1>
      </div>
      <div className="mx-auto w-2/3 pt-6" id="main">
        <div className="rounded shadow-md">
          <table className="w-full border-collapse text-left">
            <thead>
            <tr>
              <th
                className="bg-grey-lightest text-grey-dark border-grey-light border-b px-6 py-4 text-sm font-bold uppercase">Debut
              </th>
              <th
                className="bg-grey-lightest text-grey-dark border-grey-light border-b px-6 py-4 text-sm font-bold uppercase">Fin
              </th>
              <th
                className="bg-grey-lightest text-grey-dark border-grey-light border-b px-6 py-4 text-sm font-bold uppercase">Nb séances M1
              </th>
              <th
                className="bg-grey-lightest text-grey-dark border-grey-light border-b px-6 py-4 text-sm font-bold uppercase">Nb séances M2
              </th>
              <th
                className="bg-grey-lightest text-grey-dark border-grey-light border-b px-6 py-4 text-sm font-bold uppercase">Numéro du sprint
              </th>
              <th
                className="bg-grey-lightest text-grey-dark border-grey-light border-b px-6 py-4 text-sm font-bold uppercase">Date de début des choix
              </th>
              <th
                className="bg-grey-lightest text-grey-dark border-grey-light border-b px-6 py-4 text-sm font-bold uppercase">Actions
              </th>
            </tr>
            </thead>
            <tbody>
            {sprints.map((sprint) => (
              <tr className="hover:bg-grey-lighter" key={sprint.id}>
                <td className="border-grey-light border-b px-6 py-4">{new Date(sprint["dateDeb"]).toISOString().slice(0, 10)}</td>
                <td className="border-grey-light border-b px-6 py-4">{new Date(sprint["dateFin"]).toISOString().slice(0, 10)}</td>
                <td className="border-grey-light border-b px-6 py-4">{sprint["nbSeanceM1"]}</td>
                <td className="border-grey-light border-b px-6 py-4">{sprint["nbSeanceM2"]}</td>
                <td className="border-grey-light border-b px-6 py-4">{sprint["numSprint"]}</td>
                <td className="border-grey-light border-b px-6 py-4">{new Date(sprint["dateDebChoix"]).toISOString().slice(0, 10)}</td>
                <td className="border-grey-light border-b px-6 py-4">
                  <div className="flex gap-4">
                    <EditButton data={JSON.stringify(sprint)}></EditButton>
                    <DeleteButton data={JSON.stringify(sprint)}></DeleteButton>
                  </div>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
        <div className="p-4">
          <AddButton/>
        </div>
      </div>
    </div>
  );
}

