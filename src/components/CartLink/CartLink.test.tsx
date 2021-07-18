import renderer from "react-test-renderer";
import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { CartLink } from "./index";

describe("CartLink", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <CartLink productsInCart={1} />
        </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should get cart button", () => {
    const { getByTestId } = render(<CartLink productsInCart={1} />, {
      wrapper: BrowserRouter,
    });

    expect(getByTestId("cart-btn")).toBeInTheDocument();
  });

  it("should not get cart button", () => {
    const { container } = render(<CartLink productsInCart={0} />, {
      wrapper: BrowserRouter,
    });

    expect(container).toBeEmptyDOMElement();
  });

  it("should redirect to cart page", () => {
    const cartPath = "/cart";
    const { getByTestId } = render(<CartLink productsInCart={1} />, {
      wrapper: BrowserRouter,
    });

    fireEvent.click(getByTestId("cart-btn"));

    const url = document.URL;
    const uri = url.length - cartPath.length;
    const path = url.slice(uri);

    expect(path).toBe(cartPath);
  });
});
