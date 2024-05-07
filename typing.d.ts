declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

type Category = {
  id: string;
  title?: string;
  icon: any;
};

type BoxProps = {
  img: any;
  title: string;
  description: string;
  price: number;
  type: "blue" | "red" | "green" | "orange";
  tag?: "New" | "Top" | "Rare";
  category: string;
  id: string;
};

type ProductProps = {
  img: any;
  title: string;
  description: string;
  price: number;
//   category: string;
  id: string;
};
