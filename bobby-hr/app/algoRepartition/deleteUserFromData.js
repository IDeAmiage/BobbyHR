export function deleteUserFromData(useriD, data) {
    var list_choix = ['choix1', 'choix2', 'choix3'];
    var list_role = ['SM', 'PO', 'dev'];

    for (const key in data) {
        if (key == 'Chapo') {
            for (const choix in list_choix) {
                let item_to_remove = [];
                for (const user in data[key][choix]) {
                    if (user['useriD'] == useriD) {
                        item_to_remove.push(data[key][choix].indexof(user));
                    }
                }
                for (i = item_to_remove.length - 1; i >= 0; i--) {
                    data[key][choix].splice(i, 1);
                }
            }
        } else {
            for (const choix in list_choix) {
                let item_to_remove = [];
                for (const user in data[key][choix]) {
                    for (const role in list_role) {
                        if (user['useriD'] == useriD) {
                            item_to_remove.push(data[key][choix][role].indexof(user));
                        }
                    }
                }
                for (i = item_to_remove.length - 1; i >= 0; i--) {
                    data[key][choix][role].splice(i, 1);
                }
            }
        }
    }
    return data
}