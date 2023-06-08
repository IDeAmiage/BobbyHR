import {AddButton, DeleteButton, EditButton} from "@/components/button-edit-projets";
import {initPocketBaseSSR} from "@/lib/pocketbasessr";

async function getProjets(pb) {
  return await pb.collection('projet').getFullList(200, {})
}

export default async function EditionProjetSSR() {
  const pb = await initPocketBaseSSR();
  const projets = await getProjets(pb);

  return (
    <div className="h-screen bg-white_background_bobby">
      <div className="flex flex-col items-center py-8">
        <h1 className="font-Playfair text-4xl font-extrabold text-black_bobby md:text-7xl">
          Edition des projets
        </h1>
      </div>
      <div className="mx-auto w-2/3 pt-6" id="main">
        <div className="rounded shadow-md">
          <table className="w-full border-collapse text-left">
            <thead>
            <tr>
              <th
                className="bg-grey-lightest text-grey-dark border-grey-light border-b px-6 py-4 text-sm font-bold uppercase">Nom
              </th>
              <th
                className="bg-grey-lightest text-grey-dark border-grey-light border-b px-6 py-4 text-sm font-bold uppercase">Statut
              </th>
              <th
                className="bg-grey-lightest text-grey-dark border-grey-light border-b px-6 py-4 text-sm font-bold uppercase">Actions
              </th>
            </tr>
            </thead>
            <tbody>
            {projets.map((projet) => (
              <tr className="hover:bg-grey-lighter" key={projet.id}>
                <td className="border-grey-light border-b px-6 py-4 normal-case">{projet.nom}</td>
                <td className="border-grey-light border-b px-6 py-4 normal-case">{projet.statutP}</td>
                <td className="border-grey-light border-b px-6 py-4">
                  <div className="flex gap-4">
                    <EditButton data={JSON.stringify(projet)}></EditButton>
                    <DeleteButton data={JSON.stringify(projet)}></DeleteButton>
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

