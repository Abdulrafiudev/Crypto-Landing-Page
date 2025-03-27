import React from "react";
import { goArrow } from "@/images";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

const ArrowBtn: React.FC<{ children: React.ReactNode; className: string }> = ({
  children,
  className,
}) => {
  return (
    <Link href="#" className={clsx(className)}>
      {children}
      <Image src={goArrow} alt="arrow" height={20} width={20} />
    </Link>
  );
};

export default ArrowBtn;
