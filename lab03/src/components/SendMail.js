import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SendMail.css";
const SendMail = (props) => {
  const { mails } = props;
  console.log(mails);
  const [input, setInput] = useState({});
  const HandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const HandleSubmit = (event) => {
    event.preventDefault();
    // input.tags = tagList;
    // input.subjects = subList;
    // setStudents(
    //   students.concat({
    //     name: input.name,
    //     email: input.email,
    //     desc: input.desc,
    //     tags: input.tags,
    //     subjects: input.subjects,
    //   })
    // );
    // setStudents(students.concat([input]));
    // alert("Form submitted!");
    // console.log(students);
    // handleMenuClick();
  };
  return (
    <div className="app">
      <h1>New mail</h1>
      <form className="new-mail" onSubmit={HandleSubmit}>
        <label>
          Title:
          <br />
          <input required type="text" name="title" onChange={HandleChange} />
        </label>
        <label>
          From (email):
          <br />
          <input required type="email" name="email" onChange={HandleChange} />
        </label>
        <label>
          Body:
          <br />
          <textarea required name="desc" onChange={HandleChange} />
        </label>
        <input type="submit" value="Send mail(s)" />
      </form>
    </div>
  );
};

export default SendMail;
