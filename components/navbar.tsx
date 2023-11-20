"use client";
import { useEffect } from "react";
import "@/styles/globals.css";
import { useTheme } from "next-themes"; 
import { UserButton } from "@clerk/nextjs";
import { useUser  } from "@clerk/nextjs";




import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";

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
import React, { useState } from "react";




export const Navbar = () => {
	const orangeNavbarClass = "bg-[#fb8914]";
	const [isMenuOpen, setIsMenuOpen] = useState(false);
  
	const handleMenuToggle = () => {
	  setIsMenuOpen(!isMenuOpen);
	  
	};

	const { theme } = useTheme();

	const lightLogo = <img src= "https://media.discordapp.net/attachments/854157284687347742/1175139566039076904/Captura_de_pantalla_2023-11-16_175126-removebg-preview.png?ex=656a2501&is=6557b001&hm=a269f7b5cc215b04ca8c53ddfbafc076bf102ba2fcb3aec8121e33da3930bfa4&=&width=234&height=301" alt="Light logo" width="40" height="8" />;
	const darkLogo = <img src= "https://media.discordapp.net/attachments/854157284687347742/1175126755841933412/Captura_de_pantalla_2023-11-16_175237_clipdrop-background-removal.png?ex=656a1913&is=6557a413&hm=a5e4052115ea86713ffae5eb3ca74dae64819cca1d6ea4e6434ef532cbb2fc9b&=&width=228&height=308"  alt="Dark logo" width="40" height="8" />;


	const { isLoaded, isSignedIn, user } = useUser();  
	

 

		
	return (
	<>

	{isLoaded && isSignedIn ? (
	  <NextUINavbar
		maxWidth="xl"
		position="sticky"
		isBordered
		className={orangeNavbarClass}
	  >
		<NavbarContent>
		  <NavbarMenuToggle
			aria-label={isMenuOpen ? "Close menu" : "Open menu"}
			onClick={handleMenuToggle}
		  />
  
		<NavbarBrand as="li" className="gap-3 max-w-fit">
		<NextLink className="flex justify-start items-center gap-1" href="/">
				{theme === "light" ? lightLogo : darkLogo}
		</NextLink>
		</NavbarBrand>
  
		  <NavbarMenu>
			<ul className="flex flex-col lg:flex-row gap-4 justify-center ml-2">
			  {siteConfig.navItems.map((item) => (
				<NavbarItem key={item.href}>
				  {/* Tu contenido de NavbarItem (por ejemplo, enlaces de navegación) */}
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
		  </NavbarMenu>
		</NavbarContent>
  
		<NavbarContent
		  className="hidden sm:flex basis-1/5 sm:basis-full"
		  justify="end"
		  
		>	

		  <ThemeSwitch />
		<div>
		<UserButton afterSignOutUrl="/" />
  		</div>
		  <NavbarItem className="hidden md:flex">
			{/* Otro contenido que desees mostrar en la barra de navegación */}
		  </NavbarItem>
		</NavbarContent>
  
		<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
		  <ThemeSwitch />
		</NavbarContent>
	  </NextUINavbar>

	) : (

		<NextUINavbar
		maxWidth="xl"
		position="sticky"
		isBordered
		className={orangeNavbarClass}
	  >
		<NavbarContent>
		  <NavbarMenuToggle
			aria-label={isMenuOpen ? "Close menu" : "Open menu"}
			onClick={handleMenuToggle}
		  />
  
		<NavbarBrand as="li" className="gap-3 max-w-fit">
		<NextLink className="flex justify-start items-center gap-1" href="/">
				{theme === "light" ? lightLogo : darkLogo}
		</NextLink>
		</NavbarBrand>
  
		  <NavbarMenu>
			<ul className="flex flex-col lg:flex-row gap-4 justify-center ml-2">
			  {siteConfig.navItems.map((item) => (
				<NavbarItem key={item.href}>
				  {/* Tu contenido de NavbarItem (por ejemplo, enlaces de navegación) */}
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
		  </NavbarMenu>
		</NavbarContent>
  
		<NavbarContent
		  className="hidden sm:flex basis-1/5 sm:basis-full"
		  justify="end"
		  
		>	

		  <ThemeSwitch />
		  <NavbarItem className="hidden md:flex">
			{/* Otro contenido que desees mostrar en la barra de navegación */}
		  </NavbarItem>
		</NavbarContent>
  
		<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
		  <ThemeSwitch />
		</NavbarContent>
	  </NextUINavbar>

	)}
	</>
	);
  };
