import { render, screen } from "@testing-library/react";
import Filter from "@/app/_components/Filter";

jest.mock("next/navigation", () => ({
  usePathname: () => "/cabins",
  useRouter: () => ({
    replace: jest.fn(),
  }),
  useSearchParams: () => new URLSearchParams("capacity=all"),
}));

test("Displays filter buttons", () => {
  render(<Filter />);

  const filterButtons = screen.getAllByRole("button");
  expect(filterButtons.length).toBeLessThanOrEqual(4);

  filterButtons.forEach((button) => {
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/all cabins|1-3|4-7|8-12/i);
  });
});
