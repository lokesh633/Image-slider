import React, { useState, createContext } from "react";
import Viewimage from "./viewimage";
import ImageSLider from "./imageSLider";
import "./App.css";

export const AppContext = createContext();

function App() {

      const [imgInd,setImgInd] = useState(0)

  return (
    <AppContext.Provider value={{imgInd,setImgInd}}>
      <div className="App">
        <div className="view-image">
          <Viewimage />
        </div>
        <div className="image-slider">
          <ImageSLider />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
