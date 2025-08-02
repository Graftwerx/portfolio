"use client";
import Link from "next/link";
import { navItems } from "./Navbar";

export function Bottom() {
  return (
    <footer className="my-5">
      <ul className="flex flex-wrap justify-center">
        {navItems.map((item, index) => (
          <div key={index} className="px-5 py-2">
            <Link href={item.href} className="text-muted-foreground">
              {item.name}
            </Link>
          </div>
        ))}
      </ul>
      <p className="mt-2 text-center text-muted-foreground">
        &copy; 2025 Julian Odilibe. All rights reserved.
      </p>
    </footer>
  );
}
