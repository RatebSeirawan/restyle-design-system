import * as React from "react";
import {
  ThemeProvider as RestyleThemeProvider,
  useTheme as useRestyleTheme,
} from "@shopify/restyle";

import theme, { Theme } from "./theme";

export const ThemeProvider: React.FC = ({ children }) => {
  return <RestyleThemeProvider theme={theme}>{children}</RestyleThemeProvider>;
};

export const useTheme = () => {
  const _theme = useRestyleTheme<Theme>();

  return _theme;
};
