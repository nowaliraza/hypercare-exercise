import { render, screen, fireEvent } from "@testing-library/react";
import UserCard from "../userCard";
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

describe("UserCard", () => {
  it("renders user full name and avatar", () => {
    render(<UserCard user={mockUser} onViewMore={() => {}} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByAltText("John Doe")).toHaveAttribute(
      "src",
      mockUser.avatar
    );
  });

  it("calls onViewMore when 'View More' button is clicked", () => {
    const onViewMoreMock = vi.fn();
    render(<UserCard user={mockUser} onViewMore={onViewMoreMock} />);
    const button = screen.getByText("View More");
    fireEvent.click(button);
    expect(onViewMoreMock).toHaveBeenCalledTimes(1);
  });
});
