import { useNavigation } from "@react-navigation/native";
import { Card, Icon } from "@rneui/themed";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import { useCustomerOrders } from "../../hooks";
import { CustomerScreenNavigationProp } from "../../screens";

type CustomerCardProps = {
  email: string;
  name: string;
  userId: string;
};

export const CustomerCard = ({ email, name, userId }: CustomerCardProps) => {
  const { loading, error, orders } = useCustomerOrders(userId);
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();

  const handlePressCustomerCard = () =>
    navigation.navigate("MyModal", { userId, name });

  return (
    <TouchableOpacity onPress={handlePressCustomerCard}>
      <Card containerStyle={tw("p-5 rounded-lg")}>
        <View style={tw("flex-row justify-between")}>
          <View>
            <Text style={tw("text-2xl font-bold")}>{name}</Text>
            <Text style={[tw("text-sm"), { color: "#59C1CC" }]}>
              ID: {userId}
            </Text>
          </View>
          <View style={tw("flex-row items-center justify-end")}>
            <Text style={{ color: "#59C1CC" }}>
              {loading ? "loading..." : `${orders.length} x`}
            </Text>
            <Icon
              style={tw("mb-5 ml-auto")}
              name="box"
              type="entypo"
              color="#59C1CC"
              size={50}
            />
          </View>
        </View>
        <Card.Divider />
        <Text>{email}</Text>
      </Card>
    </TouchableOpacity>
  );
};
