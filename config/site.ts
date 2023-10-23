export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Manufacturing Company",
	description: "Liquor manufacturing company",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "About us",
      href: "/about",
    }
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
