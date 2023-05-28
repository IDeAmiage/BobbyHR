import { read_all_role} from "@/lib/crud/roleCrud";
import { DeleteButton, EditButton, AddButton} from "@/components/button-edit-role";

async function getRoles() {
    const res = await read_all_role();
    return res;
}

export default async function Liste_Roles() {
    const rolesData = getRoles();
    const roles = await rolesData;
    return (
        <>
            <div className="mx-auto w-2/3" id="main">
                <div className="my-6 rounded bg-white shadow-md">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr>
                                <th className="bg-grey-lightest text-grey-dark border-grey-light border-b px-6 py-4 text-sm font-bold uppercase">Roles</th>
                                <th className="bg-grey-lightest text-grey-dark border-grey-light border-b px-6 py-4 text-sm font-bold uppercase">Actions</th>
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
                <AddButton></AddButton>
            </div>
        </>
    );
}

