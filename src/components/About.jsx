import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, technologies }) => (
	<Tilt className="xs:w-[250px] w-full">
		<motion.div
			variants={fadeIn("right", "spring", index * 0.5, 0.75)}
			className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
		>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
			>
				<img src={icon} alt={title} className="w-16 h-16 object-contain" />

				<h3 className="text-white text-[20px] font-bold text-center mb-2">
					{title}
				</h3>
				<ul className="flex gap-1">
					{technologies.map((tech) => {
						return (
							<li className="text-secondary " key={tech.name} title={tech.name}>
								<img
									src={tech.icon}
									alt={tech.name}
									className="w-7 h-7 object-contain"
								/>
							</li>
						);
					})}
				</ul>
			</div>
		</motion.div>
	</Tilt>
);

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Who am I</p>
				<h2 className={styles.sectionHeadText}>Intro</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				I'm a Frontend developer interested in anything web related, with
				expertise in JavaScript and ReactJS development and experience working in
				Node.js. 
				<br/>
				I'm a quick learner and unafraid of trying new technologies and
				implementing new practices in my work.
			</motion.p>

			<div className="mt-20 flex justify-around flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
