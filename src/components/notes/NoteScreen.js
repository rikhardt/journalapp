import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const {active:note} = useSelector( state => state.notes );
    const [formValues, handleInputChange, reset] =  useForm(note)
    const {body, title} = formValues;

    const dispatch = useDispatch();

    const activeId = useRef(note.id);

    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id
        }
    }, [note, reset])


    useEffect(() => {
        dispatch(activeNote(formValues.id, {...formValues}))
    }, [formValues, dispatch])


    const handleDelete = () => {
        dispatch(startDeleting(note.id));
    }

    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">

                <input 
                    type="text"
                    name="title"
                    placeholder="Some aweson title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                />

               <textarea
                    name="body"
                    placeholder="What happened today"
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}
               />

               {
                   (note.url) &&
                    <div className="notes__image">
                        <img
                            src={note.url} 
                            alt="imagen"                   
                        />
                    </div>
               }

            </div>

            <button 
                className="btn btn-danger"
                onClick={handleDelete}
                >
               Delete
            </button>

        </div>
    )
}
