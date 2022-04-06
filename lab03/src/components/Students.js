import { useState } from "react";
import "../styles/Students.css";
const Student = (props) => {
  const { students } = props;

  const [studentsQuery, setStudentsQuery] = useState("");
  const [optionState, setOptionState] = useState("tags");
  const HandleQueryChange = (event) => {
    setStudentsQuery(event.target.value);
  };

  const HandleChange = (event) => {
    // console.log(event.target.value)
    setOptionState(event.target.value);
    // optionState = event.target.value;
  };

  const GenerateList = (tags) => {
    return (
      <ul className="multiple">
        {tags.map((it, i) => {
          return (
            <li key={i}>
              {it}
              <br />
            </li>
          );
        })}
      </ul>
    );
  };

  const StudentsQueryHTML = students
    .filter((it) => 
    // {
      (optionState === "desc") ? it.desc.includes(studentsQuery) : 
      (optionState === "tags") ? it.tags.some(el => el.includes(studentsQuery)) : 
      (optionState === "subjects") ? it.subjects.some(el => el.includes(studentsQuery)) : true
      // switch (optionState) {
      //   case "desc":
      //     return it.desc.includes(studentsQuery);
      //   case "tags":
      //     return it.tags.includes(studentsQuery);
      //   case "subjects":
      //     return it.subjects.includes(studentsQuery);
      // }
    // }
      )
    .map((it, i) => {
      return (
        // <p >
        <ul key={i} className="ads">
          <li><h3>Name</h3> {it.name}</li>
          <li><h3>Description</h3> {it.desc}</li>
          <li><h3>Tags</h3> {GenerateList(it.tags)}</li>
          <li><h3>Subjects</h3> {GenerateList(it.subjects)}</li>
        </ul>
        // </p>
      );
    });

  // const toDosListHTML = studentQuery.map((it, i) => {
  //   return <p key={i}>{it}</p>;
  // });

  return (
    <div className="app">
      <h1>Student Page Body</h1>
      <select value={optionState} onChange={HandleChange}>
        <option value="tags">Tags</option>
        <option value="subjects">Subjects</option>
        <option value="desc">Description</option>
      </select>
      <input type="text" value={studentsQuery} onChange={HandleQueryChange} />
      <div className="content">
      {StudentsQueryHTML}
      </div>
    </div>
  );
};
export default Student;
