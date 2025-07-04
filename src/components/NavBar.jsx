"use client";
import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    items: [
      {
        label: "German Language Classes",
        href: "/services/german-language-classes",
      },
      {
        label: "Au Pair Visa",
        href: "/services/au-pair-visa",
      },
      {
        label: "Student Visa",
        href: "/services/student-visa",
      },
    ],
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

const NavBar = () => {
  const pathName = usePathname();
  const isActive = (href) => pathName === href;
  const activeStyle = "text-primary !font-medium cursor-pointer";
  const defaultStyle = "text-foreground hover:text-primary cursor-pointer";
  return (
    <div>
      <nav>
        <ul className="flex gap-4 font-semibold">
          {navItems.map((navItem) => (
            <li key={navItem.label}>
              {navItem.items ? (
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        type="button"
                        className={
                          isActive(navItem.href) ? activeStyle : defaultStyle
                        }
                      >
                        {navItem.label}
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="start">
                      {navItem.items.map((item) => (
                        <DropdownMenuItem key={item.label}>
                          <Link
                            href={item.href}
                            className={
                              isActive(item.href) ? activeStyle : defaultStyle
                            }
                          >
                            {item.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : (
                <Link
                  href={navItem.href}
                  className={
                    isActive(navItem.href) ? activeStyle : defaultStyle
                  }
                >
                  {navItem.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
