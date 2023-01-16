import React from "react"
import { ADD_NOTE } from "./consts"
import { DELETE_NOTE } from "./consts"
import { TOGGLE_NOTE } from "./consts"

export const addNote = (text: string) => 
    ({
        type: ADD_NOTE,
        payload: text,
    })

export const deleteNote = (id: string) => 
    ({
        type: DELETE_NOTE,
        payload: id,
    })

export const toggleNote = (id: { id: string, e: React.ChangeEvent }) =>
    ({
        type: TOGGLE_NOTE,
        payload: id,
    })