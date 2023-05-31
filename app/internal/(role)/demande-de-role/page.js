
export default function RoleForm() {
  return (
    <>
  <form className="mt-4 grid justify-items-stretch">
  <h1 className="text-brown_bobby text-center text-4xl">Période X </h1>
  <h2 className="mt-7 text-center text-2xl font-bold">Choix des rôles pour la période X</h2>
  <h5 className="mt-10 text-center">
    Veuillez choisir dans l&apos;ordre de vos préférences le rôle ainsi que le
    projet sur lequel vous souhaitez participer :
  </h5>

  <div className="mt-4 flex place-content-center items-start space-x-7 ">
    <div className="bg-white_accent_bobby block w-1/6 rounded-t text-center ">
      <div className="mt-3">
      <label className="text-xl font-bold" > Voeux 1 </label>
      </div>
      <div className="border-brown_bobby mt-3 grid justify-items-stretch border-t text-center ">
        <p className="mb-2 mt-5 font-medium">Projet :</p>
        <select className="text-m mb-4 block rounded-md border border-slate-300 bg-white py-1 shadow-sm">
          <option></option>
          <option value="EMC"> EMC </option>
          <option value="BB"> Bobby HR </option>
          <option value="CGR"> Cinema CGR </option>
          <option value="Chapo"> CHAPO </option>
          <option value="Chapo"> TFC </option>
          <option value="Chapo"> Prospection </option>
        </select>
        <p className="mb-2 font-medium">Role :</p>
        <select className="text-m mb-4 block rounded-md border border-slate-300 bg-white py-1 shadow-sm">
          <option></option>
          <option value="PO"> Product Owner </option>
          <option value="SM"> Scrum Master </option>
          <option value="Dev"> Developpeur </option>
          <option value="Analyste"> Analyste </option>
        </select>
      </div>
    </div>
    <div className="bg-white_accent_bobby block w-1/6 rounded-t text-center">
    <div className="mt-3">
      <label className="text-xl font-bold" > Voeux 2 </label>
      </div>
      <div className="border-brown_bobby mt-3 grid justify-items-stretch border-t text-center ">
        <p className="mb-2 mt-5 font-medium">Projet :</p>
        <select className="text-m mb-4 block rounded-md border border-slate-300 bg-white py-1 shadow-sm">
          <option></option>
          <option value="EMC"> EMC </option>
          <option value="BB"> Bobby HR </option>
          <option value="CGR"> Cinema CGR </option>
          <option value="Chapo"> CHAPO </option>
          <option value="Chapo"> TFC </option>
          <option value="Chapo"> Prospection </option>
        </select>
        <p className="mb-2 font-medium">Role :</p>
        <select className="text-m mb-4 block rounded-md border border-slate-300 bg-white py-1 shadow-sm ">
          <option></option>
          <option value="PO"> Product Owner </option>
          <option value="SM"> Scrum Master </option>
          <option value="Dev"> Developpeur </option>
          <option value="Analyste"> Analyste </option>
        </select>
      </div>
    </div>
    <div className="bg-white_accent_bobby block w-1/6 rounded-t text-center">
    <div className="mt-3">
      <label className="text-xl font-bold" > Voeux 3 </label>
      </div>
      <div className="border-brown_bobby mt-3 grid justify-items-stretch border-t text-center ">
        <p className="mb-2 mt-5 font-medium">Projet :</p>
        <select className="text-m mb-4 block rounded-md border border-slate-300 bg-white py-1 shadow-sm">
          <option></option>
          <option value="EMC"> EMC </option>
          <option value="BB"> Bobby HR </option>
          <option value="CGR"> Cinema CGR </option>
          <option value="Chapo"> CHAPO </option>
          <option value="Chapo"> TFC </option>
          <option value="Chapo"> Prospection </option>
        </select>
        <p className="mb-2 font-medium">Role :</p>
        <select className="text-m mb-4 block rounded-md border border-slate-300 bg-white py-1 shadow-sm">
          <option></option>
          <option value="PO"> Product Owner </option>
          <option value="SM"> Scrum Master </option>
          <option value="Dev"> Developpeur </option>
          <option value="Analyste"> Analyste </option>
        </select>
      </div>
    </div>
  </div>
  <button className="bg-brown_bobby hover:bg-purple_bobby focus:ring-brown_bobby mt-5 h-10 w-32 justify-self-center rounded-lg font-medium text-white focus:outline-none focus:ring " type="submit">Valider</button>
</form>
      </>
  );
    }