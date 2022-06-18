import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"

const HeaderSocials = () => {
  return (
<div className="header__socials">

  <a href='https://linkedin.com' target="noreferrer"><BsLinkedin /></a>
  <a href='https://github.com' target="noreferrer"><FaGithub /></a>
  <a href='https://instagram.com' target="noreferrer"><AiFillInstagram /></a>

  </div>
  )
}

export default HeaderSocials