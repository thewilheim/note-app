import {React, useState, useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import CreateForm from './CreateForm'
import NoteCard from './NoteCard';
import uniqid from "uniqid"
import CategorySelection from './CategorySelection';
import AddNoteImg from "../images/add-note.svg"

function Main() {

    const navigate = useNavigate()

    const [modalStatus,setModalStatus] = useState(false);

    const [notes, setNotes] = useState([
        {
            title: "PlaceHolder",
            desc:"placeholder",
            type: "",
            id: uniqid()
        }
    ]);

    const [sortedNotes, setSortedNotes] = useState([]);

    const deleteAll = () => {

    }

    const filterData = (e) => {
        console.log(e.toLowerCase());

        e.toLowerCase() === "all" ? setSortedNotes(notes) : setSortedNotes(notes.filter(item => item.type === e.toLowerCase()))

    }

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    }

    useEffect(() => {
        setNotes(JSON.parse(localStorage.getItem("noteList")));
    },[])

    useEffect(() => {
        localStorage.setItem("noteList",JSON.stringify(notes));
        setSortedNotes(notes)
    },[notes])

  return (
    <>

    <Outlet context={[notes, setNotes]}/>

       <input type="text" placeholder='Search notes...' class="searchBar"/>

       <div class=" flex flex-row justify-between mt-4 mb-4 w-1/2" >
        <CategorySelection filterData={filterData}/>
        <div>
        <button class="blue-btn" type="button" onClick={() => navigate("/create")}> + Add Note</button>

        </div>
       </div>
        {sortedNotes.length <= 0 ? <img  class="mx-auto w-1/5" src={AddNoteImg} alt="" /> 
        : 
        <div class='grid grid-cols-2 gap-4 max-w-1/2 w-1/2 overflow-hidden h-[680px]' >
        {sortedNotes.map((note) => {
            return <NoteCard note={note} key={note.id} deleteNote={deleteNote} Key={note.id}/>
        })}
        </div>
        }

    </>
  )
}

export default Main

