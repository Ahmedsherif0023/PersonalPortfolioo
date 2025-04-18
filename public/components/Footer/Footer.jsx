import React from 'react'

import { FaInstagram ,FaGithub , FaLinkedinIn} from "react-icons/fa6";
import "./Footer.css"

const Footer = () => {
  return (
    <div className='FooterDiv'>
      <p>2025 © Ahmed Sherif</p>
      <ul className="SocialIcons">
        <li>
          <FaInstagram/>
        </li>
      <li>
          <FaGithub/>
      </li>
        <li>
          <FaLinkedinIn/>
        </li>
      </ul>
    </div>
  )
}

export default Footer