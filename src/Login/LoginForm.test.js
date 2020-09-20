import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { act } from "react-dom/test-utils";

describe("Login Form Validation", () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  it("should display required error when values are invalid", async () => {
    act(() => {
      fireEvent.submit(screen.getByRole("button"));
    });

    expect(await screen.findAllByRole("alert")).toHaveLength(5);
    expect(screen.getByText("Last name is required")).toBeInTheDocument();
    expect(screen.getByText("A day is requried")).toBeInTheDocument();
    expect(screen.getByText("A month is requried")).toBeInTheDocument();
    expect(screen.getByText("A year is requried")).toBeInTheDocument();
    expect(screen.getByText("Post code is required")).toBeInTheDocument();
  });

  it("should display maximum limit error when last name is longer than 50 characters", async () => {
    act(() => {
      fireEvent.input(screen.getByRole("textbox", { name: /Last name/i }), {
        target: {
          value: "123456789012345678901234567890123456789012345678901",
        },
      });
    });

    act(() => {
      fireEvent.submit(screen.getByRole("button"));
    });

    expect(await screen.findAllByRole("alert")).toHaveLength(5);

    const lastNameMaxLengthErrorMessage = await screen.getByText(
      /Maximum limit of characters exceeded/i
    );
    expect(lastNameMaxLengthErrorMessage).toBeInTheDocument();
  });

  it("should display error when day/month is in wrong number range", async () => {
    act(() => {
      fireEvent.input(screen.getByRole("textbox", { name: /Day/i }), {
        target: {
          value: "123",
        },
      });
      fireEvent.input(screen.getByRole("textbox", { name: /Month/i }), {
        target: {
          value: "123",
        },
      });
    });

    act(() => {
      fireEvent.submit(screen.getByRole("button"));
    });

    expect(await screen.findAllByRole("alert")).toHaveLength(5);

    const dayPatternErrorMessage = await screen.getByText(
      /A day needs to be between 1 and 31/i
    );
    const monthPatternErrorMessage = await screen.getByText(
      /A month needs to be a number between 1 and 12/i
    );
    expect(dayPatternErrorMessage).toBeInTheDocument();
    expect(monthPatternErrorMessage).toBeInTheDocument();
  });

  it("should display error when year is breaking maxLength validation rule", async () => {
    act(() => {
      fireEvent.input(screen.getByRole("textbox", { name: /Year/i }), {
        target: {
          value: "12345",
        },
      });
    });

    act(() => {
      fireEvent.submit(screen.getByRole("button"));
    });

    expect(await screen.findAllByRole("alert")).toHaveLength(5);

    const yearMaxLengthErrorMessage = await screen.getByText(
      /Please enter valid year/i
    );

    expect(yearMaxLengthErrorMessage).toBeInTheDocument();
  });

  it("should display error when year is breaking pattern validation rule", async () => {
    act(() => {
      fireEvent.input(screen.getByRole("textbox", { name: /Year/i }), {
        target: {
          value: "4321",
        },
      });
    });

    act(() => {
      fireEvent.submit(screen.getByRole("button"));
    });

    expect(await screen.findAllByRole("alert")).toHaveLength(5);

    const yearPatternErrorMessage = await screen.getByText(
      /Please enter valid year/i
    );

    expect(yearPatternErrorMessage).toBeInTheDocument();
  });

  it("should display error when postcode is breaking pattern min length rule", async () => {
    act(() => {
      fireEvent.input(screen.getByRole("textbox", { name: /Postcode/i }), {
        target: {
          value: "1234",
        },
      });
    });

    act(() => {
      fireEvent.submit(screen.getByRole("button"));
    });

    expect(await screen.findAllByRole("alert")).toHaveLength(5);

    const postCodeMinLengthErrorMessage = await screen.getByText(
      /Minimum 5 characters/i
    );

    expect(postCodeMinLengthErrorMessage).toBeInTheDocument();
  });

  it("should display error when postcode is breaking pattern max length rule", async () => {
    act(() => {
      fireEvent.input(screen.getByRole("textbox", { name: /Postcode/i }), {
        target: {
          value: "12345678",
        },
      });
    });

    act(() => {
      fireEvent.submit(screen.getByRole("button"));
    });

    expect(await screen.findAllByRole("alert")).toHaveLength(5);

    const postCodeMinLengthErrorMessage = await screen.getByText(
      /Maximum character length exceeded/i
    );

    expect(postCodeMinLengthErrorMessage).toBeInTheDocument();
  });
});
