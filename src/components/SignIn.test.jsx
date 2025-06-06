import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react-native";

import { SignInForm } from "./SignIn";

describe("SignIn", () => {
  describe("SignInForm", () => {
    it("calls its onSubmit handler with form contents", async () => {
      const onSubmit = jest.fn();
      render(<SignInForm onSubmit={onSubmit} />);
      fireEvent.changeText(screen.getByPlaceholderText("Username"), "kalle");
      fireEvent.changeText(screen.getByPlaceholderText("Password"), "password");
      fireEvent.press(screen.getByText("Sign in"));
      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).to;
        expect(onSubmit).toHaveBeenCalledWith(
          {
            username: "kalle",
            password: "password",
          },
          // We only care about the first argument here
          expect.anything()
        );
      });
    });
  });
});
