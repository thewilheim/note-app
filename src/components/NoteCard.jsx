import React from 'react'

function NoteCard({note, deleteNote}) {
  return (
    <div class='block p-5 w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-lg'>
        <div class="flex flex-row align-center justify-between mb-3" >
        <div class="flex text-center w-1/2">
        <input type="checkbox" class='mr-2' />
        <h1 class="text-2xl">{note.title}</h1>
        </div>
        <div class="flex justify-between w-1/4">
        <button>Edit</button>
        <button onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
        </div>
        <p class="h-60 min-h-full text-base">{note.desc}</p>
    </div>
  )
}

export default NoteCard

