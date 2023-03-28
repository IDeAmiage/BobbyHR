
dico = { 'Projet 1': { 'Choix 1': { 'SM': ['Camille Mirio','Augustin'], 'PO': ['Camille Cabri'], 'DEV': ['Hind Naoui','PP'] }, 'Choix 2': { 'SM': ['Ziona'], 'PO': ['Hugo'], 'DEV': ['Julien','Pal'] },'Choix 3':{'SM':['Leo'],'PO':['Margaux'],'DEV':['Tessa']} } }

function choix(dict) {
    resultat = { 'Projet 1': {'SM': [], 'PO': [], 'DEV': []}}
    for (var key in dict) {
        if (dict[key]['Choix 1']['SM'].length == 1) {
            resultat[key]['SM'] = dict[key]['Choix 1']['SM'][0]
        }
        if (dict[key]['Choix 1']['PO'].length == 1) {
            resultat[key]['PO'] = dict[key]['Choix 1']['PO'][0]
        }
        if (dict[key]['Choix 1']['DEV'].length == 1) {
            resultat[key]['DEV'] = dict[key]['Choix 1']['DEV'][0]
        }
        if (dict[key]['Choix 1']['SM'].length != 1) {
            const c1 = dict[key]['Choix 1']['SM']
            const c2 = dict[key]['Choix 2']['SM']
            const c3 = dict[key]['Choix 3']['SM']
            const L1= c1.concat(c1).concat(c1).concat(c2).concat(c2).concat(c3)
            var rand = Math.floor(Math.random()*L1.length)
            resultat[key]['SM'] = L1[rand]
        }
        if (dict[key]['Choix 1']['PO'].length != 1) {
            const c1 = dict[key]['Choix 1']['PO']
            const c2 = dict[key]['Choix 2']['PO']
            const c3 = dict[key]['Choix 3']['PO']
            const L1= c1.concat(c1).concat(c1).concat(c2).concat(c2).concat(c3)
            var rand = Math.floor(Math.random()*L1.length)
            resultat[key]['PO'] = L1[rand]
        }
        if (dict[key]['Choix 1']['DEV'].length != 1) {
            const c1 = dict[key]['Choix 1']['DEV']
            const c2 = dict[key]['Choix 2']['DEV']
            const c3 = dict[key]['Choix 3']['DEV']
            const L1= c1.concat(c1).concat(c1).concat(c2).concat(c2).concat(c3)
            var rand = Math.floor(Math.random()*L1.length)
            resultat[key]['DEV'] = L1[rand]

        }

    }
    for (var key in resultat){
        p1=resultat[key]['SM']
        p2=resultat[key]['PO']
        p3=resultat[key]['DEV']
        
    }
    console.log(dict)
    return resultat;
}

console.log(choix(dico))