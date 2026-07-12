import Link from "next/link";

export default function Header() {
	const Links = [
		{ name: "Experience", href: "/experience" },
		{ name: "Projects", href: "/projects" },
	];

	return (
		<header className="container mx-auto flex flex-col items-start justify-center sm:flex-row sm:items-center sm:justify-between h-20">
			<Link
				href="/"
				className="text-2xl font-semibold text-nowrap"
			>
				<h1>Mehul Sinha</h1>
			</Link>
			<nav className="flex items-center mt-0.5 sm:mt-0 -mx-2 sm:mx-0">
				<ul className="flex items-center">
					{Links.map((link) => (
						<li key={link.name}>
							<Link
								href={link.href}
								className="block rounded-md px-2 py-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
