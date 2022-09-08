import React from 'react'
import { useNavigate } from 'react-router-dom'

function NoteCard({note, deleteNote}) {

  const navigate = useNavigate()

  return (
    <div class='noteCard h-[340px]'>
        <div class="flex flex-row align-center justify-between mb-3" >
        <div class="flex text-center w-1/2">
        <input type="checkbox" class='mr-2' />
        <h1 class="text-2xl whitespace-nowrap">{note.title}</h1>
        </div>
        <div class="flex justify-between w-1/4">
        <button onClick={() => navigate(`/edit/${note.id}`)}>Edit</button>
        <button onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
        </div>
        <p class="h-60 min-h-full text-base">{note.desc}</p>
    </div>
  )
}

export default NoteCard

