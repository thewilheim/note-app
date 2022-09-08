import {React, useEffect, useState} from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import uniqid from "uniqid"

function EditForm() {

    const navigate = useNavigate()

    const [notes, setNotes] = useOutletContext()

    const {id} = useParams()

    const [note, setNote] = useState({})

    const editNote = () => {
        setNotes(notes.map(item => {
            return item.id === id ? note : item
        }));
    }


    useEffect(() => {
        setNote(notes.find(item => item.id === id));
    }, [])


  return (
<div id="defaultModal" tabindex="-1" aria-hidden="true" class="formContainer">
    <div class="formModal">
        <div class=" bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="border-bottom p-4">
                <h3 >
                <span class="text-gray-400">Editing:</span> {note.title}
                </h3>
            </div>
            <form class="p-6 space-y-6">
                <div>
                    <label htmlFor="title">Title</label>
                    <input name="title" type="text" onChange={(e) => setNote({...note, title: e.target.value})} value={note.title}/>
                </div>
                <div>
                    <label htmlFor="desc">Description</label>
                    <textarea id="message" rows="4"  onChange={(e) => setNote({...note,desc: e.target.value})} value={note.desc} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                </div>
            </form>
            <div class="flex items-center p-6 space-x-2 border-top">
                <button type="submit" class="blue-btn" onClick={() => {
                editNote(note)
                setNote({
                    title:"",
                    desc:"",
                    id: uniqid()
                })
                navigate(-1)
                }}>Edit Note</button>



                <button onClick={() => navigate(-1)} type="button" class="gray-btn">Cancel</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default EditForm;

