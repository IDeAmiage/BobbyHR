import { read_all_role } from "@/lib/crud/roleCrud";
import { DeleteButton, EditButton, AddButton } from "@/components/button-edit-role";
import NavBar from '@/components/nav-bar';

async function getRoles() {
    const res = await read_all_role();
    return res;
}

export default async function Liste_Roles() {
    const rolesData = getRoles();
    const roles = await rolesData;
    return (
        <main>
            <NavBar />
            <>
                <div className="w-2/3 mx-auto" id="main">
                    <div className="bg-white shadow-md rounded my-6">
                        <table className="text-left w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Roles</th>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roles.map((role) => (
                                    <tr className="hover:bg-grey-lighter" key={role.id}>
                                        <td className="py-4 px-6 border-b border-grey-light">{role.type_role}</td>
                                        <td className="py-4 px-6 border-b border-grey-light">
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
        </main>
    );
}

