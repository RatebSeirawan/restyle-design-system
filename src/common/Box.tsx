import * as React from "react";
import { View } from "react-native";
import { createBox, BoxProps as RestyleBoxProps } from "@shopify/restyle";
import { Theme } from "theme";

interface Props extends React.ComponentProps<typeof View>, BoxProps {
  sx?: BoxProps;
}

const RestyleBox = createBox<Theme>();

export const Box: React.FC<Props> = ({ children, sx = {}, ...rest }) => {
  return (
    <RestyleBox {...rest} {...sx}>
      {children}
    </RestyleBox>
  );
};

export type BoxProps = RestyleBoxProps<Theme>;
