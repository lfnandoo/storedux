import { Product } from "../../../../types/products/product";

interface ICard {
  item: Product;
}

const Card: React.FC<ICard> = ({ item }) => {
  const { image, name, price } = item;
  return (
    <li className="card">
      <img src={image} alt={name} />

      <div className="card-content">
        <div className="card-content-info">
          <h3>{name}</h3>
          <strong>${price}</strong>
        </div>
        <button>Adicionar no carrinho</button>
      </div>
    </li>
  );
};

export default Card;
