import { StaticImageData } from "next/image";
import { profile1, profile2 } from "@/images";

interface CarouselProps {
  id: number;
  userImage: StaticImageData;
  userName: string;
  userTitle: string;
  userTestimonial: string;
}

const carouselList: CarouselProps[] = [
  {
    id: 1,
    userImage: profile1,
    userName: "Emanuel Eka",
    userTitle: "Blockchain Enthusiast",
    userTestimonial:
      "Finally, a wallet that prioritizes both security and simplicity. I feel in full control of my assets!, I haven’t seen any other like cryptic",
  },
  {
    id: 2,
    userImage: profile2,
    userName: "Baby Mercy",
    userTitle: "Crypto Trader",
    userTestimonial:
      "I’ve tried multiple wallets, but this one stands out. The interface is sleek, and transactions are lightning fast",
  },
];

export default carouselList;
