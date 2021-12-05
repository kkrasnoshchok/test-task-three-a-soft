import React, {useRef, useState} from "react";
import "./App.css";

const App = () => {
   const [state, setState] = useState([]);

  // создаём ref, чтобы заменить инпут красивой кнопкой
  const inputFileRef = useRef(null);

  let handleInputFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setState([...state, { fileName: file.name, fileImage: reader.result }]);
    };
  };

  // метод map для отображения картинок с именами

  console.log(state);


  let imagesGallery = state.map((e) => {
    return (
      <div className="galleryItem">
        <img key="lol" src={e.fileImage} alt="" className="img" />
        <p key="keke">{e.fileName}</p>
      </div>
    );
  });

  return (
    <div className="app">
      <form className="app__form">
        <button
          className="addImageButton"
          onClick={(event) => {
            event.preventDefault();
            inputFileRef.current.click();
          }}
        >
          add image
        </button>
        <input
          type="file"
          accept="image/*"
          ref={inputFileRef}
          onChange={handleInputFileChange}
          style={{ display: "none" }}
        />
      </form>
      <div className="gallery">{imagesGallery}</div>
    </div>
  );
};

export default App;
