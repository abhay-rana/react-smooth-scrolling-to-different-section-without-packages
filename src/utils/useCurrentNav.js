import { useEffect, useState } from "react";

export const useCurrentNav = (navLinks) => {
	const [activeLink, setActiveLink] = useState("Home");
	useEffect(() => {
		let links;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.map((entry) => {
					if (!!entry.isIntersecting) {
						setActiveLink(entry.target.id);
					}
				});
			},
			{ threshold: 0.7 }
		);
		navLinks.map((link) => {
			links = document.getElementById(link.toLowerCase());
			console.log(links);
			observer.observe(links);
		});
	}, []);
	return [activeLink];
};
