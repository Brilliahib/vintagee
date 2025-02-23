"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import NavButton from "@/components/atoms/nav/NavButton";
import NavL from "@/components/atoms/nav/NavL";
import NavLink from "@/components/atoms/nav/NavLink";
import NavSearch from "@/components/atoms/nav/NavSearch";

export interface Link {
  href: string;
  label: string;
  active?: boolean;
}

export default function Navbar() {
  const pathname = usePathname();

  const links = useMemo(
    () => [
      {
        href: "/woman",
        label: "Woman",
        active: pathname.startsWith("/woman"),
      },
      {
        href: "/man",
        label: "Man",
        active: pathname.startsWith("/man"),
      },
      {
        href: "/kids",
        label: "Kids",
        active: pathname.startsWith("/kids"),
      },
      {
        href: "/entertainments",
        label: "Entertainments",
        active: pathname.startsWith("/entertainments"),
      },
    ],
    [pathname],
  );

  return (
    <>
      <div className="sticky top-0 z-50 mb-0 mb-6 w-full bg-background">
        <div className="pad-x flex justify-between gap-8 bg-background py-3 md:gap-12">
          <NavL />
          <NavSearch />
          <NavButton links={links} />
        </div>
        <div className="border-b">
          <nav className="pad-x hidden items-center space-x-8 py-3 font-semibold md:flex">
            {links.map((link) => (
              <NavLink key={link.label} {...link} />
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
