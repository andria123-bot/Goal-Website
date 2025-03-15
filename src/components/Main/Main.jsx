import { useState } from 'react';
import './Main.css';
import lukaGurgenidze from '../../Images/mentors/lukaGurgendize.jpg';
import lukaTskvara from '../../Images/mentors/lukaTskvara.jpg';
import lashaLomidze from '../../Images/mentors/lashaLomidze.jpg';
import zurabKuwava from '../../Images/mentors/zurabKuwava.png'
import lukaMetreveli from '../../Images/mentors/lukaMetreveli.jpg'
import lashaKekutia from '../../Images/mentors/lashaKekutia.jpg'

const Main = () => {
  const [content, setContent] = useState('courses');

  const courses = [
    { course: 'Web Development', price: '190-490', teacher: "Lasha Lomidze :)" },
    { course: 'Game Development', price: '170', teacher: "Luka Gurgenidze"},
    { course: 'AI, Algorithms', price: '190-290', teacher: "Zurab Kutchava" },
    { course: 'Graphics Design', price: '190', teacher: "Lasha Kekutia" },
  ];

  const mentors = [
    { name: 'Lasha Lomidze⭐', role: 'Best Mentor ⭐', teacher: "Fullstack Mentor ⭐", photo: lashaLomidze },
    { name: 'Luka Gurgenidze', role: 'Game Developer', teacher: "Game Developer Teacher", photo: lukaGurgenidze },
    { name: 'Luka Tskvara', role: 'Fullstack Developer', teacher: "English Teacher", photo: lukaTskvara },
    { name: 'Zurab Kutchava', role: 'Algorithm Specialist', teacher: "AI, Algorithm Mentor", photo: zurabKuwava },
    { name: 'Luka Metreveli', role: 'English Mentor', teacher: "English Teacher", photo: lukaMetreveli },
    { name: 'Lasha Kekutia', role: 'Graphic Designer', teacher: "Graphic Design Mentor", photo: lashaKekutia },
  ];

  return (
    <section id='courses'>
      <div className='ParentDiv'>
        <div className='ChildDiv'>
          <div className='Navbar'>
            <h1 onClick={() => setContent('courses')}>Courses</h1>
            <h1 onClick={() => setContent('mentors')}>Mentors</h1>
          </div>


          {content === 'courses' && (
            <div>
              <hr className='HorizontalLine' />
              <h1 className='HeaderH1'>Here is our main courses</h1>
              <div className='CoursesGrid'>
                {courses.map((course, index) => (
                  <div key={index} className='CourseCard'>
                    <h2 className='CoursesH2'>Course: {course.course}</h2>
                    <h2 className='CoursesH2'>Price: {course.price}</h2>
                    <h2 className='CoursesH2'>Mentor: {course.teacher}</h2>
                  </div>
                ))}
              </div>
            </div>
          )}
          {content === 'mentors' && (
            <div>
              <hr className='HorizontalLine' />
              <h1 className='HeaderH1'>Here Is Our Specialist Mentors</h1>
              <div className='MentorGrid'>
                {mentors.map((mentor, index) => (
                  <div key={index} className='MentorCard'>
                    <img src={mentor.photo} alt={mentor.name} className='MentorPhoto' />
                    <h4>{mentor.name}</h4>
                    <p>{mentor.role}</p>
                    <p>{mentor.teacher}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <h1 className='GOA'>Goal Oriented Academy</h1>
        </div>
        <br />
      </div>
    </section>
  );
}

export default Main;