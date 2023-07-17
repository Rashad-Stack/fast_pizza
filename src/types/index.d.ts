export interface Cart {
  readonly pizzaId: string;
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
  orderPrice?: number;
  priorityPrice?: number;
  status?: string;
  cart: Cart[];
}

export interface PatchOrder {
  readonly id?: string;
  customer?: string;
  phone?: string;
  address?: string;
  priority?: boolean;
  estimatedDelivery?: date;
  position?: string;
  orderPrice?: number;
  priorityPrice?: number;
  status?: string;
  cart?: Cart[];
}

export interface UserState {
  name: string;
  status: "idle" | "loading" | "error";
  position: { latitude: number; longitude: number };
  address: string;
  error: string | undefined;
}

type UserAction = {
  payload: {
    position: Position;
    address: string;
  };
};

export interface CartState {
  cart: Array<Cart>;
}

export interface RootState {
  user: User;
  cart: CartState;
}
