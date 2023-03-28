import { read_all_role} from "../../crud/roleCrud"
import "../globals.css"
import { DeleteButton, EditButton, AddButton, Modal } from "./CRUDButton"

async function getRoles() {
    const res = await read_all_role();
    return res;
}

export default async function Liste_Roles() {
    const rolesData = getRoles();
    const roles = await rolesData;

    const test_update = { "type_role": "test" }
    return (
        <>
            <div class="w-2/3 mx-auto">
                <div class="bg-white shadow-md rounded my-6">
                    <table class="text-left w-full border-collapse">
                        <thead>
                            <tr>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Roles</th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {roles.map((role) => (
                                <tr class="hover:bg-grey-lighter" key={role.id}>
                                    <td class="py-4 px-6 border-b border-grey-light">{role.type_role}</td>
                                    <td class="py-4 px-6 border-b border-grey-light">
                                        <div class="flex gap-4">
                                            <EditButton idRole={role.id} data={test_update}></EditButton>
                                            <DeleteButton idRole={role.id}></DeleteButton>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <AddButton></AddButton>
                <Modal></Modal>
            </div>
        </>
    );
}

