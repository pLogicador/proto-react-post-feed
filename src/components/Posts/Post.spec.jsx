import { render, screen } from "@testing-library/react";
import { Post } from ".";

const props = {
  posts: [
    {
      id: 1,
      title: "title ex1",
      body: "body ex1",
      cover: "img/img1.jpeg",
    },
    {
      id: 2,
      title: "title ex2",
      body: "body ex2",
      cover: "img/img2.jpeg",
    },
    {
      id: 3,
      title: "title ex3",
      body: "body ex3",
      cover: "img/img3.jpeg",
    },
  ],
};

describe("<Posts />", () => {
  it("should render posts", () => {
    render(<Post {...props} />);

    expect(screen.getAllByRole("heading", { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole("img", { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/body/i)).toHaveLength(3);
    expect(screen.getByRole("img", { name: /title ex3/i })).toHaveAttribute(
      "src",
      "img/img3.jpeg"
    );
  });

  /*
  it("should not render posts", () => {
    render(<Post />);

    expect(
      screen.queryByRole("heading", { name: /title/i })
    ).not.toBeInTheDocument();
  });
    */
  it("should match snapshot", () => {
    const { container } = render(<Post {...props} />);
    expect(container).toMatchSnapshot();
  });
});
