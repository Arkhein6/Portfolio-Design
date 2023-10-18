import { ImageCard, ProjectCard, ServiceCard } from "./Components";
import {
	projectData,
	projectCategories,
	serviceData,
	experienceData,
	developerData,
	footerIcons,
	headerData,
} from "./Constants/Data";
import { useState,} from "react";
import { categoryProps, headerLinks } from "./Constants/types";

const App = () => {
	const [currentProjectCategory, setCurrentProjectCategory] =
		useState<categoryProps>("Mobile");
	const [activeHeaderLink, setActiveHeaderLink] = useState<headerLinks>(
		headerData[0].id
	);
	return (
		<div className=" overflow-hidden flex flex-col gap-20">
			<header>
				<div className="w-[80%] mx-auto flex justify-between py-3 items-center">
					<div className="text-white">Logo</div>
					<div className="text-white sm:hidden border rounded-lg bg-lime-400 cursor-pointer">
						Click Me
					</div>
					<div className="sm:flex uppercase gap-10 hidden items-center font-bold">
						{headerData.map((link) => (
							<a
								href={`#${link.id}`}
								onClick={() => setActiveHeaderLink(link.id)}
								className={`${
									link.isButton
										? "bg-[#52B6D8] rounded-lg py-2 px-4"
										: ""
								} ${
									activeHeaderLink === link.id &&
									!link.isButton
										? "text-[#52B6D8]"
										: "text-white"
								} `}
							>
								{link.title}
							</a>
						))}
					</div>
				</div>
			</header>
			<main className="flex-col flex gap-20 w-[90%] sm:w-[80%] mx-auto">
				<section
					id="HOME"
					className="mb-10 flex-col flex gap-6 sm:gap-3 "
				>
					<h1 className="text-white font-bold text-5xl sm:text-7xl">
						<span className="text-[#686A7E] text-3xl ">I'm a</span>{" "}
						<br></br>
						Full Stack<br></br> Software<br></br>Developer
						<span className="text-[#52B6D8]">.</span>
					</h1>
					<a
						href="#"
						className="w-[12rem] py-3 text-white font-bold bg-[#52B6D8] rounded-lg text-center"
					>
						Previous Project
					</a>
				</section>
				<section id="ABOUT_ME" className="flex flex-col">
					<ImageCard
						imageSource={developerData.imageSource}
						isDeveloper={true}
					/>
					<div className="sm:pl-14 pt-5 flex-col flex gap-3">
						<h2 className="text-3xl font-bold text-white">
							About Me
						</h2>
						<p className="text-[#686A7E]">
							{developerData.description}
						</p>
						<div className="flex gap-5">
							<a
								href="#"
								className="w-[10rem] py-3 font-bold text-white bg-[#52B6D8] rounded-lg text-center"
							>
								Hire Me
							</a>
							<a
								href="#"
								className="w-[10rem] py-3 font-bold text-white border border-[#52B6D8] text-center rounded-lg"
							>
								Resume
							</a>
						</div>
					</div>
				</section>
				<section
					id="PORTFOLIO"
					className=" flex flex-col items-center gap-5"
				>
					<div>
						<h2 className="text-white text-2xl font-bold uppercase">
							Portfolio
						</h2>
					</div>
					<div className="flex gap-10">
						{projectCategories.map((currentCategory, index) => (
							<span
								key={index}
								onClick={() =>
									setCurrentProjectCategory(
										currentCategory as categoryProps
									)
								}
								className={` cursor-pointer ${
									currentProjectCategory === currentCategory
										? "text-[#64A0B8]"
										: "text-white"
								}`}
							>
								{currentCategory}
							</span>
						))}
					</div>
					{projectData[currentProjectCategory].map(
						(project, index) => (
							<ProjectCard
								key={index}
								title={project.title}
								description={project.description}
								imageSource={project.imageSource}
								imageOrientation={project?.imageOrientation}
								subTitle={project.subTitle}
							/>
						)
					)}
				</section>
				<section
					id="SERVICES"
					className="flex flex-col items-center gap-10"
				>
					<h2 className="text-white text-3xl font-bold">Services</h2>
					<div
						className="grid sm:grid-cols-[repeat(2,minmax(300px,400px))]
					justify-center gap-10 sm:gap-20 "
					>
						{serviceData.map((service, index) => (
							<ServiceCard
								key={index}
								iconSvg={service.iconSvg}
								title={service.title}
								description={service.description}
							/>
						))}
					</div>
				</section>
				<section
					id="EXPERIENCE"
					className="flex flex-col items-center gap-10"
				>
					<h2 className="text-white text-3xl font-bold">
						Experience
					</h2>
					<div className="grid grid-cols-2 sm:grid-cols-4 w-full place-items-center gap-y-16 ">
						{experienceData.map((experience, index) => {
							return (
								<div className="flex-col flex gap-3">
									<img
										className={`cursor-pointer bg-transparent ${experience.title}`}
										key={index}
										src={experience.icon}
										alt={experience.title}
									/>
									<p className="text-white text-center text-lg">
										{experience.title}
									</p>
								</div>
							);
						})}
					</div>
				</section>
			</main>
			<footer className=" bg-gradient-to-r from-violet-700 to-[#52B6D8] relative rounded-tr-[5rem] rounded-tl-[5rem] before:contents sm:before:w-52 sm:before:h-52 before:w-28 before:h-28 before:rounded-[50%] sm:before:-top-[80px] before:-top-[25px] sm:before:-left-24 before:-left-14 before:bg-emerald-500/30 before:absolute after:contents sm:after:w-52 after:w-28 sm:after:h-52 after:h-28 after:rounded-[50%] sm:after:-top-[80px] after:-top-[25px] sm:after:-right-24 after:-right-14 after:bg-lime-500/30 after:absolute">
				<div
					id="CONTACT_ME"
					className=" w-[90%] sm:w-[80%] mx-auto flex-col flex items-center gap-5 py-3"
				>
					<h2 className="text-white font-bold text-3xl ">Contacts</h2>
					<div className="sm:flex  w-full justify-between">
						<div className="flex flex-col mb-5 sm:mb-0 gap-3 min-w-[300px] max-w-[500px]">
							<h2 className="text-white font-bold text-xl">
								Drop Me a Message
							</h2>
							<p className="text-[#686A7E]">
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Illo officia quas quibusdam
								modi labore nemo eveniet esse, officiis quod
								consequuntur assumenda consequatur accusamus.
								Nostrum beatae iure hic deleniti dolores
								similique!
							</p>
							<div className="flex flex-col gap-2">
								<div className="flex gap-5 items-center">
									<img
										className="w-12 h-12 bg-[#52B6D8] rounded-xl p-2"
										src={footerIcons[2]}
										alt=""
									/>
									<p className="text-white">+233 530082565</p>
								</div>
								<div className="flex gap-5 items-center">
									<img
										className="w-12 h-12 bg-[#52B6D8] rounded-xl p-2"
										src={footerIcons[2]}
										alt=""
									/>
									<p className="text-white">
										richastapop@gmail.com
									</p>
								</div>
								<div className="flex gap-5 items-center">
									<img
										className="w-12 h-12 bg-[#52B6D8] rounded-xl p-2"
										src={footerIcons[2]}
										alt=""
									/>
									<p className="text-white">
										House No:07 Rafsar Town, Mirpurkhas,
										69000, Sindh Pakistan
									</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-2  rounded-lg bg-[#52B6D8] min-w-[300px] max-w-[400px] px-2 py-4 sm:px-4 sm:py-6">
							<input
								type="text"
								placeholder="Name"
								className="bg-black indent-4 h-10 text-white rounded-lg"
							/>
							<input
								type="text"
								placeholder="Email"
								className="bg-black indent-4 h-10 text-white rounded-lg"
							/>
							<input
								type="text"
								maxLength={500}
								multiple={true}
								placeholder="Message"
								className="bg-black text-white rounded-lg indent-4 h-36"
							/>
							<a
								href="#"
								className="w-[6rem] py-2 text-white font-bold bg-black rounded-lg text-center"
							>
								Send
							</a>
						</div>
					</div>
					<span className="w-full h-[1px] bg-[#686A7E]"></span>
					<div className="flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between w-full items-center">
						<div className="sm:block hidden">LOGO</div>
						<p className="text-white order-2 sm:order-1">
							2022 - Arkhein, All rights reserved
						</p>
						<div className="flex order-1 sm:order-2 gap-3">
							{footerIcons.map((icon, index) => (
								<img
									key={index}
									src={icon}
									alt=""
									className="w-10 h-10 bg-[#52B6D8] rounded-xl p-2"
								/>
							))}
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};
export default App;
