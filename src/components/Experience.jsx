import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{ background: "#1d1836", color: "#fff" }}
			contentArrowStyle={{ borderRight: "7px solid #232631" }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img
						src={experience.icon}
						alt={experience.company_name}
						className="w-[60%] h-[60%] object-contain"
					/>
				</div>
			}
		>
			<div>
				<h3 className="text-white text-[20px] font-bold">{experience.title}</h3>
				<p
					className="text-secondary text-[16px] font-semibold"
					style={{ margin: 0 }}
				>
					{experience.company_name}
				</p>
			</div>
			<ul className="mt-5 list-disc ml-5 space-y-2">
				{experience.points.map((point, index) => {
					return (
						<li
							key={`experience_point-${index}`}
							className="text--white-100 text-[14px] pl-1 tracking-wider"
						>
							{point}
						</li>
					);
				})}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>What have I done so far</p>
				<h2 className={styles.sectionHeadText}>Work Experience</h2>
			</motion.div>
			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((experience, index) => {
						return (
							<ExperienceCard
								key={index}
								experience={experience}
							></ExperienceCard>
						);
					})}
				</VerticalTimeline>
			</div>
			{/* <p className=" text-secondary mt-5">
				You can access my resume
				<span>
					<a
						target="_blank"
						href="https://drive.google.com/file/d/19Kb5eQgxc3R9iAxf3sxgyQemHvl8-D5G/view?usp=share_link"
						className=" text-white"
					>
						{" "}
						here
					</a>
				</span>
			</p> */}
		</>
	);
};

export default SectionWrapper(Experience, "work");
