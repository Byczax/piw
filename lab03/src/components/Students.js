import { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Students.css";
import { initState, reducer } from "./ReducerContext";

const Student = (props) => {
  const { students } = props;
  const [state, dispatcher] = useReducer(reducer, initState);

  const [studentsQuery, setStudentsQuery] = useState("");
  const [optionState, setOptionState] = useState("tags");
  const HandleQueryChange = (event) => {
    setStudentsQuery(event.target.value);
  };

  const HandleChange = (event) => {
    setOptionState(event.target.value);
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

  // const FetchPicture = () => {
  //   axios.get('https://random-memer.herokuapp.com/')
  //   .then(response => {
  //     return response.data;
  //   })
  // }
  const StudentsQueryHTML = students
    .filter((it) =>
      optionState === "desc"
        ? it.desc.includes(studentsQuery)
        : optionState === "tags"
        ? it.tags.some((el) => el.includes(studentsQuery))
        : optionState === "subjects"
        ? it.subjects.some((el) => el.includes(studentsQuery))
        : true
    )
    .map((it, i) => {
      return (
        <ul key={i} className="ads">
          <li>
            <img src={it.img} alt="student" />
          </li>
          <li>
            <h3>Name</h3> {it.name}
          </li>
          <li>
            <h3>Description</h3> {it.desc}
          </li>
          <li>
            <h3>Tags</h3> {GenerateList(it.tags)}
          </li>
          <li>
            <h3>Subjects</h3> {GenerateList(it.subjects)}
          </li>
          <li>
            <button className="observe" onClick={()=>dispatcher({type: "TOGGLE_STUDENT", payload: i})}>{state.students.includes(i) ? state.on : state.off}</button>
          </li>
          <li>
          <Link to={"/sendMail"} className="sendMail">Wyślij wiadomość</Link>
          </li>
          
        </ul>
      );
    });

  return (
    <div className="app">
      <h1>Students without friends</h1>
      <select value={optionState} onChange={HandleChange}>
        <option value="tags">Tags</option>
        <option value="subjects">Subjects</option>
        <option value="desc">Description</option>
      </select>
      <input type="text" value={studentsQuery} onChange={HandleQueryChange} />
      <div className="content">{StudentsQueryHTML}</div>
    </div>
  );
};
export default Student;
