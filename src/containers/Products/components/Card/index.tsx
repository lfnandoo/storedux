import { Skeleton } from "../../../../components/Skeleton";

import { Product } from "../../../../types/products/product";
import formatToBrl from "../../../../utils/formatToBrl";

import * as Styles from "./styles";

interface ICard {
  item: Product;
  onAddCart: (item: Product) => void;
  isAdded: boolean;
}

export const Card: React.FC<ICard> = ({ item, onAddCart, isAdded }) => {
  const { image, name, price } = item;

  const handleAddCart = () => {
    onAddCart(item);
  };

  return (
    <Styles.CardContainer>
      <Styles.CardImage src={image} alt={name} />

      <Styles.CardContent>
        <Styles.CardInfo>
          <h3>{name}</h3>
          <p>{formatToBrl(Number(price))}</p>
        </Styles.CardInfo>
        <Styles.CardButton disabled={isAdded} onClick={handleAddCart}>
          {isAdded ? "Este Item já foi adicionado" : "Adicionar no carrinho"}
        </Styles.CardButton>
      </Styles.CardContent>
    </Styles.CardContainer>
  );
};

export const CardShimmer: React.FC = () => {
  return (
    <Styles.CardContainer>
      <Styles.CardImageShimmer>
        <Skeleton />
      </Styles.CardImageShimmer>
    </Styles.CardContainer>
  );
};
