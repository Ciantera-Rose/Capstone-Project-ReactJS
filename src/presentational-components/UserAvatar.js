import React from "react";

const UserAvatar = (props) => {
  return (
    <div className={`useravatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default UserAvatar;
