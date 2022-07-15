import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const Result = () => {
    return (
        <p>Your message has been successfully sent!</p>
    )
}

export default function Contactform() {
    const [result, showResult] = useState(false);
    const [verified, setVerified] = useState(false);

    function onChange(value) {
        console.log("Captcha value: ", value);
        setVerified(true);
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm("service_e9kbsq8", "template_7wmp8el", e.target, "ewzkK8die2UPV--dA")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        showResult(true);
    }

    setTimeout(() => {
        showResult(false);
    }, 5000)
  
    return (
        <div className="contact-wrapper">
            <h1>Contact Me</h1>
            <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name" required/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name="email" required/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" required/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message..." name="message" required></textarea>
                    </div>
                    
                    {/* <div className="col-8 pt-2 mx-auto">
                        <ReCAPTCHA
                            sitekey="6LcWtu8gAAAAAH5cYuZI2aLcSlMFVe1Z1886kCRr"
                            onChange={onChange}
                        />
                    </div> */}
                    <div className="col-8 pt-2 mx-auto">
                        <button type="submit" className="btn btn-secondary pt-2">Send Message</button>
                    </div>
                </div>

                <div className="mssg-result-container">
                    {result ? <Result /> : null}
                </div>
            </form>
            
        </div>
    )
}