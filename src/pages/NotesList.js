import React, {useEffect, useState} from 'react';
import Listitem from '../components/Listitem';
import { ReactComponent as AddIcon } from '../assets/add.svg';
import { Link } from 'react-router-dom';

const NotesList = () => {
    let [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
        let response = await fetch('/api/notes/');
        let data = await response.json();
        setNotes(data);
    }

    return (
        <div className="notes">
            <div className="note-header">
                <h2 className="note-title">&#9782; Notes</h2>
                <p className="note-count">{notes.length}</p>
            </div>        
            <div className="notes-list">
                { notes.map((note, index) => (
                    <Listitem key={index} note={note}/>
                )) }
            </div>
            <Link to='/note/new' className="floating-button">
                <AddIcon />
            </Link>
        </div>
    );
}

export default NotesList;