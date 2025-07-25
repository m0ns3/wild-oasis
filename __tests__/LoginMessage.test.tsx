import { screen, render } from "@testing-library/react";
import LoginMessage from "@/app/_components/LoginMessage";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

test("renders login message with correct text and link", () => {
  render(<LoginMessage />);

  expect(screen.getByTestId("login-message")).toHaveTextContent(
    "Please login to reserve this cabin right now"
  );
  expect(screen.getByRole("link", { name: /login/i })).toHaveAttribute(
    "href",
    "/login"
  );
});
