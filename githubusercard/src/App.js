import React from "react";
import axios from "axios";
import User from "./components/User";
import "./App.css";
import Followers from "./components/Followers";

class App extends React.Component {
  state = {
    githubUsers: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/joeEscob1023")
      .then((res) => {
        console.log(res.data);
        this.setState({
          ...this.state,
          githubUsers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { login, avatar_url, bio } = this.state.githubUsers;
    return (
      <div className="App">
        <User login={login} avatar_url={avatar_url} bio={bio} />
        <h2 className="followers">Followers</h2>
        <div className="flexed">
          <Followers />
        </div>
      </div>
    );
  }
}

export default App;
