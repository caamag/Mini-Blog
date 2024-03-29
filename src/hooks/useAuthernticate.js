import { db } from '../firebase/config';

//firebase components
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth';

import { useEffect, useState } from 'react';


export const useAuthentication = () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    //cleanUp
    const [cancel, setCancel] = useState(false);

    const auth = getAuth();

    function checkIfIsCanceled() {
        if (cancel) {
            return;
        }
    };

    async function createUser(data) {
        checkIfIsCanceled();
        setLoading(true);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            return user;

        } catch (error) {
            console.log(error.message);
        }

        setLoading(false);
    };

    useEffect(() => {

        return () => setCancel(true);

    }, [])

    return {
        auth,
        createUser,
        error,
        loading
    }

}