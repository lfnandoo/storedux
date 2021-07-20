import renderer from "react-test-renderer";
import { fireEvent, render } from "@testing-library/react";

import { Pagination } from "./index";

describe("Pagination", () => {
  const onChangePage = jest.fn();
  const amount = 2;
  const page = 0;

  it("should render correctly", () => {
    const tree = renderer
      .create(
        <Pagination page={page} amount={amount} onChangePage={onChangePage} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should get current page", () => {
    const { getByTestId } = render(
      <Pagination page={page} amount={amount} onChangePage={onChangePage} />
    );

    const currentPage = page + 1;

    expect(getByTestId("current-page")).toHaveTextContent(
      currentPage.toString()
    );
  });

  it("should trigger onChangePage on prev", () => {
    const { getByTestId } = render(
      <Pagination page={1} amount={amount} onChangePage={onChangePage} />
    );

    fireEvent.click(getByTestId("prev-btn"));

    expect(onChangePage).toHaveBeenCalled();
  });

  it("should trigger onChangePage on next", () => {
    const { getByTestId } = render(
      <Pagination page={page} amount={amount} onChangePage={onChangePage} />
    );

    fireEvent.click(getByTestId("next-btn"));

    expect(onChangePage).toHaveBeenCalled();
  });

  it("should not trigger onChangePage on prev", () => {
    const { getByTestId } = render(
      <Pagination page={page} amount={amount} onChangePage={onChangePage} />
    );

    fireEvent.click(getByTestId("prev-btn"));

    expect(onChangePage).toHaveBeenCalledTimes(0);
  });

  it("should not trigger onChangePage on next", () => {
    const { getByTestId } = render(
      <Pagination page={page} amount={1} onChangePage={onChangePage} />
    );

    fireEvent.click(getByTestId("next-btn"));

    expect(onChangePage).toHaveBeenCalledTimes(0);
  });
});
