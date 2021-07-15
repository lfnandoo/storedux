import { Product } from "../../../../types/products/product";
import * as Styles from "./styles";

interface ICard {
  item: Product;
}

const Card: React.FC<ICard> = ({ item }) => {
  const { image, name, price } = item;
  return (
    <Styles.CardContainer>
      <Styles.CardImage src={image} alt={name} />

      <Styles.CardContent>
        <Styles.CardInfo>
          <h3>{name}</h3>
          <strong>${price}</strong>
        </Styles.CardInfo>
        <button>Adicionar no carrinho</button>
      </Styles.CardContent>
    </Styles.CardContainer>
  );
};

export default Card;
