import React from 'react';
import './Project.css';
import img1 from './img1.jpeg';
import img2 from './img2.jpg';
import img3 from './img3.jpeg';
import img4 from './img4.png';

const projects = [
  {
    id: 1,
    title: 'MERN Task Tracker',
    description: 'A task management application built with the MERN stack, allowing users to create, update, and delete tasks with a responsive interface.',
    imageUrl: img1
  },
  {
    id: 2,
    title: 'E-commerce Site',
    description: 'Developed a full-fledged e-commerce platform using MERN stack, featuring product listings, shopping cart, and user authentication.',
    imageUrl: img2
  },
  {
    id: 3,
    title: 'Real-time Chat App',
    description: 'Created a real-time chat application utilizing Socket.IO and MERN stack, enabling users to communicate instantly in chat rooms.',
    imageUrl: img3
  },
  {
    id: 4,
    title: 'Blog Application',
    description: 'Built a blogging platform that allows users to create, edit, and delete posts, complete with user authentication and comments section.',
    imageUrl: img4
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Developed a personal portfolio website using React to showcase my projects, skills, and experiences in a visually appealing format.',
    imageUrl: img1
  },
  {
    id: 6,
    title: 'Recipe Finder App',
    description: 'Created a recipe search application using external APIs, allowing users to find and save their favorite recipes using the MERN stack.',
    imageUrl: img2
  },
  {
    id: 7,
    title: 'Event Management System',
    description: 'Built an event management application for users to create, RSVP, and manage events, featuring calendar integration and notifications.',
    imageUrl: img3
  },
  {
    id: 8,
    title: 'Fitness Tracker',
    description: 'Developed a fitness tracker app that allows users to log workouts, track progress, and set fitness goals with a user-friendly interface.',
    imageUrl: img4
  },
  {
    id: 9,
    title: 'News Aggregator',
    description: 'Created a news aggregator app that pulls articles from various sources, allowing users to filter by categories and save favorites.',
    imageUrl: img1
  },
  {
    id: 10,
    title: 'Online Learning Platform',
    description: 'Built an online learning platform where users can access courses, track progress, and earn certifications using the MERN stack.',
    imageUrl: img2
  },
  {
    id: 11,
    title: 'Weather App',
    description: 'Developed a weather application that provides real-time weather updates and forecasts by integrating third-party APIs.',
    imageUrl: img3
  },
  {
    id: 12,
    title: 'Task Automation Tool',
    description: 'Created a tool for automating repetitive tasks and reminders, enhancing productivity with a user-friendly interface.',
    imageUrl: img4
  }
];

const Project = () => {
  return (
    <div className="project-container">
      
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
