import renderer from "react-test-renderer";
import { fireEvent, render } from "@testing-library/react";

import { NavBar } from "./index";

describe("NavBar", () => {
  const onClearAll = jest.fn();
  const amount = 2;

  it("should render correctly", () => {
    const tree = renderer
      .create(<NavBar itemsAmount={amount} onClearAll={onClearAll} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should get items amount", () => {
    const { getByTestId } = render(
      <NavBar itemsAmount={amount} onClearAll={onClearAll} />
    );

    expect(getByTestId("items-amount")).toHaveTextContent(amount.toString());
  });

  it("should trigger onClearAll", () => {
    const { getByTestId } = render(
      <NavBar itemsAmount={amount} onClearAll={onClearAll} />
    );

    fireEvent.click(getByTestId("clear-all-button"));

    expect(onClearAll).toHaveBeenCalled();
  });
});
