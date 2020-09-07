import React, { useEffect, useState } from "react";
import Page from "../../components/Page";
import { connect } from "react-redux";
import { getUser } from "../../redux/userReducer";
import axios from "axios";

function Profile(props) {

const [pic, setPic] = useState("https://www.clipartkey.com/mpngs/m/29-297748_round-profile-image-placeholder.png")



  useEffect(() => {
    getUser();
    if (props.user.info.profile_pic) {
      setPic(props.user.info.profile_pic)
    }
  }, []);

  return (
    <Page>
      <div
        style={{
          width: "200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          top: "10px",
        }}
      >
        <img
          className="profile-image"
          src={pic}
          style={{ width: "150px", height: "150px" }}
        />
        <h1>{props.user.info.username}</h1>
      </div>
    </Page>
  );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getUser })(Profile);
