import { ReactElement } from "react";

import { BsBoxSeam, BsTablet, BsTruck } from "react-icons/bs";
import { CiClock1 } from "react-icons/ci";
import { TfiGift, TfiLoop } from "react-icons/tfi";

export const featuresOfServices: {
  title: string;
  icon: ReactElement;
  description: string;
}[] = [
  {
    title: "Cheapest basket 25 years running",
    description:
      "Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.",
    icon: <CiClock1 />,
  },
  {
    title: "Best Prices & Offers",
    description:
      "Cheaper prices than your local supermarket, great cashback offers to top it off.",
    icon: <TfiGift />,
  },
  {
    title: "Wide Assortment",
    description:
      "Choose from 5000+ products across food, personal care, household & other categories",
    icon: <BsBoxSeam />,
  },
  {
    title: "Shop with our app",
    description:
      "Shop on the go with our app for tablet and mobile.Get live order tracking. Get latest feature updates.",
    icon: <BsTablet />,
  },
  {
    title: "Want your shopping today?",
    description:
      "Choose from our award winning Express delivery or collection options.",
    icon: <BsTruck />,
  },
  {
    title: "Easy Returns/Refund",
    description:
      "Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy.",
    icon: <TfiLoop />,
  },
];
