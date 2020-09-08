import React, { useEffect, useState } from "react";
import Page from "../../components/Page";
import { connect } from "react-redux";
import { getUser } from "../../redux/userReducer";
import axios from "axios";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";

function Profile(props) {
  const [pic, setPic] = useState(
    "https://www.clipartkey.com/mpngs/m/29-297748_round-profile-image-placeholder.png"
  );
  const [updateProfile, setUpdateProfile] = useState(false);

  useEffect(() => {
    getUser();
    if (props.user.info.profile_pic) {
      setPic(props.user.info.profile_pic);
    }
  }, []);

  const toggleUpdateProfile = () => setUpdateProfile(!updateProfile);

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
        <Tooltip
          title="Edit Profile"
          placement="right"
          arrow
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <Fab color="primary" onClick={toggleUpdateProfile}>
            <EditIcon />
          </Fab>
        </Tooltip>
      </div>
    </Page>
  );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getUser })(Profile);
