import { ReactNode } from "react";

import * as Styles from "./styles";

interface IPageWrapper {
  children: ReactNode;
}

export const PageWrapper: React.FC<IPageWrapper> = ({ children }) => {
  return <Styles.Container>{children}</Styles.Container>;
};

export default PageWrapper;
