import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { act } from "react-dom/test-utils";

const mockLogin = jest.fn((lastName, day, month, year, postCode) => {
  return Promise.resolve({ lastName, day, month, year, postCode });
});

describe("Login Form", () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  it("should display required error when values are invalid", async () => {
    act(() => {
      fireEvent.submit(screen.getByRole("button"));
    });
    expect(await screen.findAllByRole("alert")).toHaveLength(5);
    expect(mockLogin).not.toBeCalled();
  });

  xit("should display maximum limit error when last name is longer than 50 characters", async () => {
    const { getByText } = render(<LoginForm />);
    fireEvent.input(screen.getByRole("textbox", { name: /lastName/i }), {
      target: {
        value: "123456789012345678901234567890123456789012345678901",
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    const lastNameMaxLengthErrorMessage = getByText(
      /Maximum limit of characters exceeded/i
    );
    expect(lastNameMaxLengthErrorMessage).toBeInTheDocument();
  });
});
