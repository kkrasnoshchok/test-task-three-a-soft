import React, { useRef, useEffect } from "react";
import "./App.css";

const App = () => {
  // создаём ref, чтобы заменить инпут красивой кнопкой
  const inputFileRef = useRef(null);

  useEffect(() => {
    console.log(localStorage.getItem("state"));
  });

  let handleInputFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // setState([...JSON.parse(localStorage.getItem("state")), { fileName: file.name, fileImage: reader.result }]);
      localStorage.setItem(
        "state",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("state")),
          { fileName: file.name, fileImage: reader.result },
        ])
      );
    };
  };

  // метод map для отображения картинок с именами

  console.log(JSON.parse(localStorage.getItem("state")));

  let imagesGallery = JSON.parse(localStorage.getItem("state")).map((e) => {
    return (
      <div className="galleryItem">
        <img key="lol" src={e.fileImage} alt="" className="img" />
        <p key="keke">{e.fileName}</p>
      </div>
    );
  });

  console.log(JSON.parse(localStorage.getItem("state")));

  return (
    <div className="app">
      <form>
        <button
          className="addImageButton"
          onClick={(event) => {
            event.preventDefault();
            inputFileRef.current.click();
          }}
        >
          add images
        </button>
        <input
          type="file"
          accept="image/*"
          ref={inputFileRef}
          onChange={handleInputFileChange}
          style={{ display: "none" }}
        />
      </form>
      <br />
      <div className="gallery">{imagesGallery}</div>
    </div>
  );
};

export default App;
