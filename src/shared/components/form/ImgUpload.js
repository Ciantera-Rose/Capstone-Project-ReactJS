import React, { useRef, useState, useEffect } from "react";

const ImgUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const fileChooserRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const choseImgHandler = (event) => {
    let choseFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
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
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          {!previewUrl && <p>Please choose an image.</p>}
        </div>
        <button type="button" onClick={chooseImgHandler}>
          CHOOSE IMAGE
        </button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default ImgUpload;
