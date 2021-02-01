import React, { useRef } from "react";

const ImgUpload = (props) => {
  const fileChooserRef = useRef();

  const choseImgHandler = (event) => {
    console.log(event.target);
  };

  const chooseImgHandler = () => {
    fileChooserRef.current.click();
  };
  return (
    <div className="form-control">
      <input
        id={props.id}
        ref={fileChooserRef}
        style={{ display: "none" }}
        type="file"
        accept=".jpeg, .png, .jpg"
        onChange={choseImgHandler}
      />

      <div className={`img-upload ${props.center && "center"}`}>
        <div className="img-upload-preview">
          <img src="" alt="Preview" />
        </div>
        <button type="button" onClick={chooseImgHandler}>
          CHOOSE IMAGE
        </button>
      </div>
    </div>
  );
};

export default ImgUpload;
