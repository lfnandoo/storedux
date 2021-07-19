import formatToBrl from "./formatToBrl";

describe("formatToBrl", () => {
  it("should format correctly", () => {
    const price = 300;
    const formatedPrice = formatToBrl(price);

    expect(formatedPrice).toBeTruthy();
  });
});
