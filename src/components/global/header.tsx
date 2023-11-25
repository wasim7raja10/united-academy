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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export const Header = () => {
  return (
    <header>
      <div className="container py-4 flex items-center justify-between border-b">
        <div className="flex items-center gap-4">
          <img src={"/favicon.svg"} alt={"Logo"} height={72} width={72} />
          <div>
            <h1 className="text-2xl">United Academy</h1>
            <p className="text-lg">Samsi, Malda</p>
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
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
