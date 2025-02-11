import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowRight } from 'react-icons/fa';

import HRManagementImage from './images/hr-management.png';
import ECommerceImage from './images/ecommerce.png';
import SchoolManagementImage from './images/school-management.png';
import Me from './images/mee.png';
import LaravelLogo from './images/laravel.png';
import ReactLogo from './images/react.png';
import NodeLogo from './images/nodejs.png';
import MongoDBLogo from './images/mongodb.png';
import MySQLLogo from './images/mysql.png';
import TailwindLogo from './images/tailwindcss.png';
import Springboot from './images/spring-boot.png';
import Html from './images/html.png';
import Css from './images/css.png';
import Bootstrap from './images/bootstrap.png';
import CASHPLUS from './images/CASHPLUS.png';
import T from './images/Trading.png';
import RH from './images/RH.jpeg';
import Moi from './images/moi.jpeg';

const projects = [
  {
    title: 'HR Management App',
    description: 'A Laravel-based application for managing employees, roles, and permissions.',
    image: RH,
  },
  {
    title: 'eCommerce Website',
    description: 'A MERN stack eCommerce platform for an online clothing store.',
    image: ECommerceImage,
  },
  {
    title: 'School Management App',
    description: 'A Laravel-based application for managing school attestations.',
    image: SchoolManagementImage,
  },
  {
    title: 'Portfolio Website',
    description: 'A React-based portfolio website with animations and dark mode.',
    image: Me,
  },
  {
    title: 'Trading template for adBlueMedia locker ADS',
    description: 'A full-stack task management application built with Node.js and React.',
    image: T,
  },
  {
    title: 'CASHPLUS money service extention',
    description: 'A dynamic blog platform with user authentication and content management.',
    image: CASHPLUS,
  },
];
const App = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      {/* Navigation */}
      <nav className="p-6 bg-gray-800 bg-opacity-50 fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            Aymane Essaid
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#technologies" className="hover:text-purple-400 transition-colors">Technologies</a>
            <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          {/* Wide and Large Profile Image */}
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden mx-auto">
            <img
              src={Me}
              alt="Aymane Essaid"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Full-Stack & Mobile Developer
          </h1>
          <p className="text-xl text-gray-400">
            Passionate about building modern web and mobile applications.
          </p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 flex space-x-4"
          >
            <a
              href="https://www.linkedin.com/in/aymane-essaid-39347b228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-5 p-2 bg-gray-700 rounded-full hover:bg-purple-600 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/AymanE200227"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-700 rounded-full hover:bg-purple-600 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:aymane.essaid.job@gmail.com"
              className="p-2 bg-gray-700 rounded-full hover:bg-purple-600 transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
            
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto text-center"
          >
            I am a Full-Stack and Mobile Developer with experience in building modern web and mobile applications. My expertise includes Laravel, Node.js, React.js, and MongoDB. I am passionate about creating efficient, scalable, and user-friendly applications.
          </motion.p>
        </div>
      </section>
      <section id="technologies" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Technologies
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center"
          >
            {[ 
              { name: "Laravel", image: LaravelLogo },
              { name: "React.js", image: ReactLogo },
              { name: "Node.js", image: NodeLogo },
              { name: "MongoDB", image: MongoDBLogo },
              { name: "Tailwind CSS", image: TailwindLogo },
              { name: "MySQL", image: MySQLLogo },
              { name: "Springboot", image: Springboot },
              { name: "HTML", image: Html },
              { name: "CSS", image: Css },
              { name: "Bootstrap", image: Bootstrap }
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={tech.image} alt={tech.name} className="w-20 h-20 md:w-24 md:h-24 object-contain" />
                <p className="mt-2 text-gray-300">{tech.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-800 bg-opacity-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="p-6 bg-gray-700 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold">Développeur Full Stack (React JS - Laravel) Stage.</h3>
              <p className="text-gray-400">Faculté des Sciences et Techniques - Béni Mellal - Mars 2023
à avril 2023
</p>
              <p className="mt-4 text-gray-400">
              Conception d'une application de gestion de produits en utilisant Power
AMC (uml en utilisant diagramme de cas d'utilisation, diagramme de
séquence, diagramme de classe)
J'ai développé une application avec une barre de navigation offrant
plusieurs tâches de gestion des données, chacune avec des opeations
CRUD avec
des calculs intégrés, et j'ai créé une interface intuitive, réactive, mettant
en œuvre les meilleures pratiques de développement pour garantir un
code propre et performant en utilisant pour:
-Back-end : Laravel framework, RESTful API
-Base de donné : MySQL
-Front-end : React.js , CSS3, Bootstrap frameworks
-Architecture: REST
-Outils : vscode : live server, auto close tag , prettier , PHP intellisense
,Postman, thunder client extension .
Gestion de version : Git avec GitLab .
J'ai intégré le front-end développé avec React.js au back-end basé sur
Laravel en utilisant des API RESTful. Cela permet à l'application
d'échanger des données de manière fluide entre le client et le serveur,
assurant une communication efficace

              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold">Développeur Full Stack (Laravel) Freelance.</h3>
              <p className="text-gray-400">COLLEGE AHMED EL HANSALI BENI MELLALJuin 2023 à juillet 2023</p>
              <p className="mt-4 text-gray-400">
              Conception d'une application de gestion d'école d'attestations en utilisant (diagram.io) pour la base de données
j'ai développé une application de gestion d'école d'attestations elle permet essentiellement à l'administration de l'école d'ajouter des étudiants et leurs informations scolaires effectuer toutes les opérations consulter, modifier supprimer et imprimer une attestation pour chaque étudiant l'objectif de cette application est de réduire le temps et les efforts en utilisant l'ancienne méthode pour rechercher dans l'archive, maintenant par simple clic vous effectuez votre opération et imprimez l'attestation sans prendre la longue recherche d'infos étudiants en utulisant pour :
-Back-end : Laravel framework, Views.
-Base de donné : MySQL.
-Front-end : CSS3, Bootstrap frameworks.
-Architecture: Monolotique.
-Outils : vscode : Laravel Blade Snippets, Laravel Extra Intellisense
Gestion de version : Git avec GitLab .
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold">Responsable de la Gestion des
              Transactions à la Casse Cash Plus et Développeur Full Stack (Javascript) </h3>
              <p className="text-gray-400">Cash Plus - Juillet 2023 à juin 2024</p>
              <p className="mt-4 text-gray-400">
              En tant que développeur, j’ai créé une extension personnalisée pour Cash Plus afin d’optimiser les opérations des caissiers. Le service financier existant ne fournissait pas certains calculs essentiels, nécessitant un traitement manuel. Mon application automatise les résumés de transactions, fournissant instantanément les totaux des transactions de "recharge" et "retraits", réduisant ainsi les erreurs et améliorant l’efficacité.

De plus, mon expérience en gestion des transactions chez Cash Plus a renforcé mes compétences en résolution de problèmes, garantissant des opérations financières sécurisées et précises. Ce projet met en avant ma capacité à développer des solutions informatiques sur mesure pour optimiser les processus financiers et améliorer l’expérience utilisateur.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      

      {/* Projects Section */}
      <section id="projects" className="py-20 flex justify-center">
        <div className="w-[60vw]">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {projects.slice(0, showMore ? projects.length : 6).map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow w-80"
              >
                <img src={project.image} alt={project.title} className="w-80 h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-4 text-gray-400">{project.description}</p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-600 transition-colors"
                  >
                    Learn More <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-8">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-6 py-2 bg-purple-600 rounded hover:bg-purple-700 transition-colors"
            >
              {showMore ? 'Show Less' : 'See More'}
            </button>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 bg-opacity-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Contact
          </motion.h2>
          <motion.form
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-lg mx-auto"
          >
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Name</label>
              <input type="text" className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Email</label>
              <input type="email" className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Message</label>
              <textarea className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-600" rows="5"></textarea>
            </div>
            <button type="submit" className="w-full p-2 bg-purple-600 rounded hover:bg-purple-700 transition-colors">
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-gray-800 bg-opacity-50">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2023 Aymane Essaid. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;