import { Routes, Route, HashRouter } from "react-router-dom";
import { useState } from "react";

import "./styles/App.css";
import Layout from "./components/Layout";
import NoPage from "./components/NoPage";
import Groups from "./components/Groups";
import Students from "./components/Students";
import Announcement from "./components/Announcement";
import NewStudent from "./components/NewStudent"; 
import NewGroup from "./components/NewGroup";
import SendMail from "./components/SendMail";
function App() {
  const [students, setStudents] = useState([
    {name:"Jan Kowalski",email:"example@example.com", desc:"Sample description", tags:["c++","C#"],subjects:["PIW","PiPG","OIAK"]},
    {name:"Jan Nowak",email:"example@example.com", desc:"Another information", tags:["c%","F$"],subjects:["PIW","PiPG"]},
    {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
  ]);
  const [groups, setGroups] = useState([
    {name: "Piwowcy", members: [["Jan Nowak","example@example.com"], ["Michał Kowalski","example@example.com"]], theme:"Frontend", desc:"sample description", subjects:["PIW", "OIAK"]},
    {name: "Gierkowcy", members: [["Józef Baszak","example@example.com"], ["Kamil Górski","example@example.com"]], theme:"Backend", desc:"ugh, there is something", subjects:["PIPG", "SO2"]}
  ])
  const mails = [];

  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

  axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      console.log(response.data);
    })

    axios.get('/lab03/data/data.json')
    .then(response => {
      console.log(response.data);
    })

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Students students={students} setStudents={setStudents} mails={mails}/>} />
          <Route path="NewStudent" element={<NewStudent students={students} setStudents={setStudents} />} />
          <Route path="Groups" element={<Groups groups={groups} setGroups={setGroups} mails={mails}/>} />
          <Route path="NewGroup" element={<NewGroup groups={groups} setGroups={setGroups}/>} />
          <Route path="SendMail" element={<SendMail mails={mails}/>} />
          <Route path="Announcement" element={<Announcement />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
