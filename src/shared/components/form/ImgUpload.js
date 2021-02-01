import React, { useRef, useState } from "react";

const ImgUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const fileChooserRef = useRef();

  const choseImgHandler = (event) => {
    let choseFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.length === 1) {
      choseFile = event.target.files[0];
      setFile(choseFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    props.onInput(props.id, choseFile, fileIsValid);
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
