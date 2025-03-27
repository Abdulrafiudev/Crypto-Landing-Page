interface navBarListProps {
  id: number;
  name: string;
  href: string;
}

const NavBarList: navBarListProps[] = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Features",
    href: "/features",
  },
  {
    id: 3,
    name: "How it works",
    href: "/how-it-works",
  },
  {
    id: 4,
    name: "Security",
    href: "/security",
  },
  {
    id: 5,
    name: "Market Cap",
    href: "/Market-Cap",
  },
];

export default NavBarList;
