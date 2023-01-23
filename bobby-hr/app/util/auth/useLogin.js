import {useState} from "react";
import pb from "../pocketbase";

export default function useLogin() {
    const [isLoading, setLoading] = useState(false);

    async function login( {email, password}) {
        setLoading(true);
        try {
            const user = await pb.collection('users').authWithPassword(email, password);
        } catch (e) {
            alert(e);
        } finally {
            setLoading(false);
        }
    }

    return {login, isLoading};
}