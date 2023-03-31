import "../globals.css"
import { useForm } from "react-hook-form";
import PocketBase from 'pocketbase';
import pb from '../util/pocketbase';
import Options from './composant_choice';
import ChoicePage from './composant_choice';
import { read_all_projet } from "../../crud/projetCrud"
import { read_all_role } from "../../crud/roleCrud"

async function getProjet() {
  const res = await read_all_projet()
  return res
}

async function getRole() {
  const res = await read_all_role()
  return res
}

export default async function PageChoixProjet() {
  const projetData = getProjet();
  const projets = await projetData;
  const roleData = getRole();
  const roles = await roleData;

  // const [roles, projets] = Promise.all(roleData, projetData)
  return (
    <ChoicePage projets={JSON.stringify(projets)} roles={JSON.stringify(roles)}></ChoicePage>
  )
}