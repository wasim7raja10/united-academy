"use client";

import { navigationData } from "@/shared/data";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "../ui/separator";
import { Fragment } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="container py-4 flex items-center justify-between border-b">
        <div className="flex items-center gap-4">
          <img src={"/favicon.svg"} alt={"Logo"} className="w-12 sm:w-16 h-12 sm:h-16" height={72} width={72} />
          <div>
            <h1 className="sm:text-2xl text-lg">United Academy</h1>
            <p className="sm:text-lg">Samsi, Malda</p>
          </div>
        </div>
        {/* desktop */}
        <div className="hidden sm:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationData.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuTrigger>
                    <span className="text-base">{item.title}</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="p-6 w-96">
                      {item.child?.map((child, index) => (
                        <Fragment key={child.href}>
                          <li className="p-2">
                            <NavigationMenuLink asChild>
                              <a
                                href={item.href + "/" + child.href}
                                className="capitalize"
                              >
                                {child.title}
                              </a>
                            </NavigationMenuLink>
                          </li>

                          {index < item.child!.length - 1 && (
                            <Separator className="my-2" />
                          )}
                        </Fragment>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* mobile */}
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <HamburgerMenuIcon className="scale-150" />
              </Button>
            </SheetTrigger>
            <SheetContent className="px-0">
              <ul className="py-2 px-4 overflow-auto h-full">
                {navigationData.map((item) => (
                  <li className="py-2" key={item.href}>
                    <SheetHeader className="text-left">
                      <SheetTitle>{item.title}</SheetTitle>
                    </SheetHeader>
                    <Separator />
                    <ul className="space-y-1 py-2">
                      {item.child?.map((child) => (
                        <li className="py-1" key={child.href}>
                          <a
                            href={item.href + "/" + child.href}
                            className="capitalize"
                          >
                            {child.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
