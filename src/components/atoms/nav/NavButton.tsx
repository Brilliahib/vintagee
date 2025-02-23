import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link as NavbarLink } from "@/components/organisms/navbar/Navbar";
import NavLink from "./NavLink";

interface NavHeaderProps {
  links: NavbarLink[];
}

export default function NavButton({ links }: NavHeaderProps) {
  return (
    <>
      <div className="hidden items-center gap-4 md:flex">
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant={"outline"}>Login</Button>
          </Link>
          <Link href="/register">
            <Button variant={"default"}>Register</Button>
          </Link>
        </div>
      </div>

      <div className="flex items-center md:hidden">
        <Sheet>
          {/* Hamburger */}
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="w-full shrink-0 border-0 bg-white md:hidden"
            >
              <Menu
                style={{ height: "20px", width: "20px" }}
                className="h-24 w-24"
              />
            </Button>
          </SheetTrigger>

          <SheetContent className="flex flex-col">
            <div className="mx-auto my-8">
              <Link href={"/"} className="flex items-center gap-2">
                <h1 className="font-bold text-primary">Vintagee</h1>
              </Link>
            </div>
            <nav className="grid-gap-2 font-poppins space-y-4">
              {links.map((link) => (
                <NavLink key={link.label} {...link} />
              ))}
              <div className="flex flex-col space-y-4">
                <Link href="/login">
                  <Button variant={"outline"} className="w-full">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant={"default"} className="w-full">
                    Register
                  </Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
