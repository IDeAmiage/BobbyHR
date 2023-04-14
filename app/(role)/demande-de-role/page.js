
export default function RoleForm() {
  return (
  <form className="mt-4 grid justify-items-stretch">   
  <h1 className="text-brown_bobby text-4xl text-center">Période X </h1>
  <h2 className="text-center mt-7 text-2xl font-bold">Choix des rôles pour la période X</h2>
  <h5 className="text-center mt-10">
    Veuillez choisir dans l'ordre de vos préférences le rôle ainsi que le
    projet sur lequel vous souhaitez participer :
  </h5>

  <div className="flex items-start space-x-7 mt-4 place-content-center ">
    <div className="rounded-t bg-white_accent_bobby block text-center w-1/6 ">
      <div className="mt-3">
      <label className="text-xl font-bold" > Voeux 1 </label>
      </div>
      <div className="text-center grid justify-items-stretch border-t border-brown_bobby mt-3 ">
        <p className="mb-2 mt-5 font-medium">Projet :</p>
        <select className="mb-4 block py-1 bg-white border border-slate-300 rounded-md text-m shadow-sm">
          <option></option>
          <option value="EMC"> EMC </option>
          <option value="BB"> Bobby HR </option>
          <option value="CGR"> Cinema CGR </option>
          <option value="Chapo"> CHAPO </option>
          <option value="Chapo"> TFC </option>
          <option value="Chapo"> Prospection </option>
        </select>
        <p className="mb-2 font-medium">Role :</p>
        <select className="mb-4 block py-1 bg-white border border-slate-300 rounded-md text-m shadow-sm">
          <option></option>
          <option value="PO"> Product Owner </option>
          <option value="SM"> Scrum Master </option>
          <option value="Dev"> Developpeur </option>
          <option value="Analyste"> Analyste </option>
        </select>
      </div>
    </div>
    <div className="rounded-t bg-white_accent_bobby block text-center w-1/6">
    <div className="mt-3">
      <label className="text-xl font-bold" > Voeux 2 </label>
      </div>
      <div className="text-center grid justify-items-stretch border-t border-brown_bobby mt-3 ">
        <p className="mb-2 mt-5 font-medium">Projet :</p>
        <select className="mb-4 block py-1 bg-white border border-slate-300 rounded-md text-m shadow-sm">
          <option></option>
          <option value="EMC"> EMC </option>
          <option value="BB"> Bobby HR </option>
          <option value="CGR"> Cinema CGR </option>
          <option value="Chapo"> CHAPO </option>
          <option value="Chapo"> TFC </option>
          <option value="Chapo"> Prospection </option>
        </select>
        <p className="mb-2 font-medium">Role :</p>
        <select className="mb-4 block py-1 bg-white border border-slate-300 rounded-md text-m shadow-sm ">
          <option></option>
          <option value="PO"> Product Owner </option>
          <option value="SM"> Scrum Master </option>
          <option value="Dev"> Developpeur </option>
          <option value="Analyste"> Analyste </option>
        </select>
      </div>
    </div>
    <div className="rounded-t bg-white_accent_bobby block text-center w-1/6">
    <div className="mt-3">
      <label className="text-xl font-bold" > Voeux 3 </label>
      </div>
      <div className="text-center grid justify-items-stretch border-t border-brown_bobby mt-3 ">
        <p className="mb-2 mt-5 font-medium">Projet :</p>
        <select className="mb-4 block py-1 bg-white border border-slate-300 rounded-md text-m shadow-sm">
          <option></option>
          <option value="EMC"> EMC </option>
          <option value="BB"> Bobby HR </option>
          <option value="CGR"> Cinema CGR </option>
          <option value="Chapo"> CHAPO </option>
          <option value="Chapo"> TFC </option>
          <option value="Chapo"> Prospection </option>
        </select>
        <p className="mb-2 font-medium">Role :</p>
        <select className="mb-4 block py-1 bg-white border border-slate-300 rounded-md text-m shadow-sm">
          <option></option>
          <option value="PO"> Product Owner </option>
          <option value="SM"> Scrum Master </option>
          <option value="Dev"> Developpeur </option>
          <option value="Analyste"> Analyste </option>
        </select>
      </div>
    </div>
  </div>
  <button className="justify-self-center mt-5 w-32 h-10 rounded-lg bg-brown_bobby font-medium text-white hover:bg-purple_bobby focus:outline-none focus:ring focus:ring-brown_bobby " type="submit">Valider</button>
</form>
  );}