import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock;

describe("<PostCard />", () => {
  it("should render PostCard correctly", () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
      "src",
      "img/img.jpeg"
    );
    expect(
      screen.getByRole("heading", { name: "1 title ex1" })
    ).toBeInTheDocument();
    expect(screen.getByText("body ex1")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
