import React, { useContext } from 'react';
import { deleteNote, toggleNote } from '../reducer/actions';
import { Store } from '../reducer/reducer';

type note =  {
    item: {
        id: string, 
        status: boolean, 
        text: string
    }
}

const Note = ({ item }:  note) => {
    const { dispatch } = useContext(Store);
    const id = item.id;

    return (
        <div className='flex'> 
            <div className='flex note'>
                <input type='checkbox' checked={ item.status } onChange={ (e) => dispatch(toggleNote({id, e})) } />
                <p className={'note__text' + (item.status ? ' done' : '')}>{ item.text }</p>
            </div>
            <img src={ process.env.PUBLIC_URL + '/delete.png' } alt='delete icon' onClick={ () => dispatch(deleteNote(id)) } />
        </div>
    )
}

export default Note