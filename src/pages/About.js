// import React from 'react';
// import '../styles/About.css';  // Relative path to About.css from About.jsconst About = () => {
//   return (
//     <div className="about-section">
//       <h1>About Us</h1>
//       <p>
//         Welcome to our website! We are a team of passionate individuals dedicated to delivering exceptional services and experiences. Our mission is to provide high-quality solutions that meet the needs of our clients and make a positive impact in the industry.
//       </p>

//       <h2>Our Story</h2>
//       <p>
//         We started our journey in [Year], with a vision to create something meaningful. Over the years, we have expanded our team and improved our processes, but our commitment to quality and customer satisfaction has remained our top priority.
//       </p>

//       <h2>Our Values</h2>
//       <ul>
//         <li>Innovation: Continuously improving and embracing new technologies.</li>
//         <li>Integrity: Conducting business with honesty and transparency.</li>
//         <li>Collaboration: Working together to achieve common goals.</li>
//         <li>Customer Focus: Always putting our clients first.</li>
//       </ul>

//       <h2>Meet the Team</h2>
//       <div className="team-members">
//         <div className="team-member">
//           <img src="/path-to-image/member1.jpg" alt="Team Member 1" />
//           <h3>John Doe</h3>
//           <p>Founder & CEO</p>
//         </div>
//         <div className="team-member">
//           <img src="/path-to-image/member2.jpg" alt="Team Member 2" />
//           <h3>Jane Smith</h3>
//           <p>Lead Developer</p>
//         </div>
//         <div className="team-member">
//           <img src="/path-to-image/member3.jpg" alt="Team Member 3" />
//           <h3>Emily Brown</h3>
//           <p>Marketing Manager</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from 'react';
const About = () => {  // Define the functional component properly
  return (
    <div className="about-section">
      <h1>About Us</h1>
      <p>Welcome to our website! We are a team of passionate individuals...</p>
      <h2>Our Story</h2>
      <p>We started our journey in [Year], with a vision to create something meaningful.</p>
      <h2>Our Values</h2>
      <ul>
        <li>Innovation</li>
        <li>Integrity</li>
        <li>Collaboration</li>
        <li>Customer Focus</li>
      </ul>
    </div>
  );
};

export default About;  // Don't forget to export the component
