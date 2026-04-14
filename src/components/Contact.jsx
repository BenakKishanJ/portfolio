import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub, BsDiscord } from 'react-icons/bs';
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted (you can connect backend later)");
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className='lg:my-16 lg:px-28 my-8 px-5'
      id='contact'
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className='text-2xl lg:text-4xl text-center'
      >
        Contact <span className='font-extrabold'>Me</span>
      </motion.h2>

      <div className='flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row'>

        {/* FORM */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className='lg:w-[40%]'
        >
          <form onSubmit={handleSubmit} className='w-full space-y-3 lg:space-y-5'>

            <input
              name="name"
              className='border-2 px-5 py-3 border-black rounded text-sm w-full'
              type="text"
              placeholder='Your name'
              required
            />

            <input
              name="email"
              className='border-2 px-5 py-3 border-black rounded text-sm w-full'
              type="email"
              placeholder='Email'
              required
            />

            <input
              name="website"
              className='border-2 px-5 py-3 border-black rounded text-sm w-full'
              type="text"
              placeholder='Your website (optional)'
            />

            <textarea
              name="message"
              className='resize-none border-2 px-5 py-3 h-32 border-black rounded text-sm w-full'
              placeholder='How can I help?'
              required
            />

            <div className='flex justify-between gap-3 lg:gap-5 flex-col lg:flex-row'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                type='submit'
                className='bg-black justify-center w-fit lg:w-auto lg:flex-1 hover:shadow-lg text-white px-3 py-2 rounded flex items-center gap-x-3 font-medium'
              >
                Get In Touch
              </motion.button>

              {/* SOCIAL ICONS */}
              <div className='flex items-center gap-x-3 lg:gap-x-5'>
                <motion.a
                  href="mailto:benakkishanj@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                  whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                >
                  <BiLogoGmail />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/BenakKishanJ"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                  whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                >
                  <IoLogoLinkedin />
                </motion.a>

                <motion.a
                  href="https://discord.com/benki777"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                  whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                >
                  <BsDiscord />
                </motion.a>

                <motion.a
                  href="https://github.com/benakkishanj"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                  whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                >
                  <BsGithub />
                </motion.a>
              </div>
            </div>
          </form>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className='lg:w-1/2'
        >
          <div className='font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0'>
            <h2>Let's <span className='text-white' style={{ WebkitTextStroke: '1px black' }}>talk</span></h2>
            <h2>Something special</h2>
          </div>

          <p className='text-[#71717A] text-sm lg:text-base mt-4'>
            I build user-focused applications and enjoy solving real-world problems through clean and scalable solutions.
          </p>

          <div className='font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-3'>

            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group'
              href="mailto:benakkishanj@gmail.com"
            >
              <span className='border-2 border-transparent group-hover:border-black rounded-full p-1'>
                <IoMdMail />
              </span>
              benakkishanj@gmail.com
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group'
              href="tel:8618082979"
            >
              <span className='border-2 border-transparent group-hover:border-black rounded-full p-[5px]'>
                <FaPhone />
              </span>
              8618082979
            </motion.a>

          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
