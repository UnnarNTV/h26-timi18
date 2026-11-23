export type Product = {
  id: number;
  name: string;
  price: number;
};

export const products: Product[] = [
  { id: 1, name: "Kaffibolli", price: 1290 },
  { id: 2, name: "Vatnsbrúsi", price: 1890 },
  { id: 3, name: "Bakpoki", price: 5900 },
  { id: 4, name: "Taska", price: 4900 },
  { id: 5, name: "Nocco", price: 490 },
];
