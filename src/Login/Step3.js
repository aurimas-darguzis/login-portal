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
    <div className="text-center">
      <h4>Please enter on-time code</h4>
      <input
        type="text"
        className="one-time-code"
        maxLength={4}
        value={code}
        onChange={(e) => {
          setError(false);
          setCode(e.target.value);
        }}
      />
      {error ? (
        <div className="error-message ">The code is incorrect</div>
      ) : (
        <></>
      )}
      <div className="verification-submit">
        <button disabled={!code} onClick={verifyCode}>
          Verify
        </button>
      </div>
    </div>
  );
}
