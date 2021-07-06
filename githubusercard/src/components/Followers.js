import React from "react";
import axios from "axios";

class Followers extends React.Component {
  state = {
    followers: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/joeEscob1023/followers")
      .then((res) => {
        console.log(res.data);
        this.setState({
          followers: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h2>
          {this.state.followers.map((follower, index) => {
            return (
              <ul key={index}>
                {" "}
                <li>{follower.login}</li>
                <li>
                  <img alt="follower images" src={follower.avatar_url} />
                </li>
              </ul>
            );
          })}
        </h2>
      </div>
    );
  }
}

export default Followers;
