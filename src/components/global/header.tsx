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
import { Fragment, useEffect, useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = ({
  academicCalendarUrl,
  feesStructureUrl,
}: {
  academicCalendarUrl: string;
  feesStructureUrl: string;
}) => {
  const [modifiedNavigationData, setModifiedNavigationData] =
    useState(navigationData);

  useEffect(() => {
    if (academicCalendarUrl) {
      setModifiedNavigationData(
        navigationData.map((item) => {
          item.child?.map((child) => {
            if (child.href === "academic-calendar") {
              child.href = academicCalendarUrl;
              return child;
            } else if (child.href === "fees-structure") {
              child.href = feesStructureUrl;
              return child;
            }
          });
          return item;
        }),
      );
    }
  }, [academicCalendarUrl]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-4 sm:container py-2 flex items-center justify-between">
        <a href="/" className="flex items-center gap-4">
          <img
            src={"/favicon.svg"}
            alt={"Logo"}
            className="w-12 sm:w-16 h-12 sm:h-16"
            height={72}
            width={72}
          />
          <div>
            <h1 className="sm:text-2xl text-lg leading-5">United Academy</h1>
            <p className="sm:text-lg leading-none">Samsi, Malda</p>
          </div>
        </a>
        {/* desktop */}
        <div className="hidden sm:block">
          <NavigationMenu>
            <NavigationMenuList>
              {modifiedNavigationData.map((item) => (
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
                              {child.target ? (
                                <a
                                  href={child.href}
                                  target={child.target}
                                  className="capitalize"
                                >
                                  {child.title}
                                </a>
                              ) : (
                                <a
                                  href={"/" + item.href + "/" + child.href}
                                  className="capitalize"
                                >
                                  {child.title}
                                </a>
                              )}
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
                {modifiedNavigationData.map((item) => (
                  <li className="py-2" key={item.href}>
                    <SheetHeader className="text-left">
                      <SheetTitle>{item.title}</SheetTitle>
                    </SheetHeader>
                    <Separator />
                    <ul className="space-y-1 py-2">
                      {item.child?.map((child) => (
                        <li className="py-1" key={child.href}>
                          {child.target ? (
                            <a
                              href={child.href}
                              target={child.target}
                              className="capitalize"
                            >
                              {child.title}
                            </a>
                          ) : (
                            <a
                              href={"/" + item.href + "/" + child.href}
                              className="capitalize"
                            >
                              {child.title}
                            </a>
                          )}
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
