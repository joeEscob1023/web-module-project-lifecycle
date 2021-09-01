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
      <div className="flexed">
        {this.state.followers.map((follower, index) => {
          return (
            <ul key={index}>
              {" "}
              <div className="item">
                <li>
                  <h2>{follower.login}</h2>
                </li>
                <li>
                  <img alt="follower images" src={follower.avatar_url} />
                </li>
              </div>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default Followers;
