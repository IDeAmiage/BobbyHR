export function deleteUserFromData(userList, data) {
    var list_choix = ['Choix 1', 'Choix 2', 'Choix 3'];
    for (const userIndex in userList) {
        const userID = userList[userIndex]
        for (const project in data) {
            for (const choix in list_choix) {
                for (const role in data[project][list_choix[choix]]) {
                    let item_to_remove = [];
                    for (const user in data[project][list_choix[choix]][role]) {
                        if (data[project][list_choix[choix]][role][user] == userID) {
                            item_to_remove.push(user);
                        }
                    }
                    for (i = item_to_remove.length - 1; i >= 0; i--) {
                        data[project][list_choix[choix]][role].splice(item_to_remove[i], 1);
                    }
                }
            }
        }
    }
    return data
}