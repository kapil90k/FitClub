import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

function Join() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a7701xs",
        "template_yoiu2nn",
        form.current,
        "9D32s5OkBL3k6gl4R"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">ready to</span>
          <span>level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text">with us</span>
        </div>
      </div>
      <div className="right-j">
        <form
          ref={form}
          action=""
          className="email-container"
          onSubmit={sendEmail}
        >
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email id"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
