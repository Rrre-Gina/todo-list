import React, { useContext } from 'react';
import Note from './Note';
import { Store } from '../reducer/reducer';

const List = () => {  
    const { state } = useContext(Store); 

    return (
        <React.Fragment>
            { state.notes?.map(item => 
                <Note 
                    key={ item.id } 
                    item={ item }  
                />
            ) }
        </React.Fragment>
    )
}

export default List 