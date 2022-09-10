import { React, useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NoteCard from "./NoteCard";
import CategorySelection from "./CategorySelection";
import AddNoteImg from "../images/add-note.svg";
import SearchBar from "./SearchBar";
import uniqid from "uniqid";

function Main() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const [activeType, setActiveType] = useState("");

  const [notes, setNotes] = useState([]);

  const filterData = (type, searchValue) => {
    if ((type === "all" && searchValue) || (type === "" && searchValue)) {
      return notes.filter((note) => {
        return note.title.includes(searchValue);
      });
    } else if (
      (type === "all" && !searchValue) ||
      (type === "" && !searchValue)
    ) {
      return notes;
    } else if ((type && searchValue) || (type && !searchValue)) {
      return notes.filter((note) => {
        if (type.toLowerCase() === note.type.toLowerCase()) {
          return note.title.toLowerCase().includes(searchValue.toLowerCase());
        }
      });
    }
  };

  const filteredNotes = filterData(activeType, searchValue);

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <>
      <Outlet context={[notes, setNotes]} />
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div class=" flex flex-row justify-between mt-4 mb-4 w-1/2">
        <CategorySelection setActiveType={setActiveType} />
        <button
          class="blue-btn"
          type="button"
          onClick={() => navigate("/note-app/create")}
        >
          + Add Note
        </button>
      </div>
      {filteredNotes?.length <= 0 ? (
        <img class="mx-auto w-1/5 h-[680px]" src={AddNoteImg} alt="" />
      ) : (
        <div class="grid grid-cols-2 gap-4 max-w-1/2 w-1/2 overflow-hidden h-[680px]">
          {filteredNotes?.map((note) => {
            return (
              <NoteCard
                note={note}
                key={note.id}
                deleteNote={deleteNote}
                Key={note.id}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Main;
