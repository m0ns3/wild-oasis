import { render, screen, fireEvent } from "@testing-library/react";
import TextExpander from "@/app/_components/TextExpander";

test("expands and collapses the text on button click", () => {
  const longText = "word ".repeat(100);

  render(<TextExpander>{longText}</TextExpander>);

  const shortText = longText.split(" ").slice(0, 40).join(" ").trim() + "...";

  expect(screen.getByText(shortText)).toBeInTheDocument();

  const expandButton = screen.getByRole("button", { name: /show more/i });
  expect(expandButton).toBeInTheDocument();

  fireEvent.click(expandButton);

  expect(screen.getByTestId("text-expander")).toHaveTextContent(longText);

  expect(
    screen.getByRole("button", { name: /show less/i })
  ).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /show less/i }));
  expect(screen.getByText(shortText)).toBeInTheDocument();
});
