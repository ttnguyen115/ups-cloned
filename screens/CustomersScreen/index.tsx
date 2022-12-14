import { useQuery } from "@apollo/client";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Input } from "@rneui/themed";
import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import { CustomerCard, RootStackParams } from "../../components";
import { TabStackParams } from "../../components/Navigator/TabNavigator";
import { GET_CUSTOMERS } from "../../lib/graphql";
import { CustomerList, CustomerResponse } from "../../types";

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParams, "Customers">,
  NativeStackNavigationProp<RootStackParams>
>;

export const CustomersScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  const [searchCustomer, setSearchCustomer] = React.useState<string>("");
  const { loading, error, data } = useQuery(GET_CUSTOMERS);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#59C1CC" }}>
      <Image
        source={{ uri: "https://links.papareact.com/3jc" }}
        containerStyle={tw("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Input
        placeholder="Search by Customer"
        value={searchCustomer}
        onChangeText={setSearchCustomer}
        containerStyle={tw("bg-white pt-5 pb-0 px-10")}
      />
      {data?.getCustomers
        .filter((customer: CustomerList) =>
          customer.value.name.includes(searchCustomer)
        )
        .map(({ name: ID, value: { name, email } }: CustomerResponse) => (
          <CustomerCard key={ID} email={email} name={name} userId={ID} />
        ))}
    </ScrollView>
  );
};
