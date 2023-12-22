"use client";
import { titleFont } from "@/config/fonts";
import { Popover, Transition } from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment, use } from "react";

import styles from "./styles.module.css";
import { useUIStore } from "@/store";

const navigation = {
  categories: [
    {
      label: "Hombres",
      href: "/category/men",
    },
    {
      label: "Mujeres",
      href: "/category/women",
    },
    {
      label: "Niños",
      href: "/category/kids",
    },
  ],
};

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <nav aria-label="Top" className="px-4">
          <div className="border-b border-gray-200 px-4 pb-14 sm:px-0 sm:pb-0">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex flex-1">
                <Link href="/">
                  <span
                    className={`${titleFont.className} antialiased font-bold`}
                  >
                    Teslo
                  </span>
                  <span> | Shop</span>
                </Link>
              </div>

              {/* center menus */}
              <div>
                {navigation.categories.map((category) => (
                  <Link
                    className={styles.nav__link}
                    href={category.href}
                    key={category.label}
                  >
                    {category.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-1 items-center justify-end">
                {/* Search */}
                <Link
                  href="/search"
                  className="p-2 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                </Link>

                {/* Cart */}
                <Link href="/cart" className="group flex items-center p-2">
                  <div className="relative">
                    <span className="absolute -top-2 -right-2 bg-blue-700 rounded-full text-xs text-white px-1">
                      0
                    </span>
                    <ShoppingCartIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="sr-only">items in cart, view bag</span>
                  </div>
                </Link>
                <button className={styles.nav__link} onClick={openSideMenu}>
                  Menú
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
