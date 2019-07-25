import React from "react";
import { connect } from "react-redux";
import { Button } from "./styled";
import fetchUser, {fetchUserFail, fetchUserStart} from "../actions/user-action";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {}
    };
  }
  componentDidMount() {
    this.fetchUserData();
  }
  fetchUserData() {
    this.props.fetchUserStart()
    fetch("https://api.github.com/users/supreetsingh247")
      .then(response => {
        if(!response.ok){
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .then(json => this.props.fetchUser(json))
      .catch(error => this.props.fetchUserFail(error))
  }
  render() {
    // console.log(this.props);
    let { user, error, loading } = this.props.user
    if (loading === true) {
      return <div>Loading...</div>;
    }
    if (error){
      return <div>{error}</div>
    }
    let {
      avatar_url,
      location,
      email,
      bio,
      name,
      login,
      company
    } = user;
    return (
      <div>
        <div
          style={{ display: "flex", flexDirection: "column", minWidth: 280 }}
        >
          <figure style={{ padding: 0, margin: 0 }}>
            <img
              src={avatar_url}
              style={{ width: 260, height: 260, borderRadius: 6 }}
              alt="User"
            />
            <figcaption style={{ padding: "10px 0" }}>
              <h1
                style={{
                  padding: 0,
                  margin: 0,
                  fontFamily: "sans-serif",
                  fontSize: "24px"
                }}
              >
                {name}
              </h1>
              <p
                style={{
                  padding: 0,
                  margin: 0,
                  color: "rgba(0,0,0,0.6)",
                  fontFamily: "sans-serif"
                }}
              >
                {login}
              </p>
            </figcaption>
          </figure>
          <Button type="submit">Follow</Button>
          <div>
            <p style={{ maxWidth: 260, overflow: "wrap" }}>{bio}</p>
            {company !== null ? (
              <p>
                <i className="ion-person-stalker" style={{fontSize: 24}}/> {company}
              </p>
            ) : null}
            {location !== null ? (
              <p>
                <i className="ion-ios-location-outline" style={{fontSize: 24}}/> {location}
              </p>
            ) : null}
            <p>
              <i className="ion-ios-email-outline" style={{fontSize: 24}}/> <a href="mailto:supreetsingh.247@gmail.com">supreetsingh.247@gmail.com</a>
            </p>
          </div>
          <a href="#" style={{ textDecoration: "none" }}>
            block or report user
          </a>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchUser: data => dispatch(fetchUser(data)),
    fetchUserFail: data => dispatch(fetchUserFail(data)),
    fetchUserStart: data => dispatch(fetchUserStart())


  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
