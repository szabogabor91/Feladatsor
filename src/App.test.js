import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App", () => {
  render(<App />);
});

test("it should have button Posts", async () => {
  render(<App />);
  const postTitle = await screen.findByText("Posts");
  expect(postTitle).toBeVisible();
});

test("it should have button Write a post", async () => {
  render(<App />);
  const postBody = await screen.findByText("Write a post");
  expect(postBody).toBeVisible();
});

test("it should have the title sunt aut facere repellat provident occaecati excepturi optio reprehenderit from API call", async () => {
  render(<App />);
  const postTitle = await screen.findByText(
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
  );
  expect(postTitle).toBeVisible();
});
