import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Image } from "@rneui/themed";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import { OrderCard, RootStackParams } from "../../components";
import { TabStackParams } from "../../components/Navigator/TabNavigator";
import { useOrders } from "../../hooks";

export type OrderScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParams, "Orders">,
  NativeStackNavigationProp<RootStackParams>
>;

export const OrdersScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<OrderScreenNavigationProp>();
  const { loading, error, orders } = useOrders();
  const [ascending, setAscending] = React.useState<boolean>(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarLabel: ({ focused, color }) => (
        <Text style={{ color: focused ? "#EB6A7C" : color, fontSize: 10 }}>
          Orders
        </Text>
      ),
    });
  }, []);

  return (
    <ScrollView style={{backgroundColor: "#EB6A7C"}}>
      <Image
        source={{ uri: "https://links.papareact.com/m51" }}
        containerStyle={tw("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View>
        <Button
          color="pink"
          onPress={() => setAscending(!ascending)}
          titleStyle={{ color: "gray", fontWeight: "400" }}
          style={tw("py-2 px-5")}
        >
          {ascending ? "Showing: Oldest First" : "Showing: Most Recent First"}
        </Button>

        {orders
          ?.sort((a, b) => {
            if (ascending) {
              return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
            } else {
              return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1;
            }
          })
          .map((order) => (
            <OrderCard key={order.trackingId} item={order} />
          ))}
      </View>
    </ScrollView>
  );
};
