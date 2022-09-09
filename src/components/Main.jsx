import { React, useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import CreateForm from "./CreateForm";
import NoteCard from "./NoteCard";
import uniqid from "uniqid";
import CategorySelection from "./CategorySelection";
import AddNoteImg from "../images/add-note.svg";
import SearchBar from "./SearchBar";

function Main() {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const [notes, setNotes] = useState([
    {
      title: "PlaceHolder",
      desc: "placeholder",
      type: "",
      id: uniqid(),
    },
  ]);

  const sortBySearch = (notes, query) => {
    if (!query) {
      return notes;
    }

    return notes.filter((note) => {
      const noteTitle = note.title.toLowerCase();
      return noteTitle.includes(query);
    });
  };

  const filteredProducts = sortBySearch(notes, searchValue);

  const filterDataByType = (type) => {
    if (type === "all") {
      return setNotes(JSON.parse(localStorage.getItem("noteList")));
    }

    setNotes(
      notes.filter((item) => {
        if (item.type === type) {
          return item;
        }
      })
    );
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    localStorage.setItem(
      "noteList",
      JSON.stringify(notes.filter((note) => note.id !== id))
    );
  };

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem("noteList")));
  }, []);

  return (
    <>
      <Outlet context={[notes, setNotes]} />

      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />

      <div class=" flex flex-row justify-between mt-4 mb-4 w-1/2">
        <CategorySelection filterDataByType={filterDataByType} />
        <button
          class="blue-btn"
          type="button"
          onClick={() => navigate("/note-app/create")}
        >
          + Add Note
        </button>
      </div>
      {filteredProducts.length <= 0 ? (
        <img class="mx-auto w-1/5 h-[680px]" src={AddNoteImg} alt="" />
      ) : (
        <div class="grid grid-cols-2 gap-4 max-w-1/2 w-1/2 overflow-hidden h-[680px]">
          {filteredProducts.map((note) => {
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
