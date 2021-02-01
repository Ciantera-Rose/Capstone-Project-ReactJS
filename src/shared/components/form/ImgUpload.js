import React from "react";

const ImgUpload = (props) => {
  return (
    <div>
      <input
        id={props.id}
        style={{ display: "none" }}
        type="file"
        accept=".jpeg, .png, .jpg"
      />
    </div>
  );
};

export default ImgUpload;
