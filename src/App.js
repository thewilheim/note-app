import { Routes, Route } from "react-router-dom";
import "./App.css";
import CreateForm from "./components/CreateForm";
import EditForm from "./components/EditForm";
import Main from "./components/Main";

function App() {
  return (
    <div className="App-header">
      <Routes>
        <Route path="/note-app/" element={<Main />}>
          <Route path="create" element={<CreateForm />} />
          <Route path="edit/:id" element={<EditForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
