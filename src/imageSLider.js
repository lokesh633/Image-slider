import React,{useContext, useState} from 'react'
import {AppContext} from "./App.js";
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md";

import {data} from "./imgdata";

const ImageSLider = () => {
    const {setImgInd} = useContext(AppContext)
    const [ind,setInd] = useState(0);

    const prev = ()=>{
        if(ind===0){
            setInd(data.length-1);
            setImgInd(data.length-1)
        }else{
            setInd(ind-1)
            setImgInd(ind-1)
        }
        
    }
    const next = ()=>{
        if(ind===data.length-1){
            setInd(0);
            setImgInd(0)
        }else{
            setInd(ind+1)
            setImgInd(ind+1)
        }
    }
  return (
    <div className='image-slider-container'>
        <div className='icon' onClick={prev}><MdKeyboardArrowLeft/></div>
        <div className='frontbackimg' ><img src={ind===data.length-1?data[ind]:data[ind+1]} className='frontbackimg' alt="title"/></div>
        <div className="main-view"><img src={data[ind]}  className="main-img" alt='title'/></div>
        <div className='frontbackimg'><img src={ind===0?data[data.length-1]:data[ind-1]} className='frontbackimg' alt="title"/></div>
        <div className='icon' onClick={next}><MdKeyboardArrowRight/></div>
    </div>
  )
}

export default ImageSLider