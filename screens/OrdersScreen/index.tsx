import React from "react";
import { SafeAreaView, Text } from "react-native";
import { useTailwind } from "tailwind-rn/dist";

export const OrdersScreen = () => {
  const tw = useTailwind();

  return (
    <SafeAreaView>
      <Text style={tw("text-blue-500")}>OrdersScreen</Text>
    </SafeAreaView>
  );
};
