import React, { useState } from "react";

export default function Step2({ history }) {
  const [contact, setContact] = useState(null);
  function goToStep() {
    if (contact) {
      history.push("/step-3");
    }
  }

  return (
    <div role='form' className='login-container'>
      <header className='text-center'>
        <h4 id='2-step-verification'>2 -step verification</h4>
        <p>
          Pick one of the following to receive a one-time code to complete the
          login process:
        </p>
      </header>
      <div
        aria-labelledby='2-step-verification'
        className='verification-option'
        onClick={() => setContact("phone")}
      >
        <input
          type='radio'
          id='mobile-phone'
          name='contact'
          value='phone'
          tabIndex='0'
          autoFocus
          aria-labelledby='mobile-phone'
          checked={contact === "phone"}
          onChange={() => setContact("phone")}
        />
        <label htmlFor='mobile-phone'>
          Mobile Phone
          <span className='contact-suggestion'>(+44 **** ***208)</span>
        </label>
      </div>

      <div
        aria-labelledby='2-step-verification'
        className='verification-option'
        onClick={() => setContact("landline")}
      >
        <input
          type='radio'
          id='landline'
          name='contact'
          value='landline'
          tabIndex='1'
          aria-labelledby='landline'
          checked={contact === "landline"}
          onChange={() => setContact("landline")}
        />
        <label htmlFor='landline'>
          Landline <span className='contact-suggestion'>(01** *** *567)</span>
        </label>
      </div>
      <div
        aria-labelledby='2-step-verification'
        className='verification-option'
        onClick={() => setContact("email")}
      >
        <input
          type='radio'
          id='email'
          name='contact'
          value='email'
          tabIndex='2'
          aria-labelledby='email'
          checked={contact === "email"}
          onChange={() => setContact("email")}
        />
        <label htmlFor='email'>
          Email
          <span className='contact-suggestion'>
            (a*****sd*r*****@drdoctor.com)
          </span>
        </label>
      </div>
      <div className='verification-submit'>
        <button tabIndex='3' disabled={!contact} onClick={goToStep}>
          Send code
        </button>
      </div>
    </div>
  );
}
