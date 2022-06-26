import React from "react";
import useTilg from "tilg";

import AboutSection from "./components/about-section";
import CareerSection from "./components/career-section";
import Header from "./components/header";
import HomeSection from "./components/home-section";
import TeamSection from "./components/team-section";

const App = () => {
	return (
		<>
			<Header />
			<HomeSection />
			<AboutSection />
			<TeamSection />
			<CareerSection />
		</>
	);
};

export default App;
