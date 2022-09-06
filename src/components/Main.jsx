import {React, useState, useEffect} from 'react'
import CreateForm from './CreateForm'
import NoteCard from './NoteCard';

function Main() {

    const [modalStatus,setModalStatus] = useState(false);

    const [notes, setNotes] = useState([]);

    const addNote = (note) => {
        setNotes(notes.concat(note));
    }

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    }

    useEffect(() => {
        setNotes(JSON.parse(localStorage.getItem("noteList")));
    },[])


    useEffect(() => {
        localStorage.setItem("noteList",JSON.stringify(notes));
    },[notes])

  return (
    <>
       {modalStatus ? <CreateForm setModalStatus={setModalStatus} addNote={addNote}/> : null}

       <input type="text" placeholder='Search notes...' class="block p-4  w-1/2 text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-700 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

       <div class=" flex flex-row justify-between mt-4 mb-4 w-1/2" >
        <div class="flex flex-row justify-between text-base font-medium items-center w-1/2 ">
           <div class="bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5">All</div>
           <div>Home</div>
           <div>Work</div>
           <div>Personal</div> 
        </div>
        <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={() => setModalStatus(!modalStatus)}> + Add Note</button>
       </div>
        <div class='grid grid-cols-2 gap-4 max-w-1/2 w-1/2   overflow-hidden' >
        {notes.map((note) => {
            return <NoteCard note={note} key={note.id} deleteNote={deleteNote}/>
        })}
        </div>

    </>
  )
}

export default Main

