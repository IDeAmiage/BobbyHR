import {AddButton, DeleteButton, EditButton} from "@/components/button-edit-role";
import {initPocketBaseSSR} from "@/lib/pocketbasessr";

async function getSprint(pb) {
  return await pb.collection('sprint').getFullList(200, {})
}

export default async function EditionSprintSSR() {
  const pb = await initPocketBaseSSR();
  const roles = await getSprint(pb);

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
                className="bg-grey-lightest text-grey-dark border-grey-light border-b px-6 py-4 text-sm font-bold uppercase">Roles
              </th>
              <th
                className="bg-grey-lightest text-grey-dark border-grey-light border-b px-6 py-4 text-sm font-bold uppercase">Actions
              </th>
            </tr>
            </thead>
            <tbody>
            {roles.map((role) => (
              <tr className="hover:bg-grey-lighter" key={role.id}>
                <td className="border-grey-light border-b px-6 py-4">{role.type_role}</td>
                <td className="border-grey-light border-b px-6 py-4">
                  <div className="flex gap-4">
                    <EditButton idRole={role.id} typeRole={role.type_role}></EditButton>
                    <DeleteButton idRole={role.id} typeRole={role.type_role}></DeleteButton>
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

