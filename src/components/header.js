import React, { useEffect } from "react";

import { useCurrentNav } from "../utils/useCurrentNav";

const navLinks = ["Home", "About", "Teams", "Careers"];

const Header = () => {
	const [activeLink] = useCurrentNav(navLinks);

	const goToSection = (navs) => {
		document.getElementById(navs.toLowerCase()).scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		let lastScrollY = window.scrollY;
		const navbar = document.querySelector(".navbar");
		window.addEventListener("scroll", () => {
			if (lastScrollY < window.scrollY) {
				navbar.classList.add("hidden", "transition", "delay-300");
			} else navbar.classList.remove("hidden", "transition", "delay-300");
			lastScrollY = window.scrollY;
		});

		return () => window.removeEventListener("scroll", () => {});
	}, []);

	return (
		<>
			<div className="bg-pink-400 sticky top-0 navbar">
				<div className="flex justify-between">
					<div className="p-2">Header</div>
					<div className="flex">
						{navLinks.map((navs) => {
							return (
								<div key={navs} className="p-2 cursor-pointer" onClick={() => goToSection(navs)}>
									<span className={`${navs.toLowerCase() == activeLink ? "bg-violet-800 text-white p-1" : ""}`}>{navs}</span>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
