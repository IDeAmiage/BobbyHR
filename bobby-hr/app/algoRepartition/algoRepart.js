import deleteUserFromData from './deleteUserFromData';

export function choix(dict) {
    var list_choix = ['Choix 1', 'Choix 2', 'Choix 3'];
    // Dictionnaire de retour doit être créé de manière générique
    resultat = {}
    for (var project in dict) {
        userToRemove = [];
        resultat[project] = {}
        for (const role in dict[project][list_choix[0]]) {
            const nbPlace = dict[project]["metadata"][role];
            resultat[project][role] = []
            if (dict[project][list_choix[0]][role].length == nbPlace) {
                userToRemove = userToRemove.concat(dict[project][list_choix[0]][role])
                resultat[project][role] = dict[project][list_choix[0]][role].slice()
            }
        }
        deleteUserFromData(userToRemove, dict)
        // Fonctionne si pas Chapo        
    }

    for (const project in dict) {
        for (const role in dict[project][list_choix[0]]) {

            const nbRole = dict[project]["metadata"][role];

            if (resultat[project][role].length != nbRole) {
                if(!Object.keys(resultat[project]).includes(role)){
                    resultat[project][role] = []
                }
                var L1 = []
                for (var i = 0; i < list_choix.length; i++) {
                    for (let j = 3; j > i; j--) {
                        L1 = L1.concat(dict[project][list_choix[i]][role])
                    }
                }
                for (let i = 0; i < nbRole && L1.length != 0; i++) {
                    var rand = Math.floor(Math.random() * L1.length)
                    const user = L1[rand]
                    resultat[project][role].push(user)
                    deleteUserFromData([user], dict)
                    let index = L1.indexOf(user)
                    while (index != -1) {
                        L1.splice(index, 1)
                        index = L1.indexOf(user)
                    }
                }
            }
        }
    }
    return resultat;
}