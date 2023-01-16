import React, { useContext } from 'react';
import { Store } from '../reducer/reducer';
import { addNote } from '../reducer/actions';

const AddNote = () => {
    const { dispatch } = useContext(Store);
    const text = React.createRef<HTMLInputElement>();

    const handleAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { 
        e.preventDefault(); 
        if (text.current.value.trim()) {
            dispatch(addNote(text.current.value))
        }
        text.current.value = ''
    }
    
    return (
        <div className='flex form'> 
            <input type='text' className='input' defaultValue='' ref={ text } />
            <button className='btn' onClick={(e) => handleAdd(e) }>Добавить</button>
        </div>
    )
}

export default AddNote