import React from "react";
import Profile from "./Profile";
import RepoList from "./RepoList";
import RepoNav from "./RepoNavbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ display: "flex", padding: "0 5%", margin: '5%' }}>
      <Profile />
      <div style={{ display: "flex", flexDirection: 'column'}}>
        <RepoNav />
        <RepoList />
      </div>
    </div>
    );
  }
}

export default App;