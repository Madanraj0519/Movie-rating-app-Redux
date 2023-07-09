import React from 'react'
import { AiOutlineCopyright } from "react-icons/ai";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div>Movie App</div>
      <div><AiOutlineCopyright />2023, Movie, Inc, or its affiliates </div>
    </div>
  )
}

export default Footer