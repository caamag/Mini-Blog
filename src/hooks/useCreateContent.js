
import { useState, useEffect, useReducer } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const initialState = {
    loading: null,
    error: null
}

const insertReducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return { loading: true, error: null }
        case 'INSERTED_DOC':
            return { loading: false, error: null }
        case 'ERROR':
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const useCreateContent = (docCollection) => {
    const [response, dispatch] = useReducer(insertReducer, initialState);

    //memory leak
    const [cancelled, setCancelled] = useState(false);

    function checkCancelled(action) {
        if (!cancelled) {
            dispatch(action);
        }
    }

    async function inserDocument(document) {

        checkCancelled({
            type: 'LOADING',
            payload: inserDocument
        })

        try {

            const newDocument = { ...document, createAt: Timestamp.now() };
            const insertedDocument = await addDoc(
                collection(db, docCollection),
                newDocument
            )

            checkCancelled({
                type: 'INSERTED_DOC',
                payload: inserDocument
            })

        } catch (error) {
            checkCancelled({
                type: 'ERROR',
                payload: error.message
            })
        }
    }

    useEffect(() => {
        return () => setCancelled(true);
    }, [])

    return {
        inserDocument,
        response
    }
};