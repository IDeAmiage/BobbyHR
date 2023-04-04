import "../globals.css" 
import Image from 'next/image'
import cgrpic from '../assets/CGR_logo.png'
import bobbypic from '../assets/chaise.png'
import emcpic from '../assets/emc.jpg'
import teachingpic from '../assets/teacher.png'
import logoidea from '../assets/logoidea.png'
import logoinstagram from '../assets/logoinstagram.webp'
import logolinkedin from '../assets/linkedin.webp'
import logotfc from '../assets/logotfc.png'
import puydufou from '../assets/puydufou.jpg'

export default function CV() {
  return (
   <div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between">
            <div class="flex">
                <a href="#" class="flex-shrink-0 text-white">
                <Image class="h-8 w-8" src={logoidea} alt="Logo d'Idea"/>
                </a>
                <div class="hidden lg:block lg:ml-10">
                <div class="flex space-x-4">
                    <a href="#haut" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Accueil</a>
                    <a href="#presentation" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Présentation</a>
                    <a href="#projets" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projets</a>
                    <a href="#competences" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Compétences</a>
                    <a href="#contact" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                </div>
                </div>
            </div>
            <div class="-mr-2 flex items-center lg:hidden">
                <button type="button" class="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                </button>
            </div>
            </div>
        </div>
        <a name="haut"></a>
        <h1 className="text-4xl text-center text-purple_bobby font-bold">Curriculum Vitae de l'entreprise Idea </h1><br/>
        <p className="text-center"></p>
        <div className="text-center items-center text-2xl mt-10">
            <a name="presentation"></a>
            <h1 className="text-3xl text-center text-purple_bobby font-bold">Présentation de l'entreprise</h1>
            <p>Startup créée par des étudiants en master MIAGE, parcours IDA à l'Université Capitole de Toulouse. <br/> Nous traitons des sujets liés aux Système d'informations, le BIG DATA et le traitement de données.</p><br/>
        </div>
        <a name="projets"></a>
        <h1 className="text-3xl text-center text-purple_bobby font-bold">Présentation des projets</h1><br/>
        <div class="flex flex-wrap justify-center">
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                <div class="relative">
                    <Image class="w-full" src={teachingpic} alt="Picture of enseignant"/>
                    <div class="absolute top-0 right-0 bg-gray-900 bg-opacity-50 p-1">
                        <p class="text-white text-xs font-semibold">Enseignant</p>
                    </div>
                    <h3 className="text-xl text-center text-purple_bobby font-semibold">Description du projet</h3>
                    <p>Création d'un tableau de bord permettant d'analyser les différents statuts des enseignants mais aussi de pouvoir proposer des statistiques dans un dashboard</p><br/>
                    <h3 className="text-xl text-center text-purple_bobby font-semibold">Compétences utilisés</h3>
                    <p></p>
                </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                <div class="relative">
                    <Image class="w-full" src={bobbypic} alt="Picture of bobbyHR"/>
                    <div class="absolute top-0 right-0 bg-gray-900 bg-opacity-50 p-1">
                        <p class="text-white text-xs font-semibold">Bobby HR</p>
                    </div>
                    <h3 className="text-xl text-center text-purple_bobby font-semibold">Description du projet</h3>
                    <p>Création d’un outil de gestion RH qui permettra à terme de gérer les rôles et les missions des étudiants dans les différents projets.</p><br/>
                    <h3 className="text-xl text-center text-purple_bobby font-semibold">Compétences utilisés</h3>
                    <p>Compétences de conception web, Front/Back-End, Gestion de bases de données, ect..</p>
                </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                <div class="relative">
                    <Image class="w-full" src={emcpic} alt="Picture of EMC"/>
                    <div class="absolute top-0 right-0 bg-gray-900 bg-opacity-50 p-1">
                        <p class="text-white text-xs font-semibold">EMC</p>
                    </div>
                    <h3 className="text-xl text-center text-purple_bobby font-semibold">Description du projet</h3>
                    <p>Récole des données et enquêtes sur la circulation routière. Les missions restantes pour ce projet sont de continuer sur l'algorithme de classification pour le système de gestion de données envoyés par le radar</p><br/>
                    <h3 className="text-xl text-center text-purple_bobby font-semibold">Compétences utilisés</h3>
                    <p>ML, Python</p>
                </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                <div class="relative">
                    <Image class="w-full" src={cgrpic} alt="Picture of the cinema"/>
                    <div class="absolute top-0 right-0 bg-gray-900 bg-opacity-50 p-1">
                        <p class="text-white text-xs font-semibold">CGR</p>
                    </div>
                    <h3 className="text-xl text-center text-purple_bobby font-semibold">Description du projet</h3>
                    <p>Conception d'un outils d'analyse pour le cinéma CGR</p><br/>
                    <h3 className="text-xl text-center text-purple_bobby font-semibold">Compétences utilisés</h3>
                    <p>Python, PowerBI</p>
                </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                <div class="relative">
                    <Image class="w-full" src={logotfc} alt="Logo of TFC"/>
                    <div class="absolute top-0 right-0 bg-gray-900 bg-opacity-50 p-1">
                        <p class="text-white text-xs font-semibold">TFC</p>
                    </div>
                    <h3 className="text-xl text-center text-purple_bobby font-semibold">Description du projet</h3>
                    <p>Projet de traitement et d’analyse des données sur les tarifs et les clients du TFC afin de proposer des tarifs cohérents et optimaux.</p><br/>
                    <h3 className="text-xl text-center text-purple_bobby font-semibold">Compétences utilisés</h3>
                    <p></p>
                </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                <div class="relative">
                    <Image class="w-full" src={puydufou} alt="Logo of Puy du Fou"/>
                    <div class="absolute top-0 right-0 bg-gray-900 bg-opacity-50 p-1">
                        <p class="text-white text-xs font-semibold">Puy du Fou</p>
                    </div>
                    <h3 className="text-xl text-center text-purple_bobby font-semibold">Description du projet</h3>
                    <p>Projet de prévision du nombre de visiteurs sur le parc.</p><br/>
                    <h3 className="text-xl text-center text-purple_bobby font-semibold">Compétences utilisés</h3>
                    <p></p>
                </div>
            </div>
        </div>
        <div>
            <div className="text-center text-2xl mt-10">
                <a name = "competences"></a>
                <h1 className="text-3xl text-center text-purple_bobby font-bold">Nos compétences</h1>
                <p>SQL, Python, java, javascript, powerBI</p> 
            </div><br/>
            <div className="justify-items-center">
                <a name = "contact"></a>
                <h1 className="text-3xl text-center text-purple_bobby font-bold">Retrouvez-nous!</h1>
                <div class="flex items-stretch">
                    <a href="https://www.instagram.com/idea_2122/?igshid=YmMyMTA2M2Y%3D" target="_blank">
                    <Image class="place-items-center object-cover h-20 w-20" src={logoinstagram} alt="Logo d'Instagram"/>
                    </a>
                    <a href="https://www.linkedin.com/company/idea-miage/" target="_blank">
                    <Image class="place-items-center object-cover h-20 w-20" src={logolinkedin} alt="Logo de Linkedin"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
);}