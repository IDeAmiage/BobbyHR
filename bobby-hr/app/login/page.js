import "../globals.css"

export default function Page() {
    return (
        <main>
            <div>
                <h1 className="text-3xl">Connexion  </h1>
            </div>
            <div>
                <input type="text" placeholder="Nom d'utilisateur"></input>
                <input type="text" placeholder="Mot de passe"></input>
            </div>
        </main>
        );
}