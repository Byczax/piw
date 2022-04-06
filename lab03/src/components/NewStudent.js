import { useState } from "react";
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

  const [tagInput, setTagInput] = useState("");
  const handleTagInput = (e) => {
    setTagInput(e.target.value);
  };
  const HandleAddTag = (event) => {
    event.preventDefault();
    if (tagInput === "") {
      return;
    }
    setTag(tagList.concat([tagInput]));
    setTagInput("");
  };

  const [subInput, setSubInput] = useState("");
  const handleSubInput = (e) => {
    setSubInput(e.target.value);
  };
  const HandleAddSub = (event) => {
    event.preventDefault();
    if (subInput === "") {
      return;
    }
    setSub(subList.concat([subInput]));
    setSubInput("");
  };

  const navigate = useNavigate();
  const handleMenuClick = () => navigate("/", { replace: true });

  const HandleSubmit = (event) => {
    event.preventDefault();
    input.tags = tagList
    input.subjects = subList
    setStudents(
      students.concat({
        name: input.name,
        email: input.email,
        desc: input.desc,
        tags: input.tags,
        subjects: input.subjects,
      })
    );
    setStudents(students.concat([input]));
    alert("Form submitted!");
    console.log(students);
    handleMenuClick();
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
            required
            type="text"
            name="name"
            onChange={HandleChange}
          />
        </label>
        <label>
          Email:
          <input
            required
            type="email"
            name="email"
            onChange={HandleChange}
          />
        </label>

        <label>
          Tags:
          <input
            type="text"
            name="tags"
            value={tagInput}
            onChange={handleTagInput}
          />
          <button onClick={HandleAddTag}>add tag</button>
          {GenerateList(tagList)}
        </label>
        <label>
          Subjects:
          <input
            type="text"
            name="subjects"
            value={subInput}
            onChange={handleSubInput}
          />
          <button onClick={HandleAddSub}>add subject</button>
          {GenerateList(subList)}
        </label>
        <label>
          Description:
          <textarea
            required
            name="desc"
            onChange={HandleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewStudent;
