import React from 'react';
import '../about.css';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Navbar />
      {/* Left side: Small Image */}
      <div className="image-container">
        <img src="/src/assests/gangaaarti.jpg" alt="Small Ganga Image" />
      </div>

      {/* Right side: Information */}
      <div className="information-container">
        <h1 className="text-3xl font-bold mb-4">About Ganga and Namami Gange</h1>
        <p className="mb-4">
          The Ganges, often referred to as Ganga, is a sacred river originating from the Gangotri
          glacier in the Indian Himalayas. It flows through the plains, touching the lives of
          millions along its course.
        </p>
        <p className="mb-4">
          Namami Gange is a mission launched by the Government of India to rejuvenate the Ganga
          River. The initiative envisions restoring the purity of the Ganges and promoting
          sustainable development along its banks, addressing issues such as water pollution,
          sewage treatment, and conservation of the river ecosystem.
        </p>
        <p className="mb-4">
          The project includes the construction of sewage treatment plants, riverfront development,
          and initiatives to promote awareness about the importance of keeping the Ganga clean and
          sustainable.
        </p>
        <p className="mb-4">
          Local communities, environmentalists, and various stakeholders actively participate in
          Namami Gange, working towards the common goal of ensuring the Ganges remains a symbol of
          purity and spirituality for generations to come.
        </p>
        {/* Additional information in bullet points */}
        <ul className="list-disc ml-6">
          <li>Conservation of Ganga's biodiversity.</li>
          <li>Promotion of eco-friendly practices along the river.</li>
          <li>Community-driven initiatives for river cleanliness.</li>
          <li>More information point 1.</li>
          <li>More information point 2.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
