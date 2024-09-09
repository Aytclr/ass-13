

import React from 'react'

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="horizontal">
        <div class="social-icons">
          <a href="#">
          <FaXTwitter />
          </a>
          <a href="#">
          <FaFacebook />
          </a>
          <a href="#">
          <GrInstagram />
          </a>
          <a href="#">
          <FaGithub />
          </a>
        </div>
        <div class="copyright">&copy; Copyright 2023</div>
      </footer>
  )
}

export default Footer