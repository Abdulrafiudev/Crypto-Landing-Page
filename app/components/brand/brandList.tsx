import { bitmap, bitmart, bitget, gitcoin } from "@/images";
import { StaticImageData } from "next/image";

interface brandListProps {
  id: number;
  image: StaticImageData | string;
  alt: string;
}

const brandList: brandListProps[] = [
  {
    id: 1,
    image: bitmap,
    alt: "bitmap",
  },
  {
    id: 2,
    image: bitmart,
    alt: "bitmart",
  },
  {
    id: 3,
    image: bitget,
    alt: "bitget",
  },
  {
    id: 4,
    image: gitcoin,
    alt: "gitcoin",
  },
];

export default brandList;
