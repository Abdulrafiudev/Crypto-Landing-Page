import { StaticImageData } from "next/image";
import { usdt, usdt2, bitcoin } from "@/images";

export interface TokenListProps {
  id: number;
  image?: StaticImageData | null;
  wording?: string;
}

const tokenList: TokenListProps[] = [
  {
    id: 1,
    image: usdt,
  },
  {
    id: 2,
    wording: "Popular Crypto Assets",
  },
  {
    id: 3,
    image: usdt2,
  },
  {
    id: 4,
    image: bitcoin,
  },
  {
    id: 5,
    image: usdt2,
  },
  {
    id: 6,
    image: usdt,
  },
];

export default tokenList;
