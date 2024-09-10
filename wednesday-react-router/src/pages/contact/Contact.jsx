import React from "react";
import "./Contact.scss";
import { MdMailOutline } from "react-icons/md";




const Contact = () => {
  return (
    <main class="contact">
      <h2>Contact Me ...</h2>
      <div class="contact__list">
        <div class="contact__item">
          <i class="fas fa-envelope">Email</i> 
          <div class="text-secondary">wednesday@nevermoreacademy.edu</div>
        </div>
        <div class="contact__item">
          <i class="fas fa-mobile-alt">Phone</i> 
          <div class="text-secondary">+40 (571) 360-1234</div>
        </div>
        <div class="contact__item">
          <i class="fas fa-map-marker-alt"> Address</i>
          <div class="text-secondary">
            Strada Zamorei 1, Bușteni 105500, Romania
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
