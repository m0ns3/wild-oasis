import { render, screen } from "@testing-library/react";
import Cabin from "@/app/_components/Cabin";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    const { fill, ...rest } = props;
    return <img {...rest} />;
  },
}));

jest.mock("@/app/_components/TextExpander", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

test("it renders Cabin details", () => {
  const cabin = {
    name: "001 - Cozy Cabin",
    maxCapacity: 4,
    image: "https://example.com/cabin.jpg",
    description: "A cozy cabin in the woods",
  };

  render(<Cabin cabin={cabin} />);

  expect(screen.getByText("Cabin 001 - Cozy Cabin")).toBeInTheDocument();
  expect(screen.getByText("A cozy cabin in the woods")).toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute("src", cabin.image);
  expect(screen.getByTestId("cabin-capacity")).toHaveTextContent(
    `For up to ${cabin.maxCapacity} guests`
  );
});
