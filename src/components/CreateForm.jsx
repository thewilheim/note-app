import {React, useState} from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import uniqid from "uniqid"

function CreateForm() {

    const navigate = useNavigate()

    const [notes, setNotes] = useOutletContext()

    const [note, setNote] = useState({
        title:"",
        desc:"",
        type: "",
        id: uniqid()
    })


    const addNote = () => {
        setNotes([...notes, note])
    }


  return (
<div id="defaultModal" tabindex="-1" aria-hidden="true" class="formContainer">
    <div class="formModal">
        <div class="bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="border-bottom p-4">
                <h3>
                New Note 
                </h3>
            </div>
            <form class="p-6 space-y-6">
                <div>
                    <label htmlFor="title" >Title</label>
                    <input name="title" type="text" onChange={(e) => setNote({...note, title: e.target.value})} value={note.title}/>
                    <select name="cars" id="cars" onChange={(e) => setNote({...note, type: e.target.value})}>
                        <option value="home">Home</option>
                        <option value="personal">Personal</option>
                        <option value="work">Work</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="desc" >Description</label>
                    <textarea id="message" rows="4"  onChange={(e) => setNote({...note,desc: e.target.value})} value={note.desc}  placeholder="Your message..."></textarea>
                </div>
            </form>
            <div class="border-top p-6 space-x-2">
                <button type="submit" class="blue-btn" onClick={() => {
                addNote(note)
                setNote({
                    title:"",
                    desc:"",
                    id: uniqid()
                })
                navigate(-1)
                }}>Add Note</button>



                <button onClick={() => navigate(-1)} type="button" class="gray-btn">Cancel</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default CreateForm;

