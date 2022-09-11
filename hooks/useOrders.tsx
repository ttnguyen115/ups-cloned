import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ORDERS } from "../lib/graphql";
import { Order, OrderResponse } from "../types";

export const useOrders = () => {
  const { data, loading, error } = useQuery(GET_ORDERS);
  const [orders, setOrders] = React.useState<Order[]>([]);

  React.useEffect(() => {
    if (!data) return;
    const ordersResponse: Order[] = data.getOrders.map(
      ({ value }: OrderResponse) => ({
        carrier: value.carrier,
        createdAt: value.createdAt,
        shippingCost: value.shippingCost,
        trackingId: value.trackingId,
        trackingItems: value.trackingItems,
        Address: value.Address,
        City: value.City,
        Lat: value.Lat,
        Lng: value.Lng,
      })
    );
    setOrders(ordersResponse);
  }, [data]);

  return { loading, error, orders };
};
