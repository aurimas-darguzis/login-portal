import React from "react";
import { useForm } from "react-hook-form";

export default function Step1({ history }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = () => {
    history.push("/step-2");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form-container">
        <label htmlFor="lastName">Last name</label>
        <input
          placeholder="Your last name"
          type="text"
          id="lastName"
          name="lastName"
          aria-labelledby="lastName"
          aria-invalid={errors.lastName ? "true" : "false"} // screen reader will say: "Lastname, edit, invalid entry. This is required"
          ref={register({ required: true, maxLength: 50 })}
        />
        {errors.lastName?.type === "required" && (
          <span role="alert" className="error-message">
            Last name is required
          </span>
        )}
        {errors.lastName?.type === "maxLength" && (
          <span role="alert" className="error-message">
            Maximum limit of characters exceeded
          </span>
        )}
        <label htmlFor="dateOfBirth">Date of birth (DD-MM-YYYY)</label>
        <input
          placeholder="Your date of birth (DD-MM-YYYY)"
          type="text"
          name="dateOfBirth"
          aria-invalid={errors.dateOfBirth ? "true" : "false"}
          ref={register({
            required: true,
            pattern: {
              value: /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/i,
            },
          })}
        />
        {errors.dateOfBirth?.type === "required" && (
          <span role="alert" className="error-message">
            Date of birth is required
          </span>
        )}
        {errors.dateOfBirth?.type === "pattern" && (
          <span role="alert" className="error-message">
            Please enter correct date
          </span>
        )}
        <label htmlFor="postcode">Postcode</label>
        <input
          placeholder="Your post code "
          name="postcode"
          type="text"
          aria-invalid={errors.lastName ? "true" : "false"}
          ref={register({ required: true, minLength: 5, maxLength: 7 })}
        />
        {errors.postcode?.type === "required" && (
          <span role="alert" className="error-message">
            Post code is required
          </span>
        )}
        {errors.postcode?.type === "minLength" && (
          <span role="alert" className="error-message">
            Minimum 5 characters
          </span>
        )}
        {errors.postcode?.type === "maxLength" && (
          <span role="alert" className="error-message">
            Maximum character length exceeded
          </span>
        )}
        <input type="submit" />
      </form>
    </>
  );
}
