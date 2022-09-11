import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TabNavigator } from "./TabNavigator";

export type RootStackParams = {
  Main: undefined;
  MyModal: { userId: string; name: string };
  Order: { order: any };
};

const RootStack = createNativeStackNavigator<RootStackParams>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
