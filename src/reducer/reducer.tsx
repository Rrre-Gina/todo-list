import React, { createContext, useReducer } from 'react';
import notesData from '../data/notesData.json'

const initialState = {
    notes: [...notesData],
}
type InitialStateType = {
    notes: { id: string, status: boolean, text: string }[]
}

type ACTION_TYPE =
  | { type: 'ADD_NOTE', payload: string }
  | { type: 'DELETE_NOTE', payload: string }
  | { type: 'TOGGLE_NOTE', payload: { id: string, e: React.ChangeEvent<HTMLInputElement> } }

export const Store = createContext<{ state: InitialStateType; dispatch: React.Dispatch<any>;}>({
    state: initialState,
    dispatch: () => null
});

const reducer = (state: typeof initialState, action: ACTION_TYPE) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state, 
                notes: [...state.notes, 
                    { text: action.payload, status: false, id: new Date().toISOString() }
                ]
            };
        case 'DELETE_NOTE': 
            return {
                ...state, 
                notes: [...state.notes.filter(notes => notes.id !== action.payload)]
            };
        case 'TOGGLE_NOTE':
            return {
                ...state, 
                notes: [...state.notes.map(item => {
                    if (item.id === action.payload.id) {
                        item.status = action.payload.e.target.checked
                    }
                    return item
                })]
            };
        default:
            return state;
    }
}

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Store.Provider value={{ state, dispatch }}>{ children }</Store.Provider>
}