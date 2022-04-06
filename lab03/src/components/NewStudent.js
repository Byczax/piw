import React, { Component, StrictMode, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NewStudent.css";
const NewStudent = (props) => {
  const { students, setStudents } = props;
  const [input, setInput] = useState({});
  const [tagList, setTag] = useState([]);
  const [subList, setSub] = useState([]);

  const HandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  let tagInput = React.createRef();
  const HandleAddTag = (event) => {
    event.preventDefault();
    setTag(tagList.concat([tagInput.current.value]));
    console.log(tagList);
    console.log(tagInput.current.value);
    // tagInput.setState({tags: ""});
    tagInput.refs.value = '';
    // this.tagInput.value = "";
    // tagInput.current
    // tagInput.current.value = "";
    // console.log(tagInput.current);
    // document.getElementById("tags").value = "";
    // tagInput.setState(value = "");
    // setState(tagInput: "")
    // tagInput.setState = "";
  };

  const navigate = useNavigate();
  const handleMenuClick = () => navigate("/", { replace: true });

  const HandleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    // setInput(input.tags.split(" "))
    // setStudents(
    //   students.concat(
    //     // {
    //     //   input.name

    //     // }

    //   )
    // )
    setStudents(students.concat([input]));
    setInput("");
    alert("Form submitted!");
    {
      handleMenuClick();
    }
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

  return (
    <div className="new-student-app">
      <h1>NewStudent Page Body</h1>
      <form className="new-student" onSubmit={HandleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={input.name || ""}
            onChange={HandleChange}
          />
        </label>
        <label>
          Email:
          <input
          required
            type="email"
            name="email"
            value={input.email || ""}
            // value={input}
            onChange={HandleChange}
          />
        </label>

        <label>
          Tags:
          <input
            type="text"
            name="tags"
            id="tags"
            // value={input.tags || ""}
            onChange={HandleChange}
            ref={tagInput}
          />
          <button onClick={HandleAddTag}>add tag</button>
          {GenerateList(tagList)}
        </label>
        <label>
          Subjects:
          <input
            type="text"
            name="subjects"
            value={[input.subjects] || ""}
            onChange={HandleChange}
          />
          <button>add subject</button>
        </label>
        <label>
          Description:
          <textarea
            // type="email"
            name="desc"
            value={input.desc || ""}
            onChange={HandleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewStudent;
