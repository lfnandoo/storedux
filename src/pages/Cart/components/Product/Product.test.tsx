import renderer from "react-test-renderer";
import { fireEvent, render } from "@testing-library/react";

import { Product } from "./index";

describe("Product", () => {
  const onDecrementProduct = jest.fn();
  const onIncrementProduct = jest.fn();
  const onRemoveProduct = jest.fn();
  const item = {
    product: {
      id: "1",
      name: "Luiz",
      price: "350.32",
      image: "/",
    },
    amount: 2,
  };
  const component = (
    <Product
      item={item}
      onDecrementProduct={onDecrementProduct}
      onIncrementProduct={onIncrementProduct}
      onRemoveProduct={onRemoveProduct}
    />
  );

  it("should render correctly", () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should calc price", () => {
    const { getByTestId } = render(component);

    expect(getByTestId("formated-price")).toHaveTextContent("R$ 700,64");
  });

  it("should trigger onIncrementProduct", () => {
    const { getByTestId } = render(component);

    fireEvent.click(getByTestId("increment-btn"));

    expect(onIncrementProduct).toHaveBeenCalled();
  });

  it("should trigger onDecrementProduct", () => {
    const { getByTestId } = render(component);

    fireEvent.click(getByTestId("decrement-btn"));

    expect(onDecrementProduct).toHaveBeenCalled();
  });

  it("should trigger onRemoveProduct", () => {
    const { getByTestId } = render(
      <Product
        item={{
          product: {
            id: "1",
            name: "Luiz",
            price: "350.32",
            image: "/",
          },
          amount: 1,
        }}
        onDecrementProduct={onDecrementProduct}
        onIncrementProduct={onIncrementProduct}
        onRemoveProduct={onRemoveProduct}
      />
    );

    fireEvent.click(getByTestId("decrement-btn"));

    expect(onRemoveProduct).toHaveBeenCalled();
  });
});
