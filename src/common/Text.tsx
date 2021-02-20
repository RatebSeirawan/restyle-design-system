import * as React from "react";
import { View } from "react-native";
import { createText, TextProps as RestyleTextProps } from "@shopify/restyle";
import { Theme, useTheme } from "theme";

interface Props
  extends React.ComponentProps<typeof View>,
    Omit<TextProps, "fontSize" | "fontWeight"> {
  sx?: TextProps;
  fontSize?: keyof Theme["fontSize"];
  fontWeight?: keyof Theme["fontWeight"];
}

const RestyleText = createText<Theme>();

export const Text: React.FC<Props> = ({
  children,
  fontSize,
  fontWeight,
  sx = {},
  ...rest
}) => {
  const theme = useTheme();
  const extraProps = {
    fontSize: theme.fontSize[fontSize ?? "p"],
    fontWeight: theme.fontWeight[fontWeight ?? "normal"],
  };

  return (
    <RestyleText {...extraProps} {...rest} {...sx}>
      {children}
    </RestyleText>
  );
};

export type TextProps = RestyleTextProps<Theme>;
