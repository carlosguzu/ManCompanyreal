"use client";
import { useEffect } from "react";
import "@/styles/globals.css";

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



const orangeNavbarClass = "bg-[#fb8914]";
export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
  
	const handleMenuToggle = () => {
	  setIsMenuOpen(!isMenuOpen);
	};



  
	return (
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
			{/* Tu contenido de NavbarBrand (por ejemplo, tu logotipo) */}
			<NextLink className="flex justify-start items-center gap-1" href="/">
			 <img src={"https://media.discordapp.net/attachments/854157284687347742/1175126755841933412/Captura_de_pantalla_2023-11-16_175237_clipdrop-background-removal.png?ex=656a1913&is=6557a413&hm=a5e4052115ea86713ffae5eb3ca74dae64819cca1d6ea4e6434ef532cbb2fc9b&=&width=228&height=308"}
			  alt="Logo" 
			  className="logo-image adjusted-logo"
			  width="45" height="15" />
			  <p className="text-white text-lg font-bold">MC</p>
			</NextLink>
		  </NavbarBrand>
  
		  <NavbarMenu>
			<ul className="flex flex-col lg:flex-row gap-4 justify-start ml-2">
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
	);
  };
  