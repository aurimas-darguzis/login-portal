import React from "react";
import { useForm } from "react-hook-form";

export default function LoginForm({ history }) {
  const { register, handleSubmit, errors } = useForm();
  const calendarDayRegex = /^([1-9]|[12][0-9]|3[01])$/;
  const calendarMonthRegex = /^[1-9]$|^[1][0-2]$/;
  const calendarYearRegex = /(19|20)\d\d/;
  const onSubmit = () => {
    history.push("/step-2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='login-container'>
      <h1 className='text-center'>Please sign in to your account</h1>
      <label htmlFor='lastName'>Last name</label>
      <input
        type='text'
        id='lastName'
        name='lastName'
        autoFocus
        aria-required='true'
        aria-labelledby='lastName'
        aria-invalid={errors.lastName ? "true" : "false"} // screen reader will say: "Lastname, edit, invalid entry. This is required"
        ref={register({
          required: "Last name is required",
          maxLength: {
            value: 50,
            message: "Maximum limit of characters exceeded",
          },
        })}
      />
      {errors.lastName?.message && (
        <span aria-labelledby='lastName' role='alert' className='error-message'>
          {errors.lastName.message}
        </span>
      )}

      <label htmlFor='dateOfBirth'>Date of birth</label>
      {/** Good candidate to extract into component  */}
      <div className='date-widget'>
        <div className='user-input-block'>
          <label htmlFor='day'>Day</label>
          <input
            type='text'
            id='day'
            name='day'
            aria-required='true'
            aria-labelledby='day'
            aria-invalid={errors.day ? "true" : "false"}
            ref={register({
              required: "A day is requried",
              pattern: {
                value: calendarDayRegex,
                message: "A day needs to be between 1 and 31",
              },
            })}
          />
        </div>

        <div className='user-input-block'>
          <label htmlFor='month'>Month</label>
          <input
            type='text'
            id='month'
            name='month'
            aria-required='true'
            aria-labelledby='month'
            aria-invalid={errors.month ? "true" : "false"}
            ref={register({
              required: "A month is requried",
              pattern: {
                value: calendarMonthRegex,
                message: "A month needs to be a number between 1 and 12",
              },
            })}
          />
        </div>
        <div className='user-input-block'>
          <label htmlFor='year'>Year</label>
          <input
            type='text'
            id='year'
            name='year'
            aria-required='true'
            aria-labelledby='year'
            aria-invalid={errors.year ? "true" : "false"}
            ref={register({
              required: "A year is requried",
              maxLength: {
                value: 4,
                message: "Please enter valid year",
              },
              pattern: {
                value: calendarYearRegex,
                message: "Please enter valid year",
              },
            })}
          />
        </div>
      </div>
      {errors.day?.message && (
        <span aria-labelledby='day' role='alert' className='error-message'>
          {errors.day.message}
        </span>
      )}
      {errors.month?.message && (
        <span aria-labelledby='month' role='alert' className='error-message'>
          {errors.month.message}
        </span>
      )}
      {errors.year?.message && (
        <span aria-labelledby='year' role='alert' className='error-message'>
          {errors.year.message}
        </span>
      )}

      <label htmlFor='postcode'>Postcode</label>
      <input
        name='postcode'
        id='postcode'
        type='text'
        className='uppercase'
        aria-required='true'
        aria-labelledby='postcode'
        aria-invalid={errors.postcode ? "true" : "false"}
        ref={register({
          required: "Post code is required",
          minLength: { value: 5, message: "Minimum 5 characters" },
          maxLength: { value: 7, message: "Maximum character length exceeded" },
        })}
      />
      {errors.postcode?.message && (
        <span aria-labelledby='postcode' role='alert' className='error-message'>
          {errors.postcode.message}
        </span>
      )}
      <button aria-label='login' type='submit'>
        Login
      </button>
    </form>
  );
}
