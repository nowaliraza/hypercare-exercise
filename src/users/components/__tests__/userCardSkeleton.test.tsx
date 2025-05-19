import { render } from "@testing-library/react";
import UserCardSkeleton from "../userCardSkeleton";

test("renders skeleton structure", () => {
  const { container } = render(<UserCardSkeleton />);
  expect(container.querySelector(".animate-pulse")).toBeInTheDocument();
});
