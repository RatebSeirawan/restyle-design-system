import * as React from "react";

import EditScreenInfo from "components/EditScreenInfo";
import { Box, Text, TextProps } from "common/index";

export default function TabTwoScreen() {
  const textSX: TextProps = {
    fontSize: 21,
  };

  return (
    <Box
      flex={1}
      alignItems="center"
      justifyContent="center"
      backgroundColor="mainBackground"
      // sx={{ backgroundColor: "cardPrimaryBackground" }}
    >
      <Text fontSize="h1" fontWeight="bold" sx={textSX}>
        Tab Two
      </Text>
      <Box backgroundColor="grey" marginVertical="l" height={1} width="80%" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </Box>
  );
}
