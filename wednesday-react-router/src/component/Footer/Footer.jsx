import "./Footer.scss"

import React from 'react'

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="horizontal">
        <div class="social-icons">
          <a  href="#">
          <FaXTwitter className="qq"/>
          </a>
          <a href="#"  >
          <FaFacebook className="qq" />
          </a>
          <a href="#" >
          <GrInstagram className="qq"/>
          </a>
          <a href="https://github.com/Aytclr/ass-13" target="_blank" >
          <FaGithub className="qq"/>
          </a>
        </div>
        <div class="copyright">&copy; Copyright 2023</div>
      </footer>
  )
}

export default Footer