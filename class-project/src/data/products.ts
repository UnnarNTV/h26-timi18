export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};

export type Category = {
  slug: string;
  name: string;
};

export const categories: Category[] = [
  { slug: "eldhus", name: "Eldhús" },
  { slug: "ferdalog", name: "Ferðalög" },
];

export const products: Product[] = [
  { id: 1, name: "Kaffibolli", price: 1290, category: "eldhus" },
  { id: 2, name: "Vatnsbrúsi", price: 1890, category: "ferdalog" },
  { id: 3, name: "Bakpoki", price: 5900, category: "ferdalog" },
  { id: 4, name: "Taska", price: 4900, category: "ferdalog" },
  { id: 5, name: "Nocco", price: 490, category: "eldhus" },
  { id: 6, name: "Mjólk", price: 270, category: "eldhus" },
];
