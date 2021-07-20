import { memo } from "react";
import { Button } from "../Button";

import * as Styles from "./styles";

interface IPagination {
  page: number;
  amount: number;
  onChangePage: (page: number) => void;
}

export const Pagination = memo(
  ({ page, amount, onChangePage }: IPagination) => {
    const currentPage = page + 1;

    const handlePrevPage = () => {
      onChangePage(page - 1);
    };

    const handleNextPage = () => {
      onChangePage(page + 1);
    };

    return (
      <Styles.Container>
        <Button
          data-testid="prev-btn"
          disabled={page < 1}
          onClick={handlePrevPage}
        >
          Anterior
        </Button>
        <p data-testid="current-page">{currentPage}</p>
        <Button
          data-testid="next-btn"
          disabled={amount === currentPage}
          onClick={handleNextPage}
        >
          Próxima
        </Button>
      </Styles.Container>
    );
  }
);
