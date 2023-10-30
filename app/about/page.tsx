"use client";

import { title } from "@/components/primitives";
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Divider, Link, Image} from "@nextui-org/react";
import "@/styles/globals.css";

export default function AboutPage() {
	return (
		<div>		
		<div >
			<h1 className={title()}>About us</h1>
		</div>

		
		<div className="mt-20">
		<main>
		<div className="flex space-x-10">
		<div className="mr-4">
		<Card className="w-64" isPressable>
		<CardHeader className="flex gap-3">
	    <Avatar isBordered color="primary" radius="full" size="md" src="https://iili.io/JfoIFeI.jpg" alt="Carlos" />
			<div className="flex flex-col">
			<p className="font-bold text-lg leading-none">Carlos M. Guzmán</p>
			</div>
		</CardHeader>
		<Divider/>
		<CardBody>
			<p>Ing. sistemas y computación</p>
			<p>Código: T00065185</p>
			<p>guzmanc@utb.edu.co</p>
			<p>Cartagena, Colombia</p>
			<p>Python, C++</p>
			<p>EN, ES</p>
		</CardBody>
		<Divider/>
		<CardFooter>
			<Link
			isExternal
			showAnchorIcon
			href="https://github.com/carlosguzu"
			>
			GitHub.
			</Link>
		</CardFooter>
		</Card>
			</div>


			<div className="mr-4">
		<Card className="w-64" isPressable>
		<CardHeader className="flex gap-3">
	    <Avatar isBordered color="warning" radius="full" size="md" src="https://iili.io/JfosQix.jpg" alt="Pacheco" />
			<div className="flex flex-col">
			<p className="font-bold text-lg leading-none">Santiago A. Pacheco</p>
			</div>
		</CardHeader>
		<Divider/>
		<CardBody>
			<p>Ing. sistemas y computación</p>
			<p>Código: T00064151</p>
			<p>sapacheco@utb.edu.co</p>
			<p>Cartagena, Colombia</p>
			<p>Python, C++</p>
			<p>EN, ES</p>
		</CardBody>
		<Divider/>
		<CardFooter>
			<Link
			isExternal
			showAnchorIcon
			href="https://github.com/spacheco03"
			>
			GitHub.
			</Link>
		</CardFooter>
		</Card>
			</div>
			
			<div className="mr-4">
		<Card className="w-64" isPressable>
		<CardHeader className="flex gap-3">
	    <Avatar isBordered color="danger" radius="full" size="md" src="https://iili.io/JfYT2ta.jpg" alt="Pinto" />
			<div className="flex flex-col">
			<p className="font-bold text-lg leading-none">Luis J. Pinto</p>
			</div>
		</CardHeader>
		<Divider/>
		<CardBody>
			<p>Ing. sistemas y computación</p>
			<p>Código: T00063667</p>
			<p>lpinto@utb.edu.co</p>
			<p>Cartagena, Colombia</p>
			<p>Python, C++</p>
			<p>EN, ES</p>
		</CardBody>
		<Divider/>
		<CardFooter>
			<Link
			isExternal
			showAnchorIcon
			href="https://github.com/jeropinto"
			>
			GitHub.
			</Link>
		</CardFooter>
		</Card>
			</div>
	</div>
	</main>
	</div>
	</div>

		);
}

