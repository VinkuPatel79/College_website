/*import React from "react";
function Course()
{
    return(
        <>
        <h1> Course</h1>
        </>
    )
}
export default  Course;*/import React from 'react';
import './coursegp.css'; // Import the CSS file

const coursesData = [
  {
    id: 1,
    title: 'Bachelor of Science in Electrical Engineering',
    duration: '4 years',
    description: 'This program focuses on electrical engineering principles and applications.',
  },
  {
    id: 2,
    title: 'Bachelor of Science in Mechanical Engineering',
    duration: '4 years',
    description: 'This program covers the fundamentals of mechanical engineering.',
  },
  {
    id: 3,
    title: 'Bachelor of Science in Computer Science',
    duration: '4 years',
    description: 'This program provides a strong foundation in computer science and programming.',
  },
  // Add 10 more courses here
  {
    id: 4,
    title: 'Bachelor of Science in Civil Engineering',
    duration: '4 years',
    description: 'This program focuses on civil engineering principles and infrastructure.',
  },
  {
    id: 5,
    title: 'Bachelor of Science in Chemical Engineering',
    duration: '4 years',
    description: 'This program covers chemical engineering processes and applications.',
  },
  {
    id: 6,
    title: 'Bachelor of Science in Biomedical Engineering',
    duration: '4 years',
    description: 'This program combines engineering with biology and healthcare.',
  },
  {
    id: 7,
    title: 'Bachelor of Science in Aerospace Engineering',
    duration: '4 years',
    description: 'This program specializes in aerospace and aeronautical engineering.',
  },
  {
    id: 8,
    title: 'Bachelor of Science in Environmental Engineering',
    duration: '4 years',
    description: 'This program focuses on environmental sustainability and engineering solutions.',
  },
  {
    id: 9,
    title: 'Bachelor of Science in Software Engineering',
    duration: '4 years',
    description: 'This program specializes in software development and engineering practices.',
  },
  {
    id: 10,
    title: 'Bachelor of Science in Materials Science and Engineering',
    duration: '4 years',
    description: 'This program explores the properties and applications of materials.',
  },
  // Add 10 more courses here
  {
    id: 11,
    title: 'Bachelor of Science in Industrial Engineering',
    duration: '4 years',
    description: 'This program focuses on optimizing industrial processes and systems.',
  },
  {
    id: 12,
    title: 'Bachelor of Science in Bioengineering',
    duration: '4 years',
    description: 'This program combines engineering with biology and healthcare.',
  },
  {
    id: 13,
    title: 'Bachelor of Science in Robotics Engineering',
    duration: '4 years',
    description: 'This program specializes in robotics and automation technologies.',
  },
  {
    id: 14,
    title: 'Bachelor of Science in Petroleum Engineering',
    duration: '4 years',
    description: 'This program explores the extraction and processing of petroleum resources.',
  },
  {
    id: 15,
    title: 'Bachelor of Science in Nuclear Engineering',
    duration: '4 years',
    description: 'This program specializes in nuclear energy and radiation technologies.',
  },
  // Add 5 more courses here
  {
    id: 16,
    title: 'Bachelor of Science in Software Development',
    duration: '4 years',
    description: 'This program focuses on software development and programming languages.',
  },
  {
    id: 17,
    title: 'Bachelor of Science in Data Science',
    duration: '4 years',
    description: 'This program emphasizes data analysis and machine learning.',
  },
  {
    id: 18,
    title: 'Bachelor of Science in Civil Infrastructure Management',
    duration: '4 years',
    description: 'This program covers infrastructure planning and management.',
  },
  {
    id: 19,
    title: 'Bachelor of Science in Biotechnology',
    duration: '4 years',
    description: 'This program combines biology with engineering for biotech applications.',
  },
  {
    id: 20,
    title: 'Bachelor of Science in Aerospace Systems Engineering',
    duration: '4 years',
    description: 'This program focuses on aerospace systems and technology.',
  },
];
  // Add more courses here


const Courses= () => {
  return (
    <div className="courses-page">
      <h1>Courses Offered</h1>
      <div className="course-list">
        {coursesData.map((course) => (
          <div className="course" key={course.id}>
            <h2>{course.title}</h2>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
