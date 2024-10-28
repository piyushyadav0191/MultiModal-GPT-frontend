"use client";

import Drawer from "components/drawer";
import { Icons } from "components/icons";
import Menu from "components/menu";
import { buttonVariants } from "components/ui/button";
import { siteConfig } from "lib/config";
import { cn } from "lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  SignInButton,
  UserButton,
  SignOutButton,
  useAuth,
  useUser,
  SignedOut,
} from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

export default function Header() {
  const [addBorder, setAddBorder] = useState(false);
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setAddBorder(true);
      } else {
        setAddBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="relative sticky top-0 z-50 bg-background/60 py-2 backdrop-blur">
      <div className="container flex items-center justify-between">
        <Link
          href="/"
          title="brand-logo"
          className="relative mr-6 flex items-center space-x-2"
        >
          <Icons.logo className="h-[40px] w-auto" />
          <span className="text-xl font-bold">{siteConfig.name}</span>
        </Link>

        <div className="hidden lg:block">
          <div className="flex items-center ">
            <nav className="mr-10">
              <Menu />
            </nav>

            {!isSignedIn && (
              // <SignInButton />
              //   <button className={buttonVariants({ variant: "outline" })}>
              //     Sign In
              //   </button>
              <SignedOut>
                <SignInButton />
              </SignedOut>
            )}
            {!!isSignedIn && (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src={user?.imageUrl} />
                    <AvatarFallback>
                      {user?.fullName?.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/playground">Playground</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SignOutButton>
                      <h1>Signout</h1>
                    </SignOutButton>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
        <div className="mt-2 block cursor-pointer lg:hidden">
          <Drawer />
        </div>
      </div>
      <hr
        className={cn(
          "absolute bottom-0 w-full transition-opacity duration-300 ease-in-out",
          addBorder ? "opacity-100" : "opacity-0"
        )}
      />
    </header>
  );
}
