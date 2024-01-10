import React,{useContext} from 'react';
import {AppContext} from "./App.js";
import {data} from "./imgdata";
import "./App.css"

const Viewimage = () => {

    const {imgInd} =  useContext(AppContext);
    const src = data[imgInd];

  return (
    <div className="image-view">
        <img src={src} alt='title'/>
    </div>
  )
}

export default Viewimage