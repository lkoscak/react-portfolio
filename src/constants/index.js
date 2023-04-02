import {
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	nodejs,
	mongodb,
	git,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	sass,
	sql,
	asp,
	devextreme,
	googlemaps,
	sick,
	jobify,
	jsbook,
	habbit,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Frontend development",
		icon: web,
		technologies: [
			{
				name: "HTML 5",
				icon: html,
			},
			{
				name: "CSS 3",
				icon: css,
			},
			{
				name: "JavaScript",
				icon: javascript,
			},
			{
				name: "TypeScript",
				icon: typescript,
			},
			{
				name: "React JS",
				icon: reactjs,
			},
			{
				name: "Sass",
				icon: sass,
			},
			{
				name: "DevExtreme",
				icon: devextreme,
			},
		],
	},
	{
		title: "Backend development",
		icon: backend,
		technologies: [
			{
				name: "Node JS",
				icon: nodejs,
			},
			{
				name: "MongoDB",
				icon: mongodb,
			},
			{
				name: "ASP.NET",
				icon: asp,
			},
			{
				name: "Sql Server",
				icon: sql,
			},
		],
	},
	{
		title: "Other",
		icon: creator,
		technologies: [
			{
				name: "git",
				icon: git,
			},
			{
				name: "docker",
				icon: docker,
			},
			{
				name: "Google Maps",
				icon: googlemaps,
			},
		],
	},
];

const experiences = [
	{
		title: "Middle Web Developer",
		company_name: "SICK Mobilisis",
		icon: sick,
		iconBg: "#383E56",
		date: "March 2022 - Present",
		points: [
			"Developing and maintaining web applications using Javascript, React.js and ASP.NET",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Junior Web Developer",
		company_name: "SICK Mobilisis",
		icon: sick,
		iconBg: "#383E56",
		date: "January 2021 - March 2022",
		points: [
			"Developing and maintaining web applications using Javascript, ASP.NET and other related technologies.",
			"Implementing Google Maps into web applications.",
			"Working with Sql Server databases.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "JSBook",
		description:
			"React/typescript project with in-browser code bundling and execution (a simplified version of sites like CodePen for javascript and React)",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "typescript",
				color: "blue-text-gradient",
			},
		],
		image: jsbook,
		source_code_link: "https://github.com/lkoscak/javascript-book",
	},
	{
		name: "Jobify",
		description:
			"Full stack MERN web application for administration of your job search",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "nodejs",
				color: "green-text-gradient",
			},
		],
		image: jobify,
		source_code_link: "https://github.com/lkoscak/mern-jobify",
	},
	{
		name: "Habbit Tracker",
		description:
			"Web application that enables users to keep track of their habits by days of month in a simple way",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "sass",
				color: "pink-text-gradient",
			},
		],
		image: habbit,
		source_code_link: "https://github.com/lkoscak/habbit-tracker",
	},
];

export { services, experiences, testimonials, projects };
