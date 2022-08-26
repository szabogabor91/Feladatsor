import { screen, render } from "@testing-library/react";
import PostList from "./PostList";

const mockPostData = [
  {
    id: 1,
    userId: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum"
  },
  {
    id: 20,
    userId: 2,
    title: "doloribus ad provident suscipit at",
    body: "qui consequuntur ducimus possimus quisquam amet similique"
  }
];

test("it should have the title sunt aut facere repellat provident occaecati excepturi optio reprehenderit", async () => {
  render(<PostList posts={mockPostData} />);
  const postTitle = await screen.findByText(
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
  );
  expect(postTitle).toBeVisible();
});

test("it should have the body qui consequuntur ducimus possimus quisquam amet similique", async () => {
  render(<PostList posts={mockPostData} />);
  const postBody = await screen.findByText(
    "qui consequuntur ducimus possimus quisquam amet similique"
  );
  expect(postBody).toBeVisible();
});
