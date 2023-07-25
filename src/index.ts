interface User {
  id: number;
  name: string;
  role: 'admin' | 'customer';
}

interface Beverage {
  name: string;
  price: number;
}

interface Order {
  orderId: number;
  customerId: number;
  customerName: string;
  beverageName: string;
  status: 'placed' | 'completed' | 'picked-up';
}

let beverages: Beverage[] = [];
let orders: Order[] = [];
