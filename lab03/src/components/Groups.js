import React from "react";
import { Link } from "react-router-dom";
class Groups extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchOption: "name",
            query: "",
        };
    }
    HandleSearchChange = (event) => {
        this.setState({
            searchOption: event.target.value,
        });
    };
    HandleQueryChange = (event) => {
        this.setState({
            query: event.target.value,
        });
    };

    GenerateList = (tags) => {
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

    GenerateUserList = (members) => {
        return (
            <ul className="multiple">
                {members.map((it, i) => {
                    return (
                        <li key={i}>
                            {it.name}
                            <br />
                        </li>
                    );
                })}
            </ul>
        );
    };

    // HandleGroupClick = () => navigate("/sendMail", { replace: true });
    // Home = (emails) => {
    // event.preventDefault();
    // const navigate = useNavigate();
    // window.location.assign('sendMail');
    // console.log(emails[0])
    // this.props.navigate("/sendMail", { replace: true });
    // console.log("A")
    // navigate("/about")
    // return (
    //     <>
    //       <h1 style={{color:"green"}}>GeeksForGeeks</h1>
    //       <button onClick={()=>}>About</button>
    //     </>
    // )
    // };
    sendEmailToGroup = (event, value) => {
        // console.log("click");
        // console.log(event.target)
        console.log(value);
        const emails = this.props.groups
            .filter((it) => it.name.includes(value))
            .map((it, i) => {
                return it.members.map((x) => x[1]);
            });
        console.log(emails);
        // this.Home(emails);
        // <Redirect to="/sendEmail" />
        // const navigate = ;
        // const history = useHistory();
        // const home = () => {
        //     history.push("/newMail");
        // }
        // this.HandleGroupClick();
        // SendMail(emails);
        // navigate("/sendMail", { replace: true });
        // navigate("/newMail", { replace: true });
        //calculate your data here
        //then redirect:
        // this.props.history.push({
        // pathname: '/SendMail',
        // state: emails // your data array of objects
        // })
        /* context.router.push({ //browserHistory.push should also work here
      pathname: "./SendMail.js",
      state: {yourCalculatedData: emails}
    }); */
    };
    render() {
        // console.log(this.props.groups);
        const GroupsQueryHTML = this.props.groups
            .filter((it) =>
                this.state.searchOption === "desc"
                    ? it.desc.includes(this.state.query)
                    : this.state.searchOption === "theme"
                    ? it.theme.includes(this.state.query)
                    : this.state.searchOption === "name"
                    ? it.name.includes(this.state.query)
                    : this.state.searchOption === "subject"
                    ? it.subject.includes(this.state.query)
                    : true
            )
            .map((it, i) => {
                return (
                    <ul
                        key={i}
                        className="ads"
                        onClick={(e) => this.sendEmailToGroup(e, it.name)}
                    >
                        <li>
                            <h3>Name</h3> <p className="name">{it.name}</p>
                        </li>
                        <li>
                            <h3>Theme</h3> <p>{it.theme}</p>
                        </li>

                        <li>
                            <h3>Description</h3> <p>{it.desc}</p>
                        </li>
                        <li>
                            <h3>Subject</h3> {this.GenerateList(it.subjects)}
                        </li>
                        <li>
                            <h3>Members</h3> {this.GenerateUserList(it.members)}
                        </li>
                        <li>
                            <Link to={"/sendMail"} className="sendMail">
                                Wyślij wiadomość
                            </Link>
                        </li>
                    </ul>
                );
            });

        return (
            <div className="app">
                <h1>Chad groups for free exploitation</h1>
                <select onChange={this.HandleSearchChange}>
                    <option value="name">Name</option>
                    <option value="subject">Subject</option>
                    <option value="theme">Theme</option>
                    <option value="desc">Description</option>
                </select>
                <input
                    type="text"
                    value={this.state.query}
                    onChange={this.HandleQueryChange}
                />
                <div className="content">{GroupsQueryHTML}</div>
            </div>
        );
    }
}

export default Groups;
