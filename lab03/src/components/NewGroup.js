import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NewGroup.css";
import { addNewGroup } from "../firebase/fireData";
const NewGroup = (props) => {
    const { groups, setGroups } = props;
    const [input, setInput] = useState({});
    const [userList, setUser] = useState([]);
    const [subList, setSub] = useState([]);

    const HandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput((values) => ({ ...values, [name]: value }));
    };

    const [userInput, setUserInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };
    const handleEmailInput = (e) => {
        setEmailInput(e.target.value);
    };
    const HandleAddUser = (event) => {
        event.preventDefault();
        if (userInput === "" || emailInput === "") {
            return;
        }
        const user = { name: userInput, email: emailInput }
        setUser(userList.concat([user]));
        // setUser((values) => ([ ...values, user ]));
        setUserInput("");
        setEmailInput("");
        console.log(userList);
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
    const handleMenuClick = () => navigate("/groups", { replace: true });

    const HandleSubmit = (event) => {
        event.preventDefault();
        if (userList.length < 2) {
            alert("uff, that's not it, can't be single... can't?? yes??");
            return;
        }

        input.members = userList;
        input.subjects = subList;
        // setGroups(
        //   groups.concat({
        //     name: input.name,
        //     members: input.members,
        //     desc: input.desc,
        //     subjects: input.subjects,
        //     theme: input.theme,
        //   })
        // );
        // setGroups(groups.concat([input]));
        addNewGroup(input);
        alert("Form submitted!");
        console.log(groups);
        handleMenuClick();
    };

    const GenerateList = (users) => {
        return (
            <ul className="multiple">
                {users.map((it, i) => {
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
    const GenerateUserList = (users) => {
        // console.log(users);
        if (Object.entries(users).length === 0) {
            return null;
            // console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        } else {
          console.log(users)
            return (
                <ul className="single">
                    {users.map((it, i) => {
                        return (
                            <li key={i}>
                                {`${it.name} ${it.email}`}
                                <br />
                            </li>
                        );
                    })}
                </ul>
            );
        }
    };

    return (
        <div className="new-group-app">
            <h1>NewGroup Page Body</h1>
            <form className="new-group" onSubmit={HandleSubmit}>
                <label>
                    Name:
                    <input
                        required
                        type="text"
                        name="name"
                        placeholder="group name"
                        onChange={HandleChange}
                    />
                </label>
                <label>
                    Theme:
                    <input
                        required
                        type="text"
                        name="theme"
                        onChange={HandleChange}
                    />
                </label>
                <div>
                    <label>
                        Member & Email
                        <input
                            // required
                            type="text"
                            name="user"
                            placeholder="Member"
                            value={userInput}
                            onChange={handleUserInput}
                        />
                        <input
                            // required
                            type="email"
                            name="email"
                            placeholder="email"
                            value={emailInput}
                            onChange={handleEmailInput}
                        />
                    </label>
                    <button onClick={HandleAddUser}>Add member to group</button>
                    {GenerateUserList(userList)}
                </div>
                {/* <label>
          Users:
          <input
            type="text"
            name="users"
            value={userInput}
            onChange={handleUserInput}
          />
          <button onClick={HandleAddUser}>add user</button>
          {GenerateList(userList)}
        </label> */}
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
                    <textarea required name="desc" onChange={HandleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default NewGroup;
