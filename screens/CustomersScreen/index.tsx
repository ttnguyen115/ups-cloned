import React from "react";
import { SafeAreaView, Text } from "react-native";
import { useTailwind } from "tailwind-rn/dist";

export const CustomersScreen = () => {
  const tw = useTailwind();

  return (
    <SafeAreaView>
      <Text style={tw("text-blue-500")}>CustomersScreen</Text>
    </SafeAreaView>
  );
};
