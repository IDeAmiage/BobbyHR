import "../globals.css" 

export default function CV() {
  return (
    <div className="mt-4 grid justify-items-stretch place-content-center">
        <h1 className="text-4xl text-bold ">Curriculum Vitae de l'entreprise Idea </h1>
        <div className="text-center text-2xl mt-10">
            <h1>/*Partie présentation de l'entreprise*/</h1>
           {/* Partie de présentation de IdeA, quel est l'objectif de notre entreprise, l'utilité, voir d'autres exemples de présentation d'entreprise */}
           <p>...</p> 
        </div>

        {/* <!-- Partie présentation des projets --!> */}
        {/*TO DO: flex les card pour qu'il s'adapte à l'écran, flex et style également le texte interne au card*/}
        <h1 className="text-center text-2xl mt-10">/*Présentation des Projets*/</h1>
        <div className="flex items-start space-x-7 mt-4 place-content-center">
            <div className="relative w-80 h-60 rounded-2xl text-black overflow-hidden cursor-pointer transition-all duration-700 card ease-in-out hover:scale-110">
                <div className="absolute inset-0 w-full h-full justify-center items-center flex bg-white_accent_bobby transition-all duration-100 delay-200 z-20 hover:opacity-0">
                    <div>
                        <h1 className="font-medium">/*projet1*/</h1>
                        <h1 className="text-xl ">Enseignant</h1>
                    </div>
                </div>
                <div className="absolute inset-0 w-full h-full flex bg-white_accent_bobby transition-all z-10 card-back">
                    <div className="text-center mt-6">
                        <h3 className="font-medium text-lg">/*Description du projet*/</h3>
                        <p>Création d'un tableau de bord permettant d'analyser les différents statuts des enseignants mais aussi de pouvoir proposer des statistiques dans un dashboard</p>
                        <h3 className="font-medium text-lg mt-2">/*Compétences utilisés</h3>
                        <p>Power BI</p>
                    </div>
                </div>  
            </div>
            <div className="relative w-80 h-60 rounded-2xl text-black overflow-hidden cursor-pointer transition-all duration-700 card ease-in-out hover:scale-110">
                <div className="absolute inset-0 w-full h-full justify-center items-center flex bg-white_accent_bobby transition-all duration-100 delay-200 z-20 hover:opacity-0">
                    <div>
                        <h1 className="font-medium">/*projet2*/</h1>
                        <h3 className="text-xl">Bobby HR</h3>
                    </div>
                </div>
                <div className="absolute inset-0 w-full h-full flex bg-white_accent_bobby transition-all z-10 card-back">
                    <div className="text-center mt-8">
                        <h3 className="font-medium text-lg">/*Description du projet*/</h3>
                        <p>Conception d'un outil de gestion interne</p>
                        <h3 className="font-medium text-lg mt-5">/*Compétences utilisés</h3>
                        <p>Compétences de conception web, Front/Back-End, Gestion de bases de données, ect..</p>
                    </div>
                </div> 
            </div>
            <div className="relative w-80 h-60 rounded-2xl text-black overflow-hidden cursor-pointer transition-all duration-700 card ease-in-out hover:scale-110"> 
                <div className="absolute inset-0 w-full h-full justify-center items-center flex bg-white_accent_bobby transition-all duration-100 delay-200 z-20 hover:opacity-0">
                    <div>
                        <h1 className="font-medium">/*projet3*/</h1>
                        <h3 className="text-xl">EMC</h3>
                    </div>
                </div>
                <div className="absolute inset-0 w-full h-full flex bg-white_accent_bobby transition-all z-10 card-back"> 
                    <div className="text-center mt-5">
                        <h3 className="font-medium text-lg">/*Description du projet*/</h3>
                        <p>Récole des données et enquêtes sur la circulation routière. Les missions restantes pour ce projet sont de continuer sur l'algorithme de classification pour le système de gestion de données envoyés par le radar</p>
                        <h3 className="font-medium text-lg">/*Compétences utilisés</h3>
                        <p>ML, Python</p>
                    </div>
                </div> 
            </div>
            <div className="relative w-80 h-60 rounded-2xl text-black overflow-hidden cursor-pointer transition-all duration-700 card ease-in-out hover:scale-110"> 
                <div className="absolute inset-0 w-full h-full justify-center items-center flex bg-white_accent_bobby transition-all duration-100 delay-200 z-20 hover:opacity-0">
                    <div>
                        
                        <h1 className="font-medium">/*projet4*/</h1>
                        <h3 className="text-xl">CGR Blagnac</h3>
                    </div>
                </div>
                <div className="absolute inset-0 w-full h-full flex bg-white_accent_bobby transition-all z-10 card-back">
                    <div className="text-center mt-8">
                        <h3 className="font-medium text-lg">/*Description du projet*/</h3>
                        <p>Conception d'un outils d'analyse pour le cinéma CGR</p>
                        <h3 className="font-medium text-lg mt-6">/*Compétences utilisés</h3>
                        <p>Python, PowerBI</p>
                    </div>
                </div> 
            </div>
        </div>
        <div className="text-center text-2xl mt-10">
            <h1>/*Nos compétences*/</h1>
            <p>SQL, Python, java, javascript, powerBI</p>
      </div>
    </div>
    );}