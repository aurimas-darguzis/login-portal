import React, { useState } from "react";

export default function Step3({ history }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  function verifyCode() {
    if (code === "0000") {
      history.push("/home");
    } else {
      setError(true);
    }
  }
  return (
    <div role="form" className="text-center">
      <h4 id="enter-code">Please enter one-time code</h4>
      <input
        type="text"
        className="one-time-code"
        maxLength={4}
        value={code}
        autoFocus
        aria-required="true"
        aria-labelledby="enter-code"
        onChange={(e) => {
          setError(false);
          setCode(e.target.value);
        }}
      />
      {error ? (
        <div
          aria-labelledby="enter-code"
          role="alert"
          className="error-message"
        >
          The code is incorrect
        </div>
      ) : (
        <></>
      )}
      <div className="verification-submit">
        <button aria-label="verify" disabled={!code} onClick={verifyCode}>
          Verify
        </button>
      </div>
    </div>
  );
}
