import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { Users } from "../users";
import { withQueryClient } from "../../test/utils";

vi.mock("../hooks/useUsers", () => ({
  useUsers: () => ({
    users: Array.from({ length: 10 }).map((_, i) => ({
      id: `${i}`,
      username: `user${i}`,
      firstname: `First${i}`,
      lastname: `Last${i}`,
      email: `user${i}@example.com`,
      avatar: `https://robohash.org/${i}.png`,
      role: "Engineer",
      join_date: "2024-01-01",
      description: "Test description",
    })),
    loading: false,
    error: null,
  }),
}));

vi.mock("../hooks/useInfiniteScroll", () => ({
  useInfiniteScroll: () => ({ current: null }),
}));

test("renders users and handles modal interactions", async () => {
  render(withQueryClient(<Users />));

  expect(await screen.findByText("First0 Last0")).toBeInTheDocument();

  fireEvent.click(screen.getAllByText("View More")[0]);

  await waitFor(() => {
    expect(screen.getByText("Close")).toBeInTheDocument();
  });

  fireEvent.click(screen.getByText("Close"));
  expect(screen.queryByText("Close")).not.toBeInTheDocument();
});
