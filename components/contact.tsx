import { useState } from "react";

export default function ContactComponent() {
  const [contacterName, setContacterName] = useState("");
  const [contacterEmail, setContacterEmail] = useState("");
  const [contacterMessage, setContacterMessage] = useState("");

  return (
    <div id="contact" className="uk-flex uk-flex-center uk-flex-middle">
      <h2>I would love to hear from you</h2>
      <p>
        Please feel free to connect with me for absolutely anything. Would love
        to hear from you.
      </p>
      <button
        id="modal_full_button"
        className="uk-button uk-button-default"
        uk-toggle="target: #modal-full"
      >
        Get in Touch
      </button>

      <div id="modal-full" className="uk-modal-full" uk-modal="true">
        <div className="uk-modal-dialog">
          <button
            className="uk-modal-close-full uk-close-large"
            type="button"
            uk-close="true"
          ></button>
          <div className="uk-modal-header">
            <h2 className="uk-modal-title uk-text-center">Get in Touch</h2>
          </div>
          <div className="uk-modal-body">
            <div
              className="uk-grid-collapse uk-child-width-1-3@s uk-flex-middle"
              uk-grid
            >
              <div></div>
              <form className="uk-form-stacked">
                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="contacter_name">
                    Name
                  </label>
                  <div className="uk-form-controls">
                    <input
                      className="uk-input uk-form-width-medium"
                      id="contacter_name"
                      type="text"
                      placeholder="Enter Your Name"
                      size={40}
                      required={true}
                      value={contacterName}
                      onChange={(e) => setContacterName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="contacter_email">
                    Email
                  </label>
                  <div className="uk-form-controls">
                    <input
                      className="uk-input uk-form-width-medium"
                      id="contacter_email"
                      type="email"
                      placeholder="Enter Your Email Address"
                      size={50}
                      required={true}
                      value={contacterEmail}
                      onChange={(e) => setContacterEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="contacter_email">
                    Message
                  </label>
                  <div className="uk-form-controls">
                    <textarea
                      className="uk-textarea uk-form-width-large"
                      id="contacter_message"
                      placeholder="Enter Your Message here 😊"
                      rows={6}
                      cols={14}
                      required={true}
                      value={contacterMessage}
                      onChange={(e) => setContacterMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>

                <div className="uk-margin">
                  <div className="uk-form-controls">
                    <button className="uk-button uk-button-primary">
                      SEND
                    </button>
                  </div>
                </div>
              </form>
              <div>
                <h3>{contacterEmail}</h3>
              </div>
            </div>
          </div>

          <div className="uk-modal-footer"></div>
        </div>
      </div>
    </div>
  );
}
