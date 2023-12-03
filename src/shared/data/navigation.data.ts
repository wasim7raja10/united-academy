import type { NavigationItem } from "../model";

export const navigationData: NavigationItem[] = [
	{
		title: "The School",
		href: "the-school",
		child: [
			{
				title: "about us",
				href: "about-us",
			},
			{
				title: "mission and vision",
				href: "mission-vision",
			},
			{
				title: "principal's desk",
				href: "principals-desk",
			},
			{
				title: "infrastructure",
				href: "infrastructure",
			},
			{
				title: "gallery",
				href: "gallery",
			},
			{
				title: "contact",
				href: "contact",
			},
		],
	},
	{
		title: "Academics",
		href: "academics",
		child: [
			{
				title: "Syllabus",
				href: "syllabus",
			},
			{
				title: "Academic Calendar",
				href: "academic-calendar",
				target: "_blank",
			},
			{
				title: "Fees Structure",
				href: "fees-structure",
				target: "_blank",
			},
		],
	},
	{
		title: "Students",
		href: "students",
		child: [
			{
				title: "Co-Curricular Activities",
				href: "co-curricular-activities",
			},
			{
				title: "School Timing",
				href: "school-timing",
			},
			{
				title: "Rules Regulation",
				href: "rules-regulation",
			},
		],
	},
];
