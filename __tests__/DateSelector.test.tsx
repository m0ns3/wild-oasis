import { render, screen } from "@testing-library/react";
import DateSelector from "@/app/_components/DateSelector";

const mockSettings = {
  minBookingLength: 2,
  maxBookingLength: 14,
};

const mockBookedDates = [new Date("2025-08-10"), new Date("2025-08-11")];

const mockCabin = {
  regularPrice: 100,
  discount: 20,
};

jest.mock("@/app/_components/ReservationContext", () => ({
  useReservation: () => ({
    range: { from: new Date("2025-08-01"), to: new Date("2025-08-05") },
    setRange: jest.fn(),
    resetRange: jest.fn(),
  }),
}));

test.only("renders date picker and calculated price info", () => {
  render(
    <DateSelector
      settings={mockSettings}
      bookedDates={mockBookedDates}
      cabin={mockCabin}
    />
  );

  expect(screen.getByText("$80")).toBeInTheDocument();

  expect(screen.getByText("$100")).toBeInTheDocument();

  expect(screen.getByTestId("numberOfNights")).toHaveTextContent("× 4");

  expect(screen.getByText("$320")).toBeInTheDocument();

  expect(screen.getByRole("button", { name: /clear/i })).toBeInTheDocument();
});
