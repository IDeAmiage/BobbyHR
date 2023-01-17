import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./globals.css";

function Role_choice() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Période X </h1>
      <h2>Choix des rôles pour la période X</h2>
      <h5>
        Veuillez choisir dans l'ordre de vos préférences le rôle ainsi que le
        projet que vous souhaitez :
      </h5>

      <div className="wish">
        <div className="wish1">
          <label> Voeux 1 </label>
          <div className="choice">
            Projet :
            <select {...register("List of choice")} className="choicee">
              <option></option>
              <option value="EMC"> EMC </option>
              <option value="BB"> Bobby HR </option>
              <option value="CGR"> Cinema CGR </option>
              <option value="Chapo"> Chapo </option>
            </select>
            <br></br>
            <br></br>
            Role :
            <select {...register("List of choice")} className="choicee">
              <option></option>
              <option value="Dev"> Developpeur </option>
              <option value="PO"> Product Owner </option>
              <option value="SM"> Scrum Master </option>
              <option value="Analyste"> Analyste </option>
            </select>
          </div>
        </div>
        <div className="wish2">
          <label> Voeux 2 </label>
          <div className="choice">
            Projet :
            <select {...register("List of choice")} className="choicee">
              <option></option>
              <option value="EMC"> EMC </option>
              <option value="BB"> Bobby HR </option>
              <option value="CGR"> Cinema CGR </option>
              <option value="Chapo"> Chapo </option>
            </select>
            <br></br>
            <br></br>
            Role :
            <select {...register("List of choice")} className="choicee">
              <option></option>
              <option value="Dev"> Developpeur </option>
              <option value="PO"> Product Owner </option>
              <option value="SM"> Scrum Master </option>
              <option value="Analyste"> Analyste </option>
            </select>
          </div>
        </div>
        <div className="wish3">
          <label className="title"> Voeux 3 </label>
          <div className="choice">
            Projet :
            <select {...register("List of choice")} className="choicee">
              <option></option>
              <option value="EMC"> EMC </option>
              <option value="BB"> Bobby HR </option>
              <option value="CGR"> Cinema CGR </option>
              <option value="Chapo"> Chapo </option>
            </select>
            <br></br>
            <br></br>
            Rôle :
            <select {...register("List of choice")} className="choicee">
              <option></option>
              <option value="Dev"> Developpeur </option>
              <option value="PO"> Product Owner </option>
              <option value="SM"> Scrum Master </option>
              <option value="Analyste"> Analyste </option>
            </select>
          </div>
        </div>
      </div>
      <input type="submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Role_choice />, rootElement);
