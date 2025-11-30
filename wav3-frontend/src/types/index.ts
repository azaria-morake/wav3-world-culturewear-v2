export interface User {
  id: string;
  email: string;
  name: string;
}

export interface ItemImages {
  front: string;
  back: string;
  label: string;
}

export interface Item {
  id: string;
  title: string;
  price: number;
  stock: number;
  images: ItemImages;
}

export interface Collection {
  id: string;
  slug: string;
  title: string;
  theme: string;
  heroImage: string; // URL or local asset path
  items: Item[];
}

export type PendingActionType = 'ADD_WISHLIST' | 'ADD_CART' | 'CHECKOUT';

export interface PendingAction {
  type: PendingActionType;
  payload: any;
  timestamp: number;
}
