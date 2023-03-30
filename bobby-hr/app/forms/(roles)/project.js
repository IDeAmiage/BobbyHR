'use client';

import "../../globals.css";
import { useFormContext } from 'react-hook-form';

export default function Projects({projects}) {
    const { register } = useFormContext();
    console.log(projects)

    return (
        <select {...register("projet", { required: true })}>
            {Object.keys(projects).forEach(project => {
                <option key={project.nom} value={project.nom}>{project.nom}</option>
                console.log(project.nom)
            })}
        </select>
    );
}