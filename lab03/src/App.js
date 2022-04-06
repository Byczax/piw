import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./styles/App.css";
import Layout from "./components/Layout";
import NoPage from "./components/NoPage";
import Groups from "./components/Groups";
import Students from "./components/Students";
import Announcement from "./components/Announcement";
import NewStudent from "./components/NewStudent";

// const [toDosList, setToDoList] = useState(["Sprawdzić zadania", "Wpisać oceny", "uwalić paru Studentów"]);
  

function App() {
  const [students, setStudents] = useState([
    {name:"Jan Kowalski",email:"example@example.com", desc:"Sample description", tags:["c++","C#"],subjects:["PIW","PiPG","OIAK"]},
    {name:"Jan Nowak",email:"example@example.com", desc:"Another information", tags:["c%","F$"],subjects:["PIW","PiPG"]},
    {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
    {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
    // {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
    // {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
    // {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
    // {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
    // {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
    // {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
    // {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
    // {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
    // {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
    // {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
    // {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
    // {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
    // {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
    // {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
    // {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
    // {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
    // {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
    // {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
    // {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
    // {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
    // {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]},
    // {name:"Jan Jankowski",email:"example@example.com", desc:"Guten tagen", tags:["S*","@!"],subjects:["PIW","PiPG"]}
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Students students={students} setStudents={setStudents} />} />
          <Route path="Groups" element={<Groups />} />
          <Route path="Announcement" element={<Announcement />} />
          <Route path="NewStudent" element={<NewStudent students={students} setStudents={setStudents} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
