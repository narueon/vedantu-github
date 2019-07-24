import React from "react";
import { connect } from "react-redux";
import Repo from "./Repo";
import {fetchRepoAPI} from '../actions/repo-action'
class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.showItems = this.showItems.bind(this);
  }
  componentDidMount() {
    this.props.fetchRepoAPI()
  }
  showItems(repoProps) {
    if (repoProps.length < 6) {
      return repoProps
    } else {
      let repos = [];
      for (let i = 0; i < 6; i++) {
        repos.push(repoProps[i]);
      }
      return repos
    }
  }
  
  render() {
    if(this.props.repos.length === 0){
      return <div>Loading...</div>
    }
    let reposToShow = this.showItems(this.props.repos)
    return (
      <div style={{ padding: 20 }}>
        <p>Popular Repositories</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "50% 50%",
            gridColumnGap: "15px",
            gridRowGap: "15px"
          }}
        >
          {reposToShow.map(repo => <Repo repo={repo} key={repo.id}/> )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    repos: state.repos
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchRepoAPI: () => dispatch(fetchRepoAPI())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
