import { render, screen } from "@testing-library/react";
import CabinCard from "@/app/_components/CabinCard";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    const { fill, ...rest } = props;
    return <img {...rest} />;
  },
}));

test("it renders Cabin information when there is no discount", () => {
  const cabin = {
    id: "1",
    name: "001 - Cozy Cabin",
    maxCapacity: 4,
    regularPrice: 100,
    discount: 0,
    image: "https://example.com/cabin.jpg",
  };

  render(<CabinCard cabin={cabin} />);

  expect(screen.getByText("Cabin 001 - Cozy Cabin")).toBeInTheDocument();
  expect(screen.getByText(/\$100/)).toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute("src", cabin.image);
  expect(
    screen.getByRole("link", { name: /details & reservation/i })
  ).toHaveAttribute("href", `/cabins/${cabin.id}`);

  expect(screen.getByTestId("cabin-capacity")).toHaveTextContent(
    `For up to ${cabin.maxCapacity} guests`
  );
});

test("it renders Cabin information with discount", () => {
  const cabin = {
    id: "2",
    name: "002 - Luxury Cabin",
    maxCapacity: 6,
    regularPrice: 200,
    discount: 20,
    image: "https://example.com/luxury-cabin.jpg",
  };

  render(<CabinCard cabin={cabin} />);

  expect(screen.getByText("Cabin 002 - Luxury Cabin")).toBeInTheDocument();
  expect(screen.getByText(/\$180/)).toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute("src", cabin.image);
  expect(
    screen.getByRole("link", { name: /details & reservation/i })
  ).toHaveAttribute("href", `/cabins/${cabin.id}`);

  expect(screen.getByTestId("cabin-capacity")).toHaveTextContent(
    `For up to ${cabin.maxCapacity} guests`
  );
});
