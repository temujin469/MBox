import icons from "../../constants/icons";
import images from "../../constants/images";

export const categories: Category[] = [
  {
    id: "1",
    title: "Clothes",
    icon: icons.Clothes,
  },
  {
    id: "2",
    title: "Mobile",
    icon: icons.Phone,
  },
  {
    id: "3",
    title: "Food",
    icon: icons.Burger,
  },
  {
    id: "4",
    title: "Games",
    icon: icons.Game,
  },
  {
    id: "5",
    title: "Tech",
    icon: icons.Camera,
  },
  {
    id: "6",
    title: "Beaty",
    icon: icons.Beauty,
  },
];

export const boxs: BoxProps[] = [
  {
    img: images.lgBlueBox,
    title: "Nike Bo",
    type: "blue",
    description: "Up to 5’999 worth box",
    price: 5999.0,
    tag: "Rare",
    category: "mobile",
    id: "1",
  },

  {
    img: images.lgGreenBox,
    type: "green",
    title: "Nike Bo",
    description: "Up to 5’999 worth box",
    price: 5999.0,
    category: "mobile",
    id: "3",
  },

  {
    img: images.lgOrangeBox,
    title: "Nike Bo",
    type: "orange",
    description: "Up to 5’999 worth box",
    price: 5999.0,
    category: "mobile",
    id: "4",
  },
  {
    img: images.lgRedBox,
    type: "red",
    title: "Nike Bo",
    description: "Up to 5’999 worth box",
    price: 5999.0,
    tag: "Top",
    category: "mobile",
    id: "2",
  },
];

export const products: ProductProps[] = [
  {
    img: images.iphone15,
    title: "Iphone 15",
    description: "Apple  •  0.15%",
    price: 790.0,
    // category: "mobile",
    id: "1",
  },

  {
    img: images.iphone14,
    title: "Iphone 14",
    description: "Apple  •  0.15%",
    price: 5999.0,
    // category: "mobile",
    id: "2",
  },
  {
    img: images.iphone15pro,
    title: "iphone 15 Pro",
    description: "Apple  •  0.15%",
    price: 990.0,
    // category: "mobile",
    id: "3",
  },
  {
    img: images.iphone14,
    title: "Iphone 14",
    description: "Apple  •  0.15%",
    price: 5999.0,
    // category: "mobile",
    id: "4",
  },
  {
    img: images.iphone15,
    title: "Iphone 15",
    description: "Apple  •  0.15%",
    price: 790.0,
    // category: "mobile",
    id: "5",
  },
  {
    img: images.iphone14,
    title: "Iphone 14",
    description: "Apple  •  0.15%",
    price: 5999.0,
    // category: "mobile",
    id: "6",
  },
];
