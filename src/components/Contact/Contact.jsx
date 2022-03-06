import React from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_shxcdo3",
      "template_f5bsqgd",
      form.current,
      "gaB7U9dR2ebLf0mdi"
    );
    e.target.reset();
    alert("Your message has been sent");
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            {/* <h5>tolulopeflosbach@gmail.com</h5> */}
            <a
              href="mailto:tolulopeflosbach@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <IoLogoWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            {/* <h5>tolulopeflosbach@gmail.com</h5> */}
            <a
              href="https://api.whatsapp.com/send?phone=+2348080136863"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Send a message
            </a>
          </article>
        </div>
        {/* End of contact options */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
