import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import UserModal from "../userModal";
import type { User } from "../../types/user";

const mockUser: User = {
  id: "1",
  username: "jdoe",
  firstname: "John",
  lastname: "Doe",
  email: "jdoe@example.com",
  avatar: "https://robohash.org/test.png",
  role: "Engineer",
  join_date: "2024-01-01",
  description: "Test user",
};

test("renders user info and calls onClose", () => {
  const handleClose = vi.fn();
  render(<UserModal user={mockUser} onClose={handleClose} />);

  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("(Engineer)")).toBeInTheDocument();
  fireEvent.click(screen.getByLabelText("Close"));
  expect(handleClose).toHaveBeenCalled();
});
