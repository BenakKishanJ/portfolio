// import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "MindfulFlow – Digital Wellness App",
    description: "AI-powered digital wellness app with eye & posture monitoring, screen time tracking, and smart interventions. Funded by IISc ART Park and selected for ICRCA Japan.",
    image: "/assets/mindfulflow.jpeg",
    link: "https://github.com/BenakKishanJ/MindfulFlow_Android"
  },
  {
    id: 2,
    title: "RogueWolf – Gymwear E-commerce",
    description: "Production-ready e-commerce platform with 3D product preview, virtual try-on, Razorpay payments, and full order management.",
    image: "/assets/roguewolf.png",
    link: "https://rogue-wolf.vercel.app/"
  },
  {
    id: 3,
    title: "Forelli’s Car Detailing Platform",
    description: "Modern service booking platform with backend management, clean UI, and conversion-focused design for a car detailing business.",
    image: "/assets/forelli.png",
    link: "https://forellis-detailing.vercel.app/"
  },
  {
    id: 4,
    title: "AITian – College Management App",
    description: "Full-stack academic management app for students, teachers, and admins with attendance, courses, events, and discussion forums.",
    image: "/assets/aitian.jpeg",
    link: "https://github.com/BenakKishanJ/aitian"
  }];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              <a href={project.link} className="text-white mt-3 block" target="_blank" rel="noopener noreferrer">
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
