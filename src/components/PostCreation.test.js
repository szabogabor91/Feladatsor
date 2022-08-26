import { screen, render } from "@testing-library/react";
import PostCreation from "./PostCreation";

test("it should have header Create post", async () => {
  render(<PostCreation />);
  const postCreationHeader = screen.getByTestId("createPostHeader");
  expect(postCreationHeader).toBeVisible();
});

test("it should have button Create post", async () => {
  render(<PostCreation />);
  const postCreationHeader = screen.getByTestId("createPostButton");
  expect(postCreationHeader).toBeVisible();
});
