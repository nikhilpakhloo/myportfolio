import { useState } from "react";
import "./contact.scss";
import emailjs from 'emailjs-com';

export default function Contact() {

  const [btntext, setBtntext] = useState("Send");

  const sendEmail = (e) => {
    e.preventDefault();

   
    setBtntext("Submitting");

    emailjs.sendForm('service_b8ygt5h', 'template_qs5iqdr', e.target, 'xvdLCfIrneveOoidJ')
      .then((result) => {
       
        setTimeout(() => {
          setBtntext("Sent");
         
          setTimeout(() => {
            setBtntext("Send");
          }, 1000);
        }, 2000);
      })
      .catch((error) => {
        setBtntext("Failed");
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Contact Me:</h2>
      <form onSubmit={sendEmail}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" name="message" required />
        </div>
        <button className="btn btn-dark button" type="submit" disabled={btntext === "Submitting"}>
         {btntext}
        </button>
      </form>
    </div>
  );
}
