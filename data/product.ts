export interface Products {
  title: string;
  slug: string;
  brand: string;
  price: number;
  description: string;
  features: string[];
  rating: number;
  reviews: number;
  image: string;
  blurhash: string;
}
export const products: Products[] = [
  {
    title: "Fresh Banana",
    slug: "Fresh-Banana",
    brand: "Miazi Farm",
    price: 0.99,
    description:
      "Experience the freshness of Miazi Farm's Fresh Banana. This nutritious fruit is rich in potassium and provides a natural source of energy. With its sweet and creamy taste, Fresh Banana is a versatile ingredient for smoothies, desserts, and healthy snacks. Add a touch of freshness to your day with Miazi Farm's Fresh Banana.",
    features: [
      "Rich in potassium and nutrients",
      "Natural source of energy",
      "Sweet and creamy taste",
      "Versatile ingredient for various recipes",
    ],
    rating: 4.6,
    reviews: 156,
    image: "/assets/products/Banana.jpeg",
    blurhash: "L%SiHObFx{s:j^bIj?jryGjuRNWX",
  },
  {
    title: "Fresh Apple",
    slug: "Fresh-Apple",
    brand: "Miazi Farm",
    price: 1.29,
    description:
      "Discover the crispness and juiciness of Miazi Farm's Fresh Apple. Bursting with flavor, this refreshing fruit is a perfect choice for a healthy snack or as an ingredient in salads and baked goods. Packed with essential vitamins and antioxidants, Fresh Apple supports overall well-being. Experience the goodness of Miazi Farm's Fresh Apple.",
    features: [
      "Crisp and juicy texture",
      "Refreshing and flavorful",
      "Versatile ingredient for various recipes",
      "Packed with vitamins and antioxidants",
    ],
    rating: 4.7,
    reviews: 234,
    image: "/assets/products/Apple.jpeg",
    blurhash: "LkRo?IV[.8tQt7j[WBay?^t7IARQ",
  },
  {
    title: "Crushed Tomatoes",
    slug: "Crushed-Tomatoes",
    brand: "Miazi Farm",
    price: 1.99,
    description:
      "Experience the rich and tangy flavor of Miazi Farm's Crushed Tomatoes. Made from ripe and juicy tomatoes, these crushed tomatoes are perfect for creating delicious sauces, soups, and stews. Their vibrant color and smooth texture add a delightful touch to your culinary creations. Elevate your dishes with the exceptional taste of Miazi Farm's Crushed Tomatoes.",
    features: [
      "Made from ripe and juicy tomatoes",
      "Ideal for sauces, soups, and stews",
      "Vibrant color and smooth texture",
      "Enhances the flavor of your dishes",
    ],
    rating: 4.5,
    reviews: 189,
    image: "/assets/products/Crushed-tomatoes.jpg",
    blurhash: "LxRU,Tof.mazxuW;Rjo2y?afR5kC",
  },
  {
    title: "Cadbury 5 Star Chocolate",
    slug: "Cadbury-5-Star-Chocolate",
    brand: "Cadbury",
    price: 1.99,
    description:
      "Indulge in the irresistible taste of Cadbury 5 Star Chocolate. Made with premium ingredients, this chocolate bar offers a delightful combination of smooth caramel and crunchy nougat, all enveloped in rich and creamy milk chocolate. With its heavenly texture and delicious flavor, Cadbury 5 Star Chocolate is a perfect treat for chocolate lovers.",
    features: [
      "Smooth caramel and crunchy nougat",
      "Enveloped in rich and creamy milk chocolate",
      "Premium ingredients for a delightful taste",
      "Irresistible treat for chocolate lovers",
    ],
    rating: 4.8,
    reviews: 275,
    image: "/assets/products/Cadbury-5-Star-Chocolate.jpeg",
    blurhash: "LxQl]|a#?woeNLazt3j@%ij@Mwaz",
  },
  {
    title: "Britannia Cheese Slices",
    slug: "Britannia-Cheese-Slices",
    brand: "Britannia",
    price: 2.49,
    description:
      "Britannia Cheese Slices are a convenient and delicious way to add creamy goodness to your meals. Made from high-quality cheese, these slices are perfect for sandwiches, burgers, or simply enjoyed on their own. Each slice melts beautifully, adding a rich and cheesy flavor to your favorite dishes. Enjoy the taste and convenience of Britannia Cheese Slices.",
    features: [
      "Made from high-quality cheese",
      "Perfect for sandwiches and burgers",
      "Melts beautifully for a rich and cheesy flavor",
      "Convenient and delicious",
    ],
    rating: 4.5,
    reviews: 162,
    image: "/assets/products/Britannia-Cheese-Slices.jpeg",
    blurhash: "LeR3WdX9?cskX9jsoIW;~qn~D$Si",
  },
  {
    title: "Blueberry Greek Yogurt",
    slug: "Blueberry-Greek-Yogurt",
    brand: "Miazi Farm",
    price: 3.99,
    description:
      "Experience the tangy and creamy delight of Miazi Farm Blueberry Greek Yogurt. Made with authentic Greek yogurt culture and luscious blueberries, this yogurt offers a refreshing and nutritious snack. Packed with protein and probiotics, it promotes gut health and satisfies your cravings. Enjoy the creamy texture and burst of blueberry flavor with Miazi Farm Blueberry Greek Yogurt.",
    features: [
      "Made with authentic Greek yogurt culture",
      "Infused with luscious blueberries",
      "Rich in protein and probiotics",
      "Promotes gut health",
    ],
    rating: 4.7,
    reviews: 421,
    image: "/assets/products/Blueberry-Greek-Yogurt.jpeg",
    blurhash: "LSRfnMoe~pogt8ofoJRj~pWC4.oc",
  },
  {
    title: "Beatroot",
    slug: "Beatroot",
    brand: "Miazi Farm",
    price: 0.99,
    description:
      "Discover the vibrant and earthy flavors of Miazi Farm Beetroot. Grown with care, this nutritious root vegetable is known for its rich color and unique taste. Packed with vitamins, minerals, and antioxidants, beetroot offers numerous health benefits. Incorporate it into salads, soups, or roast it for a delicious side dish. Embrace the natural goodness of Miazi Farm Beetroot.",
    features: [
      "Vibrant and earthy flavors",
      "Rich in vitamins, minerals, and antioxidants",
      "Versatile ingredient for various recipes",
      "Offers numerous health benefits",
    ],
    rating: 4.3,
    reviews: 89,
    image: "/assets/products/Beatroot.jpeg",
    blurhash: "LfS5^qWU.mxatRayV@j[?^s:H?Rj",
  },
  {
    title: "Haldiram’s Sev Bhujia",
    slug: "Haldirams-Sev-Bhujia",
    brand: "Haldiram's",
    price: 4.49,
    description:
      "Haldiram’s Sev Bhujia is a popular Indian snack known for its crispy and savory taste. Made from gram flour and a blend of spices, it offers a perfect balance of flavors. Enjoy this crunchy snack on its own or use it as a topping for chaats and other dishes. Haldiram’s Sev Bhujia is a must-try for snack lovers.",
    features: [
      "Crispy and savory snack",
      "Made from gram flour and a blend of spices",
      "Versatile as a topping or standalone snack",
      "Perfect for snack lovers",
    ],
    rating: 4.6,
    reviews: 314,
    image: "/assets/products/Haldiram’s-Sev-Bhujia.jpeg",
    blurhash: "LyR.+4ae.Tozs9jtS5ay%hj[Mwae",
  },
  {
    title: "Kellogg’s Original Cereals",
    slug: "Kelloggs-Original-Cereals",
    brand: "Kellogg's",
    price: 3.79,
    description:
      "Kellogg’s Original Cereals are a classic choice for a nutritious breakfast. Made from wholesome grains, these cereals offer a crunchy and satisfying start to your day. Packed with essential vitamins and minerals, they provide energy and support overall well-being. Enjoy a bowl of Kellogg’s Original Cereals with milk or as a topping for yogurt and smoothies.",
    features: [
      "Made from wholesome grains",
      "Crunchy and satisfying breakfast option",
      "Packed with essential vitamins and minerals",
      "Versatile as a cereal or topping",
    ],
    rating: 4.4,
    reviews: 195,
    image: "/assets/products/Kellogg’s-Original-Cereals.jpeg",
    blurhash: "LuR{Mcae%%ognhj@kCayyFj]R5js",
  },
  {
    title: "Napolitanke Ljesnjak",
    slug: "Napolitanke-Ljesnjak",
    brand: "Miazi Farm",
    price: 2.99,
    description:
      "Napolitanke Ljesnjak is a delightful hazelnut wafer biscuit that will satisfy your sweet cravings. Made with layers of crispy wafer and a rich hazelnut filling, it offers a perfect balance of textures and flavors. Whether enjoyed with a cup of coffee or as a snack on its own, Napolitanke Ljesnjak is a delicious treat that will leave you wanting more.",
    features: [
      "Hazelnut wafer biscuit",
      "Layers of crispy wafer and rich hazelnut filling",
      "Perfect balance of textures and flavors",
      "Delicious treat for sweet cravings",
    ],
    rating: 4.8,
    reviews: 432,
    image: "/assets/products/Napolitanke-Ljesnjak.jpeg",
    blurhash: "LMOMZ+~q?b9G?bM|Rit7~paz-pt7",
  },
  {
    title: "NutriChoice Digestive",
    slug: "NutriChoice-Digestive",
    brand: "Miazi Farm",
    price: 2.49,
    description:
      "NutriChoice Digestive biscuits are a wholesome and nutritious snack. Made with whole wheat flour and a blend of natural ingredients, these biscuits offer a perfect balance of taste and health. They are rich in fiber and provide a feeling of satiety. Enjoy NutriChoice Digestive biscuits as a guilt-free snack or as an accompaniment to tea or coffee.",
    features: [
      "Wholesome and nutritious biscuits",
      "Made with whole wheat flour and natural ingredients",
      "Rich in fiber for a feeling of satiety",
      "Guilt-free snack or accompaniment to tea/coffee",
    ],
    rating: 4.5,
    reviews: 376,
    image: "/assets/products/NutriChoice-Digestive.jpeg",
    blurhash: "LySFkUoex^aeoya#ayj?%%afMxkC",
  },
  {
    title: "Onion Flavour Potato",
    slug: "Onion-Flavour-Potato",
    brand: "Miazi Farm",
    price: 1.49,
    description:
      "Savor the delicious taste of Miazi Farm Onion Flavour Potato chips. Made from premium quality potatoes and seasoned with a delightful onion flavor, these chips are a perfect snack for any occasion. Enjoy the crispy texture and mouthwatering taste of Miazi Farm Onion Flavour Potato chips with friends and family.",
    features: [
      "Made from premium quality potatoes",
      "Delightful onion flavor",
      "Crispy texture for an enjoyable snacking experience",
      "Perfect for sharing with friends and family",
    ],
    rating: 4.7,
    reviews: 295,
    image: "/assets/products/Onion-Flavour-Potato.jpeg",
    blurhash: "LwR3cij[?dkCj[fQj[js%Nj[Mwax",
  },
];
export const dailySells: Products[] = [
  {
    title: "Britannia Cheese Slices",
    slug: "Britannia-Cheese-Slices",
    brand: "Britannia",
    price: 2.49,
    description:
      "Britannia Cheese Slices are a convenient and delicious way to add creamy goodness to your meals. Made from high-quality cheese, these slices are perfect for sandwiches, burgers, or simply enjoyed on their own. Each slice melts beautifully, adding a rich and cheesy flavor to your favorite dishes. Enjoy the taste and convenience of Britannia Cheese Slices.",
    features: [
      "Made from high-quality cheese",
      "Perfect for sandwiches and burgers",
      "Melts beautifully for a rich and cheesy flavor",
      "Convenient and delicious",
    ],
    rating: 4.5,
    reviews: 162,
    image: "/assets/products/Britannia-Cheese-Slices.jpeg",
    blurhash: "LeR3WdX9?cskX9jsoIW;~qn~D$Si",
  },
  {
    title: "Kellogg’s Original Cereals",
    slug: "Kelloggs-Original-Cereals",
    brand: "Kellogg's",
    price: 3.79,
    description:
      "Kellogg’s Original Cereals are a classic choice for a nutritious breakfast. Made from wholesome grains, these cereals offer a crunchy and satisfying start to your day. Packed with essential vitamins and minerals, they provide energy and support overall well-being. Enjoy a bowl of Kellogg’s Original Cereals with milk or as a topping for yogurt and smoothies.",
    features: [
      "Made from wholesome grains",
      "Crunchy and satisfying breakfast option",
      "Packed with essential vitamins and minerals",
      "Versatile as a cereal or topping",
    ],
    rating: 4.4,
    reviews: 195,
    image: "/assets/products/Kellogg’s-Original-Cereals.jpeg",
    blurhash: "LuR{Mcae%%ognhj@kCayyFj]R5js",
  },
  {
    title: "Onion Flavour Potato",
    slug: "Onion-Flavour-Potato",
    brand: "Miazi Farm",
    price: 1.49,
    description:
      "Savor the delicious taste of Miazi Farm Onion Flavour Potato chips. Made from premium quality potatoes and seasoned with a delightful onion flavor, these chips are a perfect snack for any occasion. Enjoy the crispy texture and mouthwatering taste of Miazi Farm Onion Flavour Potato chips with friends and family.",
    features: [
      "Made from premium quality potatoes",
      "Delightful onion flavor",
      "Crispy texture for an enjoyable snacking experience",
      "Perfect for sharing with friends and family",
    ],
    rating: 4.7,
    reviews: 295,
    image: "/assets/products/Onion-Flavour-Potato.jpeg",
    blurhash: "LwR3cij[?dkCj[fQj[js%Nj[Mwax",
  },
];
export const shoppingCart: Products[] = [
  {
    title: "Britannia Cheese Slices",
    slug: "Britannia-Cheese-Slices",
    brand: "Britannia",
    price: 2.49,
    description:
      "Britannia Cheese Slices are a convenient and delicious way to add creamy goodness to your meals. Made from high-quality cheese, these slices are perfect for sandwiches, burgers, or simply enjoyed on their own. Each slice melts beautifully, adding a rich and cheesy flavor to your favorite dishes. Enjoy the taste and convenience of Britannia Cheese Slices.",
    features: [
      "Made from high-quality cheese",
      "Perfect for sandwiches and burgers",
      "Melts beautifully for a rich and cheesy flavor",
      "Convenient and delicious",
    ],
    rating: 4.5,
    reviews: 162,
    image: "/assets/products/Britannia-Cheese-Slices.jpeg",
    blurhash: "LeR3WdX9?cskX9jsoIW;~qn~D$Si",
  },
  {
    title: "Kellogg’s Original Cereals",
    slug: "Kelloggs-Original-Cereals",
    brand: "Kellogg's",
    price: 3.79,
    description:
      "Kellogg’s Original Cereals are a classic choice for a nutritious breakfast. Made from wholesome grains, these cereals offer a crunchy and satisfying start to your day. Packed with essential vitamins and minerals, they provide energy and support overall well-being. Enjoy a bowl of Kellogg’s Original Cereals with milk or as a topping for yogurt and smoothies.",
    features: [
      "Made from wholesome grains",
      "Crunchy and satisfying breakfast option",
      "Packed with essential vitamins and minerals",
      "Versatile as a cereal or topping",
    ],
    rating: 4.4,
    reviews: 195,
    image: "/assets/products/Kellogg’s-Original-Cereals.jpeg",
    blurhash: "LuR{Mcae%%ognhj@kCayyFj]R5js",
  },
  {
    title: "Onion Flavour Potato",
    slug: "Onion-Flavour-Potato",
    brand: "Miazi Farm",
    price: 1.49,
    description:
      "Savor the delicious taste of Miazi Farm Onion Flavour Potato chips. Made from premium quality potatoes and seasoned with a delightful onion flavor, these chips are a perfect snack for any occasion. Enjoy the crispy texture and mouthwatering taste of Miazi Farm Onion Flavour Potato chips with friends and family.",
    features: [
      "Made from premium quality potatoes",
      "Delightful onion flavor",
      "Crispy texture for an enjoyable snacking experience",
      "Perfect for sharing with friends and family",
    ],
    rating: 4.7,
    reviews: 295,
    image: "/assets/products/Onion-Flavour-Potato.jpeg",
    blurhash: "LwR3cij[?dkCj[fQj[js%Nj[Mwax",
  },
];

/*

product
  Apple => LkRo?IV[.8tQt7j[WBay?^t7IARQ
  ammul-butter => LkSP95WD%htPofayjZoM.ToeMxRk
  banana => L%SiHObFx{s:j^bIj?jryGjuRNWX
  beatroot => LfS5^qWU.mxatRayV@j[?^s:H?Rj
  Blueberry-Greek-Yogurt => LSRfnMoe~pogt8ofoJRj~pWC4.oc
  Britannia-Cheese-Slices => LeR3WdX9?cskX9jsoIW;~qn~D$Si
  Cadbury-5-Star-Chocolate => LxQl]|a#?woeNLazt3j@%ij@Mwaz
  Crushed-tomatoes = LxRU,Tof.mazxuW;Rjo2y?afR5kC
  kowi => LnRfg_oy.9V@t7j[WBae?djIISkC
  pinaple => LVRysdMx?b-=xvW:Rjn*_4tRD%M_
  Haldiram’s-Sev-Bhujia => LyR.+4ae.Tozs9jtS5ay%hj[Mwae
  Kellogg’s-Original-Cereals => LuR{Mcae%%ognhj@kCayyFj]R5js
  Napolitanke-Ljesnjak => LMOMZ+~q?b9G?bM|Rit7~paz-pt7
  NutriChoice-Digestive => LySFkUoex^aeoya#ayj?%%afMxkC
  AAHi = LwR3cij[?dkCj[fQj[js%Nj[Mwax
  Roast-Ground-Coffee => L+Psx4j[~qkCofj[j[ay-;fQIUf7
  Salted-Instant-Popcorn => LnQch*s:_NR*S5f6s,fk?bayD*of
  Slurrp-Millet-Chocolate => L%Q9.kj[_Nj[WBayofj[-=jsITa}
*/
