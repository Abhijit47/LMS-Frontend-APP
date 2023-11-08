import React, { PureComponent } from "react";

const ProfileWrapper = ({ sectionName = "", children = PureComponent }) => {
  return <div className="profile-children">{children}</div>;
};

export default ProfileWrapper;
