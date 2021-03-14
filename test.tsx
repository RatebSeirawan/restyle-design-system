import React, { Component, useEffect, useState } from "react";
import { View, Text, Card, Button } from "react-native-ui-lib";

import { Colors, Typography, Spacings } from "react-native-ui-lib";

const theme = {
  bluish: {
    primaryColor: "#2364AA",
  },
  pinky: {
    primaryColor: "#fafa",
  },
  grayish: {
    primaryColor: "#cccc",
  },
};

Colors.loadColors(theme.bluish);

const useTheme = () => {
  const [scheme, setScheme] = useState<"bluish" | "pinky" | "grayish">(
    "bluish"
  );

  Colors.loadColors(theme[scheme]);

  setTimeout(() => {
    Colors.loadColors({});
  }, 0);

  return { setScheme };
};

export const MyScreen = () => {
  const { setScheme } = useTheme();

  return (
    <View flex padding-page useSafeArea margin-12>
      <Button
        label="Pink"
        bg-primaryColor
        onPress={() => {
          setScheme("pinky");
        }}
      ></Button>
      <Button
        label="Blue"
        bg-primaryColor
        onPress={() => {
          setScheme(() => "bluish");
        }}
      ></Button>
      <Button
        label="Gray"
        bg-primaryColor
        onPress={() => {
          setScheme(() => "grayish");
        }}
      ></Button>
    </View>
  );
};
