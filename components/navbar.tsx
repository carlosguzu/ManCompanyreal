"use client";

import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenuToggle, // Import NavbarMenuToggle from the example
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
  } from "@nextui-org/navbar";
  import { Button } from "@nextui-org/button";
  import React, { useState } from "react";
  import { Link } from "@nextui-org/link";
  import { Input } from "@nextui-org/input";
  
  import { link as linkStyles } from "@nextui-org/theme";
  
  import { siteConfig } from "@/config/site";
  import NextLink from "next/link";
  import clsx from "clsx";
  
  import { ThemeSwitch } from "@/components/theme-switch";
  import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
  } from "@/components/icons";
  
  import { Logo } from "@/components/icons";
  
  const orangeNavbarClass = "bg-[#fb8914]";
  
  export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
	return (
	  <NextUINavbar
		maxWidth="xl"
		position="sticky"
		isBordered
		className={orangeNavbarClass}
	  >
		<NavbarContent>
		  {/* Use the NavbarMenuToggle from the example */}
		  <NavbarMenuToggle
			aria-label={isMenuOpen ? "Close menu" : "Open menu"}
			className="sm:hidden"
			onClick={() => setIsMenuOpen(!isMenuOpen)}
		  />
		  <NavbarBrand as="li" className="gap-3 max-w-fit">
			<NextLink className="flex justify-start items-center gap-1" href="/">
			  {/* Your NavbarBrand content */}
			</NextLink>
		  </NavbarBrand>
		  <ul className="hidden lg:flex gap-4 justify-start ml-2">
			{siteConfig.navItems.map((item) => (
			  <NavbarItem key={item.href}>
				<NextLink
				  className={clsx(
					linkStyles({ color: "foreground" }),
					"data-[active=true]:text-primary data-[active=true]:font-medium"
				  )}
				  color="foreground"
				  href={item.href}
				>
				  {item.label}
				</NextLink>
			  </NavbarItem>
			))}
		  </ul>
		</NavbarContent>
  
		<NavbarContent
		  className="hidden sm:flex basis-1/5 sm:basis-full"
		  justify="end"
		>
		  <ThemeSwitch />
		  <NavbarItem className="hidden md:flex">
			{/* Your NavbarItem content */}
		  </NavbarItem>
		</NavbarContent>
  
		<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
		  <ThemeSwitch />
		</NavbarContent>
	  </NextUINavbar>
	);
  };
  