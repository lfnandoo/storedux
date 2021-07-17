import { ButtonHTMLAttributes } from "react";
import * as Styles from "./styles";

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return <Styles.Container {...props} />;
};
