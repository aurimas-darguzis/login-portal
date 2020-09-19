import React from "react";
import { useForm } from "react-hook-form";

export default function LoginForm({ history }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = () => {
    history.push("/step-2");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="login-container">
        <h1 className="text-center">Please sign in to your account</h1>
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          autoFocus
          aria-required="true"
          aria-labelledby="lastName"
          aria-invalid={errors.lastName ? "true" : "false"} // screen reader will say: "Lastname, edit, invalid entry. This is required"
          ref={register({ required: true, maxLength: 50 })}
        />
        {errors.lastName?.type === "required" && (
          <span
            aria-labelledby="lastName"
            role="alert"
            className="error-message"
          >
            Last name is required
          </span>
        )}
        {errors.lastName?.type === "maxLength" && (
          <span
            aria-labelledby="lastName"
            role="alert"
            className="error-message"
          >
            Maximum limit of characters exceeded
          </span>
        )}
        <label htmlFor="dateOfBirth">Date of birth (DD/MM/YYYY)</label>
        <input
          type="text"
          name="dateOfBirth"
          aria-required="true"
          aria-labelledby="dateOfBirth"
          aria-invalid={errors.dateOfBirth ? "true" : "false"}
          ref={register({
            required: true,
            pattern: {
              value: /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/i,
            },
          })}
        />
        {errors.dateOfBirth?.type === "required" && (
          <span
            aria-labelledby="dateOfBirth"
            role="alert"
            className="error-message"
          >
            Date of birth is required
          </span>
        )}
        {errors.dateOfBirth?.type === "pattern" && (
          <span
            aria-labelledby="dateOfBirth"
            role="alert"
            className="error-message"
          >
            Please enter correct date
          </span>
        )}
        <label htmlFor="postcode">Postcode</label>

        <input
          name="postcode"
          type="text"
          className="uppercase"
          aria-required="true"
          aria-labelledby="postcode"
          aria-invalid={errors.lastName ? "true" : "false"}
          ref={register({ required: true, minLength: 5, maxLength: 7 })}
        />
        {errors.postcode?.type === "required" && (
          <span
            aria-labelledby="postcode"
            role="alert"
            className="error-message"
          >
            Post code is required
          </span>
        )}
        {errors.postcode?.type === "minLength" && (
          <span
            aria-labelledby="postcode"
            role="alert"
            className="error-message"
          >
            Minimum 5 characters
          </span>
        )}
        {errors.postcode?.type === "maxLength" && (
          <span
            aria-labelledby="postcode"
            role="alert"
            className="error-message"
          >
            Maximum character length exceeded
          </span>
        )}
        <button aria-label="login" type="submit">
          Login
        </button>
      </form>
    </>
  );
}
