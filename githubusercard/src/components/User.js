import React from "react";

const User = (props) => {
  const { login, avatar_url, bio } = props;
  return (
    <div>
      <h1>{login}</h1>
      <h2>"{bio}"</h2>
      <img alt="profile_image" src={avatar_url} />
    </div>
  );
};

export default User;
