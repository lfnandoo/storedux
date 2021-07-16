import { useCallback } from "react";
import { Product } from "../../../../types/products/product";
import * as Styles from "./styles";

interface ICard {
  item: Product;
  onAddCart: (item: Product) => void;
}

const Card: React.FC<ICard> = ({ item, onAddCart }) => {
  const { image, name, price } = item;

  const handleAddCart = useCallback(() => {
    onAddCart(item);
  }, [item, onAddCart]);

  return (
    <Styles.CardContainer>
      <Styles.CardImage src={image} alt={name} />

      <Styles.CardContent>
        <Styles.CardInfo>
          <h3>{name}</h3>
          <strong>${price}</strong>
        </Styles.CardInfo>
        <button onClick={handleAddCart}>Adicionar no carrinho</button>
      </Styles.CardContent>
    </Styles.CardContainer>
  );
};

export default Card;
