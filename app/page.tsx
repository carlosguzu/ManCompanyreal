"use client";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { useUser  } from "@clerk/nextjs";

export default function Home() {

	const { isLoaded, isSignedIn, user } = useUser();   

		
	return (
	<>
	{isLoaded && isSignedIn ? (

		<section className="flex flex-col md:flex-row items-start justify-start gap-5 py-9 md:py-20">

		<div className=" md:w-1/2"> {/* Controla el ancho de la mitad del contenedor para el texto */}
		<div className="max-w-lg text-start justify-start">
			<h1 className={title()}>Manufacturing&nbsp;</h1>
			<h1 className={title({ color: "orange" })}>Company&nbsp;</h1>
			<br />
			<h2 className={subtitle({ class: "mt-4" })}>
			Welcome to a system that aims to improve the efficiency and effectiveness in the production of liquor bottles. To achieve this, it has general functions such as login and SSO, control panel, inventory management, production planning, and quality control in bottle manufacturing.
			</h2>
		</div>		
		</div>

		<div className=" md:w-1/2 flex justify-end"> {/* Controla el ancho de la mitad del contenedor para la imagen */}
		<img src="https://iili.io/JnjNsF1.png" alt="Logo Manufacturing Company" />
		</div>
		</section>
   
		) : (

		<section className="flex flex-col md:flex-row items-start justify-start gap-5 py-9 md:py-20">

		<div className=" md:w-1/2"> {/* Controla el ancho de la mitad del contenedor para el texto */}
		  <div className="max-w-lg text-start justify-start">
			<h1 className={title()}>Manufacturing&nbsp;</h1>
			<h1 className={title({ color: "orange" })}>Company&nbsp;</h1>
			<br />
			<h2 className={subtitle({ class: "mt-4" })}>
			  Welcome to a system that aims to improve the efficiency and effectiveness in the production of liquor bottles. To achieve this, it has general functions such as login and SSO, control panel, inventory management, production planning, and quality control in bottle manufacturing.
			</h2>
		  </div>
  
		  <div className="flex gap-5">
			<Link
			  as={NextLink}
			  href={"/sign-in"}
			  className={buttonStyles({ color: "success", radius: "lg", variant: "shadow", size: "lg" })}
			>
			  Sign in
			</Link>
		  </div>
		</div>
  
		<div className=" md:w-1/2 flex justify-end bg-c86d10"> {/* Controla el ancho de la mitad del contenedor para la imagen */}
		  <img src="https://iili.io/JnjNsF1.png" alt="Logo Manufacturing Company" />
		</div>
	  </section>  

	)}
	</>
  );
}
