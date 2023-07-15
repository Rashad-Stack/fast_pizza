export interface Cart {
  readonly pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Food {
  readonly id: string;
  name: string;
  unitPrice: number;
  ingredients: Array<string>;
  soldOut: boolean;
  imageUrl: string;
}

export interface Order {
  readonly id?: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: date;
  position: string;
  orderPrice: number;
  priorityPrice: number;
  status?: string;
  cart: Cart[];
}

export interface User {
  name: string;
}

export interface RootState {
  user: User;
}
