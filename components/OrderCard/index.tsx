import { Card, Icon } from "@rneui/themed";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import { Order } from "../../types";

type OrderCard = {
  item: Order;
};

export const OrderCard = ({ item }: OrderCard) => {
  const tw = useTailwind();

  return (
    <TouchableOpacity>
      <Card containerStyle={tw("px-5 rounded-lg")}>
        <View style={tw("flex-row justify-between items-center")}>
          <View>
            <Icon
              name="truck-delivery"
              color={"#EB6A7C"}
              type="material-community"
            />
            <Text style={{ fontSize: 10 }}>
              {new Date(item.createdAt).toDateString()}
            </Text>
          </View>
          <View>
            <Text style={[tw("text-gray-400"), { fontSize: 10 }]}>
              {item.carrier} - {item.trackingId}
            </Text>
            <Text style={tw("text-gray-500 text-xl")}>
              {item.trackingItems.customer.name}
            </Text>
          </View>
          <View style={tw("flex-row items-center")}>
            <Text style={[tw("text-sm"), { color: "#EB6A7C" }]}>
              {item.trackingItems.items.length} x
            </Text>
            <Icon name="box" type="feather" style={tw("ml-2")} />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};
