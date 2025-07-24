import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page", () => {
  it("renders a heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("renders the explore cabins link", () => {
    render(<Home />);
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/cabins");
  });

  it("renders the background image", () => {
    render(<Home />);
    const image = screen.getByAltText(/mountains and forests with two cabins/i);
    expect(image).toBeInTheDocument();
  });
});
