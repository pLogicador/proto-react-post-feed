import { render, screen } from "@testing-library/react";
import { Button } from ".";
import userEvent from "@testing-library/user-event";

describe("<Button />", () => {
  it("should render the button with the text 'Load more'", () => {
    render(<Button text="Load more" />);

    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeInTheDocument();
    expect.assertions(1);
  });
  /*
  it("should call function on button click", async () => {
    const fn = jest.fn();
    render(<Button text="Load more" whenClick={fn} />);

    const button = screen.getByRole("button", { name: /load more/i });
    await userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });
  */
  it("should be disabled when disabled is true", async () => {
    render(<Button text="Load more" disabled={true} />);
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).not.toBeEnabled();
  });

  it("should be enabled when disabled is false", async () => {
    render(<Button text="Load more" disabled={false} />);
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeEnabled();
  });

  it("should match snapshot", async () => {
    const { container } = render(<Button text="Load more" disabled={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
