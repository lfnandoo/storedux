export default function formatToBrl(price: number) {
  return price.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
