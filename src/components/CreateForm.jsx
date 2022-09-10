import { React, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import uniqid from "uniqid";

function CreateForm() {
  const navigate = useNavigate();

  const [notes, setNotes] = useOutletContext();

  const [note, setNote] = useState({
    title: "",
    desc: "",
    type: "",
    id: uniqid(),
  });

  const addNote = () => {
    setNotes([...notes, note]);
    localStorage.setItem("noteList", JSON.stringify([...notes, note]));
  };

  return (
    <div
      id="defaultModal"
      tabIndex="-1"
      aria-hidden="true"
      className="formContainer"
    >
      <div className="formModal">
        <div className="bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="border-bottom p-4">
            <h3>New Note</h3>
          </div>
          <form className="p-6 space-y-6">
            <div className="flex justify-center items-center content-center">
              <div className="w-full">
                <label htmlFor="title">Title</label>
                <input
                  name="title"
                  type="text"
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                  value={note.title}
                />
              </div>
              <select
                onChange={(e) => setNote({ ...note, type: e.target.value })}
                className="text-white mt-7 ml-2 bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <option className="bg-gray-700 text-left" autoFocus>
                  Select A Category
                </option>
                <option className="bg-gray-700 text-left" value="home">
                  {" "}
                  Home
                </option>
                <option className="bg-gray-700 text-left" value="personal">
                  {" "}
                  Personal
                </option>
                <option className="bg-gray-700 text-left" value="work">
                  {" "}
                  Work
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="desc">Description</label>
              <textarea
                id="message"
                rows="4"
                onChange={(e) => setNote({ ...note, desc: e.target.value })}
                value={note.desc}
                placeholder="Your message..."
              ></textarea>
            </div>
          </form>
          <div className="border-top p-6 space-x-2">
            <button
              type="submit"
              className="blue-btn"
              onClick={() => {
                if (note.type === "") {
                  return console.log("error");
                }
                addNote(note);
                setNote({
                  title: "",
                  desc: "",
                  id: uniqid(),
                  type: "",
                });
                navigate(-1);
              }}
            >
              Add Note
            </button>

            <button
              onClick={() => navigate(-1)}
              type="button"
              className="gray-btn"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateForm;
