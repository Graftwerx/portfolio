"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { MobileMenu } from "./MobileMenu";

export const navItems = [
  { name: "Home", href: "/" },
  { name: "Guestbook", href: "/guestbook" },
  { name: "Projects", href: "/projects" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="max-w-7xl mx-auto px-4 md:px-8 py-5 grid grid-cols-12">
      {/* Logo */}
      <div className="col-span-6 flex md:col-span-3">
        <Link href="/" className="text-3xl font-semibold">
          Julian <span className="text-blue-600">Odilibe</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex justify-center items-center col-span-6">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                  data-active={pathname === item.href}
                >
                  {/* Link now provides the <a> */}
                  <Link href={item.href}>{item.name}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right Actions */}
      <div className="flex items-center justify-end md:col-span-3 col-span-6">
        <Button className="hidden sm:flex" asChild>
          <a href="mailto:julitoninc@gmail.com">Reach Out</a>
        </Button>
        <div className="sm:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
