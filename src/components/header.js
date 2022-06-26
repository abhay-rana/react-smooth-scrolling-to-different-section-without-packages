import React, { useEffect } from "react";

import { useCurrentNav } from "../utils/useCurrentNav";

const navLinks = ["Home", "About", "Teams", "Careers"];

const Header = () => {
	const [activeLink] = useCurrentNav(navLinks);
	console.log(activeLink);
	const goToSection = (navs) => {
		document.getElementById(navs.toLowerCase()).scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<div className="bg-pink-400 sticky top-0">
				<div className="flex justify-between">
					<div>heder</div>
					<div className="flex">
						{navLinks.map((navs) => {
							return (
								<div key={navs} className="p-2" onClick={() => goToSection(navs)}>
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
