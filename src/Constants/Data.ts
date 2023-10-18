import img1 from "../assets/Images/img1.jpg";
import img2 from "../assets/Images/img2.jpg";
import img3 from "../assets/Images/img3.jpg";
import img4 from "../assets/Images/img4.jpg";
import img5 from "../assets/Images/img5.jpg";
import icon1 from "../assets/Icons/icon1.svg";
import icon2 from "../assets/Icons/icon2.svg";
import icon3 from "../assets/Icons/icon3.svg";
import icon4 from "../assets/Icons/icon4.svg";
import icon5 from "../assets/Icons/icon5.svg";
import icon6 from "../assets/Icons/icon6.svg";
import icon7 from "../assets/Icons/icon7.svg";
import icon8 from "../assets/Icons/icon8.svg";
import icon10 from "../assets/Icons/icon10.svg";
import icon11 from "../assets/Icons/icon11.svg";
import icon12 from "../assets/Icons/icon12.svg";
import icon13 from "../assets/Icons/icon13.svg";
import {
	categoryProps,
	experienceProps,
	projectProps,
	developerProps,
	headerProps,
} from "./types";

const developerData: developerProps = {
	imageSource: img3,
	description:
		"Lorem ipsum is simple dummy text of the printing and typesetting industry, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknow printer took a gallery of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem ipsum is simple dummy text of the printing and typesetting industry, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknow printer took a gallery of type and scrambled it to make a type specimen",
};
const rightArrow: string = icon12;

const projectData: {
	Website: projectProps[];
	Mobile: projectProps[];
	Other: projectProps[];
} = {
	Website: [
		{
			title: "Project 1",
			subTitle: "Dating Mobile App Design",
			description:
				"Lorem ipsum is simple dummy text of the printing and typesetting industry, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknow printer took a gallery of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
			imageSource: img1,
		},
		{
			title: "Project 1",
			subTitle: "Dating Mobile App Design",
			description:
				"Lorem ipsum is simple dummy text of the printing and typesetting industry, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknow printer took a gallery of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
			imageOrientation: "left",
			imageSource: img2,
		},
		{
			title: "Project 1",
			subTitle: "Dating Mobile App Design",
			description:
				"Lorem ipsum is simple dummy text of the printing and typesetting industry, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknow printer took a gallery of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
			imageSource: img4,
		},
		{
			title: "Project 1",
			subTitle: "Dating Mobile App Design",
			description:
				"Lorem ipsum is simple dummy text of the printing and typesetting industry, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknow printer took a gallery of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
			imageOrientation: "left",
			imageSource: img5,
		},
	],
	Mobile: [
		{
			title: "Project 1",
			subTitle: "Dating Mobile App Design",
			description:
				"Lorem ipsum is simple dummy text of the printing and typesetting industry, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknow printer took a gallery of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
			imageSource: img1,
		},
		{
			title: "Project 1",
			subTitle: "Dating Mobile App Design",
			description:
				"Lorem ipsum is simple dummy text of the printing and typesetting industry, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknow printer took a gallery of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
			imageOrientation: "left",
			imageSource: img2,
		},
		{
			title: "Project 1",
			subTitle: "Dating Mobile App Design",
			description:
				"Lorem ipsum is simple dummy text of the printing and typesetting industry, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknow printer took a gallery of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
			imageSource: img4,
		},
		{
			title: "Project 1",
			subTitle: "Dating Mobile App Design",
			description:
				"Lorem ipsum is simple dummy text of the printing and typesetting industry, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknow printer took a gallery of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
			imageOrientation: "left",
			imageSource: img5,
		},
	],
	Other: [
		{
			title: "Project 1",
			subTitle: "Dating Mobile App Design",
			description:
				"Lorem ipsum is simple dummy text of the printing and typesetting industry, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknow printer took a gallery of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
			imageSource: img1,
		},
		{
			title: "Project 1",
			subTitle: "Dating Mobile App Design",
			description:
				"Lorem ipsum is simple dummy text of the printing and typesetting industry, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknow printer took a gallery of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
			imageOrientation: "left",
			imageSource: img2,
		},
		{
			title: "Project 1",
			subTitle: "Dating Mobile App Design",
			description:
				"Lorem ipsum is simple dummy text of the printing and typesetting industry, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknow printer took a gallery of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
			imageSource: img4,
		},
		{
			title: "Project 1",
			subTitle: "Dating Mobile App Design",
			description:
				"Lorem ipsum is simple dummy text of the printing and typesetting industry, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknow printer took a gallery of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
			imageOrientation: "left",
			imageSource: img5,
		},
	],
};
const serviceData = [
	{
		title: "Video Editing",
		description:
			"Lorem ipsum is simple dummy text of the printing and typesetting industry, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknow printer took a gallery of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
		iconSvg: icon6,
	},
	{
		title: "Mobile App Development",
		description:
			"Lorem ipsum is simple dummy text of the printing and typesetting industry, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknow printer took a gallery of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
		iconSvg: icon6,
	},
	{
		title: "Desktop App Development",
		description:
			"Lorem ipsum is simple dummy text of the printing and typesetting industry, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknow printer took a gallery of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
		iconSvg: icon6,
	},
	{
		title: "Programming Languages",
		description:
			"Lorem ipsum is simple dummy text of the printing and typesetting industry, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknow printer took a gallery of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
		iconSvg: icon6,
	},
];

const experienceData: experienceProps[] = [
	{ icon: icon1, title: "MongoDB" },
	{ icon: icon2, title: "TailwindCSS" },
	{ icon: icon3, title: "HTML5" },
	{ icon: icon4, title: "Python" },
	{ icon: icon5, title: "NodeJS" },
	{ icon: icon6, title: "ReactJS" },
	{ icon: icon7, title: "Javascript" },
	{ icon: icon8, title: "CSS3" },
];
const footerIcons = [icon10, icon11, icon13];
const projectCategories: categoryProps[] = ["Website", "Mobile", "Other"];
const headerData: headerProps[] = [
	{
		id: "HOME",
		title: "home",
	},
	{
		id: "ABOUT_ME",
		title: "About me",
	},
	{
		id: "PORTFOLIO",
		title: "portfolio",
	},
	{
		id: "SERVICES",
		title: "Service",
	},
	{
		id: "EXPERIENCE",
		title: "experience",
	},
	{
		id: "CONTACT_ME",
		title: "Contact Me",
		isButton: true,
	},
];

export {
	projectData,
	serviceData,
	rightArrow,
	developerData,
	experienceData,
	footerIcons,
	projectCategories,
	headerData,
};
