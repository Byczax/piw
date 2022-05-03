import { Routes, Route, HashRouter } from "react-router-dom";
import { useState, useEffect } from "react";

import "./styles/App.css";
import Layout from "./components/Layout";
import NoPage from "./components/NoPage";
import Groups from "./components/Groups";
import Students from "./components/Students";
import Announcement from "./components/Announcement";
import NewStudent from "./components/NewStudent";
import NewGroup from "./components/NewGroup";
import SendMail from "./components/SendMail";
import axios from "axios";
import LogIn from "./components/LogIn";
import UserContext from "./components/UserContext";

function App() {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const mails = [];

  useEffect(() => {
    axios.get("/lab03/data/data.json").then((response) => {
      setStudents(response.data.students);
      setGroups(response.data.groups);
    });
  }, []);

  return (
    <UserContext.Provider value={useState("")}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Students
                students={students}
                setStudents={setStudents}
                mails={mails}
              />
            }
          />
          <Route
            path="NewStudent"
            element={
              <NewStudent students={students} setStudents={setStudents} />
            }
          />
          <Route
            path="Groups"
            element={
              <Groups groups={groups} setGroups={setGroups} mails={mails} />
            }
          />
          <Route
            path="NewGroup"
            element={<NewGroup groups={groups} setGroups={setGroups} />}
          />
          <Route path="SendMail" element={<SendMail mails={mails} />} />
          <Route path="Announcement" element={<Announcement />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
    </UserContext.Provider>
  );
}

export default App;
