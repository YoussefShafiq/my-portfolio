import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImg from '../assets/profile.jpg'
import { Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiExternalLink, FiGithub, FiX, FiTrendingUp, FiCpu } from 'react-icons/fi';
import propxpro from '../assets/propxpro.png'
import sehtnaa from '../assets/sehtnaa.png'
import brainmate from '../assets/brainmate.png'
import egcrm from '../assets/egcrm.png'
import freshcart from '../assets/freshcart.png'
import { BsWhatsapp } from 'react-icons/bs';

export function Hero() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }, []);

    return (
        <section className='bg-customWhite transition-colors dark:bg-customDarkBackground pt-20 '>
            <div className="flex flex-col lg:flex-row gap-10 items-center container justify-center py-20 ">
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 text-center">
                    <span
                        className="text-lg md:text-xl mb-4 text-customGray"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Hello, my name is
                    </span>

                    <h2
                        className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-customDarkgray transition-colors dark:text-customlightgray"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Youssef Shafek
                    </h2>

                    <h1
                        className="text-3xl md:text-5xl font-bold text-customBlue"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Web Developer
                    </h1>

                    <div
                        className="w-20 h-1 my-8 rounded-full bg-customBlue"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    ></div>

                    <p
                        className="max-w-2xl mx-auto text-lg text-customGray"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        I build exceptional digital experiences with modern web technologies.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 inset-0 flex items-center justify-center">
                    <div className="w-3/4 aspect-square rounded-full bg-customBlue/20 border-4 border-customBlue/30 flex items-center justify-center overflow-hidden">
                        <img src={profileImg} alt="Youssef Shafek" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export function About() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const stats = [
        { value: "2+", label: "Years Experience", icon: <FiTrendingUp /> },
        // { value: "50+", label: "Projects Completed", icon: <FiLayers /> },
        { value: "100%", label: "Client Satisfaction", icon: <FiCpu /> }
    ];

    const skills = [
        {
            name: "Frontend Development",
            icon: <FiCode className="w-5 h-5" />,
            description: "React, Tailwind CSS, React Query, Axios, JavaScript"
        },
        {
            name: "Core Skills",
            icon: <FiCpu className="w-5 h-5" />,
            description: "State management, API Integration, Problem solving, Git, GitHub, Team Leadership"
        },
    ];

    return (
        <section id="about" className="py-20 bg-customWhite transition-colors dark:bg-customDarkBackground ">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-lg font-semibold text-customBlue">ABOUT ME</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 text-customDarkgray transition-colors dark:text-customlightgray">Who I Am</h2>
                    <div className="w-20 h-1 mx-auto mt-6 rounded-full bg-customBlue"></div>
                </motion.div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column - Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/3"
                    >
                        <div className="bg-gradient-to-br from-customBlue/5 to-customBlue/5 dark:to-customBlue/10 p-8 rounded-xl h-full">
                            <h3 className="text-2xl font-bold mb-6 text-customDarkgray transition-colors dark:text-customlightgray">Quick Facts</h3>

                            <div className="space-y-6">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeIn}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex items-center p-4 bg-white transition-colors dark:bg-customCardDarkBackground dark:border dark:border-customGray rounded-lg shadow-sm"
                                    >
                                        <div className="p-3 mr-4 rounded-full bg-customBlue/10 text-customBlue">
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-customDarkgray transition-colors dark:text-customlightgray">{stat.value}</div>
                                            <div className="text-customGray">{stat.label}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Text and Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-2/3"
                    >
                        <div className="mb-10">
                            <h3 className="text-3xl font-bold mb-6 text-customDarkgray transition-colors dark:text-customlightgray">A dedicated Web Developer based in Cairo, Egypt</h3>
                            <p className="text-lg text-customGray leading-relaxed mb-6">
                                I specialize in creating exceptional digital experiences. With 2+ years of experience in web development,
                                I combine technical expertise with creative problem-solving to deliver high-quality solutions.
                            </p>
                            <p className="text-lg text-customGray leading-relaxed">
                                My approach focuses on clean code, intuitive user interfaces, and scalable architecture.
                                I'm passionate about staying current with industry trends and continuously expanding my skill set.
                            </p>
                        </div>

                        {/* Skills Cards */}
                        <div className="space-y-6">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeIn}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                                    className="p-6 rounded-xl bg-white transition-colors dark:bg-customCardDarkBackground shadow-sm border border-customGray"
                                >
                                    <div className="flex items-start">
                                        <div className="p-3 rounded-lg bg-customBlue/10 text-customBlue mr-4">
                                            {skill.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-customDarkgray transition-colors dark:text-customlightgray mb-2">{skill.name}</h4>
                                            <p className="text-customGray">{skill.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projects = [
        {
            id: 1,
            title: "PropXPro",
            description: "Website and dashboard for company services with integrated chatbot and content management.",
            longDescription: "Complete solution featuring a public website showcasing company services and an admin dashboard for dynamic content management, admin permissions, blog integrations, and chatbot functionality.",
            tags: ["React.js", "Tailwind CSS", "React Query", "Axios", "Chatbot Integration"],
            image: propxpro,
            url: "https://propxpro.com",
            // github: "https://github.com/example/propxpro"
        },
        {
            id: 2,
            title: "BrainMate",
            description: "Smart task and resource management system with team collaboration features.",
            longDescription: "Comprehensive task management platform with team creation/joining, task assignment, real-time chat, interactive dashboards, and workspace management capabilities.",
            tags: ["React.js", "Axios", "React Query", "Pusher", "Chart.js", "State Management"],
            image: brainmate,
            url: "https://brainmate.vercel.app",
            github: "https://github.com/YoussefShafiq/GP"
        },
        {
            id: 3,
            title: "EGCRM",
            description: "CRM system for real-time leads management with interactive features.",
            longDescription: "Responsive CRM solution featuring lead claiming/unclaiming, real-time updates via Pusher, interactive route maps, dark mode support, and comprehensive manager dashboard with data visualizations.",
            tags: ["JavaScript", "Pusher", "Bootstrap", "Data Visualization"],
            image: egcrm,
            // url: "https://example.com/egcrm",
            github: "https://github.com/YoussefShafiq/EG-CRM"
        },
        {
            id: 4,
            title: "Sehtnaa Dashboard",
            description: "Admin dashboard for managing services, providers, and campaigns.",
            longDescription: "Feature-rich admin panel with super admin capabilities, service/category management, document handling, complaint resolution, campaign launching, and comprehensive analytics with charts.",
            tags: ["React.js", "Axios", "React Query", "Pusher", "Chart.js"],
            image: sehtnaa,
            // url: "https://example.com/sehtnaa",
            github: "https://github.com/YoussefShafiq/Sehetna-Dashboard"
        },
        {
            id: 5,
            title: "House Pricing Prediction App",
            description: "ML-powered web application for property price prediction with geolocation.",
            longDescription: "Machine learning application that predicts property prices based on various features, integrated with interactive maps for geolocation-based input and visualization.",
            tags: ["Streamlit", "Leaflet Maps", "Python", "Machine Learning"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            // url: "https://example.com/house-pricing",
            // github: "https://github.com/example/house-pricing"
        },
        {
            id: 6,
            title: "E-Commerce Application",
            description: "Modern e-commerce platform with responsive UI and efficient state management.",
            longDescription: "Full-featured online shopping platform with product listings, cart functionality, user authentication, and modern UI components built with efficient state and data handling.",
            tags: ["React.js", "Axios", "React Query", "Tailwind CSS"],
            image: freshcart,
            url: "https://fresh-cartproject.vercel.app",
            github: "https://github.com/YoussefShafiq/freshCartproject"
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="projects" className="py-20 bg-customWhite transition-colors dark:bg-customDarkBackground ">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-lg font-semibold text-customBlue mb-2">MY WORK</span>
                    <h2 className="text-4xl font-bold text-customDarkgray transition-colors dark:text-customlightgray mb-4">Recent Projects</h2>
                    <div className="w-20 h-1 bg-customBlue rounded-full"></div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-white  transition-colors dark:bg-customCardDarkBackground rounded-xl overflow-hidden shadow-lg border border-customGray cursor-pointer"
                            onClick={() => openModal(project)}
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-customDarkgray transition-colors dark:text-customlightgray mb-2">{project.title}</h3>
                                <p className="text-customGray mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="px-3 py-1 bg-customBlue/10 text-customBlue text-sm rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Project Modal */}
                <AnimatePresence>
                    {isModalOpen && selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
                            onClick={closeModal}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="relative bg-white transition-colors dark:bg-customCardDarkBackground rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-customCardDarkBackground hover:bg-gray-200 text-customDarkgray transition-colors dark:text-customlightgray"
                                >
                                    <FiX className="w-5 h-5" />
                                </button>

                                <div className="h-64 md:h-80 overflow-hidden">
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-6 md:p-8">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                                        <h3 className="text-2xl md:text-3xl font-bold text-customDarkgray transition-colors dark:text-customlightgray mb-2 md:mb-0">
                                            {selectedProject.title}
                                        </h3>
                                        <div className="flex gap-3">
                                            {selectedProject.github && (
                                                <a
                                                    href={selectedProject.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center px-4 py-2 bg-gray-100  dark:bg-customBlue/20 dark:hover:bg-customBlue/10 hover:bg-gray-200 rounded-lg text-customDarkgray dark:text-customlightgray transition-all"
                                                >
                                                    <FiGithub className="mr-2" /> Code
                                                </a>
                                            )}
                                            {selectedProject.url && (
                                                <a
                                                    href={selectedProject.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center px-4 py-2 bg-customBlue hover:bg-customBlue/90 text-white rounded-lg transition-all"
                                                >
                                                    <FiExternalLink className="mr-2" /> Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-lg text-customGray mb-6 leading-relaxed">
                                        {selectedProject.longDescription}
                                    </p>

                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-customDarkgray transition-colors dark:text-customlightgray mb-3">Technologies Used</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tags.map((tag, index) => (
                                                <span key={index} className="px-3 py-1 bg-customBlue/10 text-customBlue rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

export function Contactus() {
    const contactData = {
        email: 'youssefmsa616@gmail.com',
        phone: '+20 1145528803',
        whatsapp: 'https://wa.me/+201145528803'
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, subject, message } = formData;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;

        window.location.href = `mailto:${contactData.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    return (
        <section className="py-20 px-4 bg-customWhite transition-colors dark:bg-customDarkBackground " id="contact">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-lg font-semibold text-customBlue">GET IN TOUCH</span>
                    <h1 className="text-4xl font-bold mt-4 text-customDarkgray transition-colors dark:text-customlightgray">
                        Contact <span className="text-customBlue">Me</span>
                    </h1>
                    <div className="w-20 h-1 mx-auto mt-6 rounded-full bg-customBlue"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <form onSubmit={handleSubmit} className="bg-white transition-colors dark:bg-customBlue/5 p-8 rounded-xl shadow-lg border border-customGray">
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-customDarkgray transition-colors dark:text-customlightgray font-medium mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-customGray dark:bg-white/5 transition-colors dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className="block text-customDarkgray transition-colors dark:text-customlightgray font-medium mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-customGray dark:bg-white/5 transition-colors dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-customDarkgray transition-colors dark:text-customlightgray font-medium mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-customGray transition-colors dark:bg-white/5 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent"
                                    required
                                />
                            </div>

                            <div className="mb-8">
                                <label htmlFor="message" className="block text-customDarkgray transition-colors dark:text-customlightgray font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-customGray transition-colors dark:bg-white/5 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent"
                                    required
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-customBlue text-white py-3 px-6 rounded-lg hover:bg-customBlue/90 transition duration-300 font-medium text-lg"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="bg-gradient-to-br from-customBlue/5 to-customBlue/10 p-8 rounded-xl h-full border border-customGray shadow-lg">
                            <h2 className="text-2xl font-bold mb-8 text-customDarkgray transition-colors dark:text-customlightgray">Contact Information</h2>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="bg-customBlue/10 p-4 rounded-xl">
                                        <Mail className="text-customBlue" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm lg:text-xl text-customDarkgray transition-colors dark:text-customlightgray mb-1">Email</h3>
                                        <a href={`mailto:${contactData.email}`} className="text-sm lg:text-base text-customGray hover:text-customBlue">
                                            {contactData.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="bg-customBlue/10 p-4 rounded-xl">
                                        <Phone className="text-customBlue" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm lg:text-xl text-customDarkgray transition-colors dark:text-customlightgray mb-1">Phone</h3>
                                        <a href={`tel:${contactData.phone.replace(/\s/g, '')}`} className="text-sm lg:text-base text-customGray hover:text-customBlue">
                                            {contactData.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="bg-customBlue/10 p-4 rounded-xl">
                                        <BsWhatsapp className="text-customBlue" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm lg:text-xl text-customDarkgray transition-colors dark:text-customlightgray mb-1">Whatsapp</h3>
                                        <a href={`${contactData.whatsapp}`} className="text-sm lg:text-base text-customGray hover:text-customBlue">
                                            {contactData.whatsapp}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h3 className="font-semibold text-xl text-customDarkgray transition-colors dark:text-customlightgray mb-4">Let's Connect</h3>
                                <p className="text-customGray leading-relaxed">
                                    Have a project in mind or want to discuss potential opportunities?
                                    Feel free to reach out through the contact form or directly via email or phone.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    return <>
        <Hero />
        <About />
        <Projects />
        <Contactus />
    </>
}
