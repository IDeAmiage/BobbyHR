export default function RoleForm() {
    return <form>
      <h2>Saisie des Rôles</h2>
      <label>Role:</label><br></br><br></br>
      <input type="text" id="frole" name="frole" value="Developpeur"/><br></br><br></br>
      <label>Projet:</label><br></br><br></br>
      {/* <input type="text" id="box" name="comboboxbox"/> */}
      <select name="list" onChange="combo(this, 'box)">
          <option>option 1</option>
          <option>option 2</option>
          <option>option 3</option>
          <option> option 4 </option>
          <option> option 5 </option>
      </select><br></br><br></br>
      <label>Nombre de M1:</label><br></br><br></br>
      <input type="text" id="fm1" name="fm1" value="2"/><br></br><br></br>
      <label>Nombre de M2:</label><br></br><br></br>
      <input type="text" id="fm2" name="fm2" value="2"/><br></br><br></br>
      <input type="submit" value="Submit"/>
    </form>;
  }

  //Avec rôle, projet et nombre de M1 & M2 attendu

  // <form>
  //   <label for="fname">First name:</label><br>
  //   <input type="text" id="fname" name="fname" value="John"><br>
  //   <label for="lname">Last name:</label><br>
  //   <input type="text" id="lname" name="lname" value="Doe"><br><br>
  //   <input type="submit" value="Submit">
  //   </form>