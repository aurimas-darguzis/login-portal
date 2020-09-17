import React, { useState } from "react";

export default function Step2({ history }) {
  const [sendCodeTo, setSendCodeTo] = useState(false);
  function goToStep() {
    history.push("/step-3");
  }
  return (
    <div>
      <p>Select where to send verification code</p>
      <div>
        <input
          type="radio"
          id="mobile-phone"
          name="sendCodeTo"
          onChange={() => setSendCodeTo(true)}
        />
        <label htmlFor="mobile-phone">Mobile Phone</label>
        <br />
        <input
          type="radio"
          id="landline"
          name="sendCodeTo"
          onChange={() => setSendCodeTo(true)}
        />
        <label htmlFor="landline">Landline</label>
        <br />
        <input
          type="radio"
          id="email"
          name="sendCodeTo"
          onChange={() => setSendCodeTo(true)}
        />
        <label htmlFor="email">Email</label>
      </div>
      <button disabled={!sendCodeTo} onClick={goToStep}>
        Send code
      </button>
    </div>
  );
}
