'use client';

import "../../globals.css";
import { useFormContext } from 'react-hook-form';

export default function Projects({projects}) {
    const { register } = useFormContext();
    
    return (
        <select {...register("projet", { required: true })}>
            {JSON.parse(projects).map(project => (
                <option key={project.id} value={project.id}>{project.nom}</option>
            ))}
        </select>
    );
}