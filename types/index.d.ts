export type Customer = {
  email: string;
  name: string;
};

export type CustomerList = {
  name: ID;
  value: Customer;
};

export type TrackingItem = {
  customer_id: ID;
  customer: Customer;
  items: Item[];
};

export type Item = {
  item_id: ID;
  name: string;
  price: number;
  quantity: number;
};

type Order = {
  carrier: string;
  createdAt: string;
  shippingCost: number;
  trackingId: string;
  trackingItems: TrackingItem;
  Lat: number;
  Lng: number;
  Address: string;
  City: string;
};

export type OrderResponse = {
  value: Order;
};

export type CustomerResponse = {
  name: ID;
  value: Customer;
};
