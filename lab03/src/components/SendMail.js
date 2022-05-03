import { useState, useRef } from "react";
import "../styles/SendMail.css";
import { useNavigate } from "react-router-dom";
const SendMail = (props) => {
  const { mails } = props;
  console.log(mails);
  const [input, setInput] = useState({});
  const [modal, setModal] = useState("modal");

  const titleRef = useRef();
  const mailRef = useRef();
  const bodyRef = useRef();

  const navigate = useNavigate();
  const handleMenuClick = () => navigate("/", { replace: true });

  const HandleSubmit = (event) => {
    event.preventDefault();
    setInput({
      title: titleRef.current.value,
      mail: mailRef.current.value,
      body: bodyRef.current.value,
    });
    console.log(input);
    setModal("modal modal-move");
    setTimeout(function () {
      handleMenuClick();
    }, 4000);
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
      <div className={modal} onAnimationEnd={() => setModal("modal")}>
        Email send!
      </div>
      <h1>New mail</h1>
      <form className="new-mail" onSubmit={HandleSubmit}>
        <label>
          Title:
          <br />
          <input required type="text" name="title" ref={titleRef} />
        </label>
        <label>
          From (email):
          <br />
          <input required type="email" name="email" ref={mailRef} />
        </label>
        <label>
          Body:
          <br />
          <textarea required name="desc" ref={bodyRef} />
        </label>
        <input type="submit" value="Send mail(s)" />
      </form>
    </div>
  );
};

export default SendMail;
