import React from 'react';
import './About.css';
import profileImage from './imageee.png'; // Ensure the image path is correct

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="profile-block">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <h1 className="about-title">About Me</h1>
        <p className="about-text">
          Hello! I’m Raja Tayyab, and I hold a Bachelor's degree in Computer Science from Capital University of Science and Technology. I am passionate about web development and constantly seek to learn new technologies to enhance my skills.
        </p>
        <h2 className="skills-title">Skills</h2>
        <div className="skills">
          <p className='skill-item'>React JS</p>
          <p className='skill-item'>Node JS</p>
          <p className='skill-item'>Express JS</p>
          <p className='skill-item'>MongoDB</p>
          <p className='skill-item'>MySQL</p>
          <p className='skill-item'>JavaScript</p>
          <p className='skill-item'>HTML & CSS</p>
          <p className='skill-item'>Git & GitHub</p>
        </div>
        <h2 className="experience-title">Experience</h2>
        <div className="experience-item">
          <p>
            I have gained valuable experience in MERN stack development during my internship, where I honed my skills in building dynamic web applications. I worked on several projects, including a task management app that allows users to create, update, and delete tasks, showcasing my ability to manage state and interact with APIs.
          </p>
        </div>
      
        
        <h2 className="experience-title">Aspirations</h2>
        <div className="experience-item">
        <p >
          I aim to further develop my expertise in full-stack development and explore emerging technologies such as AI and machine learning. My goal is to contribute to impactful projects that improve user experience and make a difference in the tech community.
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
