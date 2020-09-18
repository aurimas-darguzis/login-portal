import React, { useState } from "react";

export default function Step2({ history }) {
  const [contact, setContact] = useState(false);
  function goToStep() {
    history.push("/step-3");
  }
  return (
    <div className="login-container">
      <header className="text-center">
        <h4>2-step verification</h4>
        <p>
          Pick one of the following to receive a one-time code to complete the
          login process:
        </p>
      </header>
      <div className="verification-option" onClick={() => setContact("phone")}>
        <input
          type="radio"
          id="mobile-phone"
          name="contact"
          value="phone"
          checked={contact === "phone"}
          onChange={() => setContact(true)}
        />
        <label htmlFor="mobile-phone">
          Mobile Phone{" "}
          <span className="contact-suggestion">(+44 **** ***208)</span>
        </label>
      </div>

      <div
        className="verification-option"
        onClick={() => setContact("landline")}
      >
        <input
          type="radio"
          id="landline"
          name="contact"
          value="landline"
          checked={contact === "landline"}
          onChange={() => setContact(true)}
        />
        <label htmlFor="landline">
          Landline <span className="contact-suggestion">(01** *** *567)</span>
        </label>
      </div>
      <div className="verification-option" onClick={() => setContact("email")}>
        <input
          type="radio"
          id="email"
          name="contact"
          value="email"
          checked={contact === "email"}
          onChange={() => setContact(true)}
        />
        <label htmlFor="email">
          Email
          <span className="contact-suggestion">
            (a*****sd*r*****@drdoctor.com
          </span>
        </label>
      </div>
      <div className="verification-submit">
        <button disabled={!contact} onClick={goToStep}>
          Send code
        </button>
      </div>
    </div>
  );
}
