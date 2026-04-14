import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-[35%]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about.png" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>
        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I&apos;m a full-stack developer focused on building real-world applications that are both functional and user-centric. I work primarily with React, Node.js, and modern web technologies to create clean, scalable products.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I enjoy diving deep into how systems work — from frontend interfaces to backend architecture, APIs, and databases. I&apos;m currently expanding my skills in cloud deployment, system design, and AI-driven applications.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I&apos;ve built projects like a real-time chat application and MindfulFlow — a digital wellbeing app designed to reduce screen addiction using intelligent insights and sensor-based analysis.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I&apos;m driven by curiosity and a constant desire to improve, whether it's learning new technologies, solving complex problems, or building products that make a meaningful impact.
        </p>
      </motion.div>
    </div>
  );
}
