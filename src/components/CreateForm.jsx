import {React, useState} from 'react'
import uniqid from "uniqid"

function CreateForm({setModalStatus, addNote}) {

    const [note, setNote] = useState({
        title:"",
        desc:"",
        id: uniqid()
    })

  return (
<div id="defaultModal" tabindex="-1" aria-hidden="true" class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full m-auto">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto m-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                New Note 
                </h3>
            </div>
            <form class="p-6 space-y-6">
                <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <label htmlFor="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                    <input name="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" type="text" onChange={(e) => setNote({...note, title: e.target.value})} value={note.title}/>
                </div>
                <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <label htmlFor="desc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                    <textarea id="message" rows="4"  onChange={(e) => setNote({...note,desc: e.target.value})} value={note.desc} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                </div>
            </form>
            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => {
                addNote(note)
                setNote({
                    title:"",
                    desc:"",
                    id: uniqid()
                })
                setModalStatus(false)
                }}>Add Note</button>



                <button onClick={() => setModalStatus(false)} type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default CreateForm;


{/* 
     <div tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
         <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
             <form class="relative bg-white rounded-lg shadow dark:bg-gray-700" action="" onSubmit={(e) => {
                addNote(note)
                e.preventDefault();
                setNote({
                    title:"",
                    desc:"",
                    id: uniqid()
                })
            }}>

                <input type="text" onChange={(e) => setNote({...note, title: e.target.value})} value={note.title}/>
                <input type="text-box" onChange={(e) => setNote({...note, desc: e.target.value})} value={note.desc}/>

                <button>Add</button>
                <button onClick={() => setModalStatus(false)}>Cancel</button>

            </form>
        </div>
    </div> */}