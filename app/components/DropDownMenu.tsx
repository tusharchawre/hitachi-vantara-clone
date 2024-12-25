"use client"

import * as React from "react"
import Link from "next/link"
import { Search, Globe } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

interface DropDownMenuProps {
  className?: string
}

export function DropDownMenu({ className }: DropDownMenuProps) {
  return (
    <header className="sticky top-0 z-50  hover:text-white/80">
      <div className={"container flex items-center" + `${className}`}>
        <NavigationMenu>
          <NavigationMenuList className="">
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className={`bg-transparent hover:bg-white/10 ${className}`}>
                  Why Hitachi Vantara
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={`bg-transparent hover:bg-white/10 ${className}`}>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="#"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Featured Product
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Discover our latest innovations and solutions.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={`bg-transparent hover:bg-white/10 ${className}`}>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <li className="row-span-3">
                    <p className="text-sm font-medium leading-none">Enterprise Solutions</p>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={`bg-transparent hover:bg-white/10 ${className}`}>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <li className="row-span-3">
                    <p className="text-sm font-medium leading-none">Professional Services</p>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={`bg-transparent hover:bg-white/10 ${className}`}>Partners</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <li className="row-span-3">
                    <p className="text-sm font-medium leading-none">Partner Network</p>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="icon" className=" hover:bg-white/10">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className=" hover:bg-white/10">
            <Globe className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

