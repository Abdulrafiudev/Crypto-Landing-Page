interface navBarListProps {
  id: number;
  name: string;
  href: string;
}

const NavBarList: navBarListProps[] = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "Brand",
    href: "#brand",
  },
  {
    id: 3,
    name: "About",
    href: "#about",
  },
  {
    id: 4,
    name: "How it works",
    href: "#how-it-works",
  },
  {
    id: 5,
    name: "Features",
    href: "#features",
  },
  {
    id: 6,
    name: "Assets",
    href: "#assets",
  },
  {
    id: 7,
    name: "Testimonials",
    href: "#testimonials",
  },
];

export default NavBarList;
