import Navbar from "../components/Navbar";
import Footer from "../components/Footer";// Assuming your component is named Carousel
import '../home.css';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>National Mission for Clean Ganga</h1>
          <p>Discover amazing places with us</p>

          {/* <button className="chat-button"> */}
          <div className="chat-button">
            <button onClick={() => {/* Add your chatbot functionality here */ }}>
              <img src="/src/assests/Screenshot 2023-12-10 at 4.47 1.png" alt="Chacha Chaudhary" />
              <span>Chat with Chacha Chaudhary</span>
            </button>
          </div>
        </div>
      </div>

        {/* Navbar */}
        <Navbar />

        {/* Places to Visit Section */}
        <div className="places-section">
          <h2>Places to Visit Along the Ganges</h2>
          <div className="card-container">
            {/* Card 1 */}
            <div className="card">
              <img src="/src/assests/rishikesh.jpg" alt="Place 1" />
              <h3>Rishikesh</h3>
              <p>Explore the spiritual vibes of Rishikesh along the Ganges.</p>
            </div>

            {/* Card 2 */}
            <div className="card">
              <img src="/src/assests/varanasi.jpg" alt="Place 2" />
              <h3>Varanasi</h3>
              <p>Witness the ancient rituals and culture in the heart of Varanasi.</p>
            </div>

            <div className="card">
              <img src="/src/assests/Haridwar.jpg" alt="Place 2" />
              <h3>Haridwar</h3>
              <p>It is one holy place from where the Ganga makes its way and it thus marked as religious.</p>
            </div>

            <div className="card">
              <img src="/src/assests/devpragay.jpg" alt="Place 2" />
              <h3>Devpragay</h3>
              <p>Witness to the confluence of the rivers Bhagirathi and Alakananda which merge to form the Ganges.</p>
            </div>

          </div>
        </div>

        {/* Purpose of Namami Gange Section */}
        <div className="purpose-section">
          <h2>Main Pillars of Namami Gange Programme</h2>
          <div className="pillar-container">
            <div className="pillar">
              <h3>Sewerage Treatment Infrastructure</h3>
              <p>Implementing advanced infrastructure for sewage treatment to prevent water pollution.</p>
            </div>

            <div className="pillar">
              <h3>River-Front Development</h3>
              <p>Enhancing the aesthetics and accessibility of the Ganges riverfront for public enjoyment.</p>
            </div>

            <div className="pillar">
              <h3>River-Surface Cleaning</h3>
              <p>Deploying measures to clean and maintain the surface of the Ganges river.</p>
            </div>

            <div className="pillar">
              <h3>Bio-Diversity</h3>
              <p>Preserving and promoting the diverse ecosystems along the Ganges for sustainable biodiversity.</p>
            </div>

            <div className="pillar">
              <h3>Afforestation</h3>
              <p>Planting trees along the Ganges to contribute to environmental conservation and river health.</p>
            </div>

            <div className="pillar">
              <h3>Public Awareness</h3>
              <p>Conducting campaigns and educational programs to raise public awareness about Ganga conservation.</p>
            </div>

            <div className="pillar">
              <h3>Industrial Effluent Monitoring</h3>
              <p>Implementing systems to monitor and control industrial effluents to prevent pollution.</p>
            </div>

            <div className="pillar">
              <h3>Ganga Gram</h3>
              <p>Developing and empowering villages along the Ganges as Ganga Grams for holistic river management.</p>
            </div>
          </div>
        </div>

        {/* Latest News Section */}
        <div className="latest-news-section">
          <h2>Latest News</h2>
          <div className="news-container">
            {/* News Card 1 */}
            <div className="news-card">
              <div className="news-front">
                <img src="/src/assests/donate.avif" alt="News Image 1" />
                <h3>Government Initiatives for Ganga Cleaning</h3>
              </div>
              <div className="news-back">
                <p>The government announces new initiatives to accelerate the cleaning process of the Ganga river.</p>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="news-card">
              <div className="news-front">
                <img src="/src/assests/donate.avif" alt="News Image 2" />
                <h3>Community Participation in Ganga Conservation</h3>
              </div>
              <div className="news-back">
                <p>Local communities actively engage in programs to conserve and protect the Ganges ecosystem.</p>
              </div>
            </div>

            {/* News Card 3 */}
            <div className="news-card">
              <div className="news-front">
                <img src="/src/assests/donate.avif" alt="News Image 3" />
                <h3>New Technology Deployed for Ganga Water Monitoring</h3>
              </div>
              <div className="news-back">
                <p>Cutting-edge technology is introduced for real-time monitoring of water quality in the Ganges river.</p>
              </div>
            </div>

            {/* News Card 4 */}
            <div className="news-card">
              <div className="news-front">
                <img src="/src/assests/donate.avif" alt="News Image 4" />
                <h3>International Collaboration for Ganga Rejuvenation</h3>
              </div>
              <div className="news-back">
                <p>Collaborative efforts with international organizations to rejuvenate and preserve the Ganga river.</p>
              </div>
            </div>

          </div>
      </div>
      
      {/* Details Section */}
<div className="details-section">
        <h2>Ganga River Details</h2>
        <div className="details-content">
          <p><strong>Cleaned Area:</strong> 2,500 sq km (Beautifully Cleaned)</p>
          <p><strong>Water Flow:</strong> 1,200,000 liters per second</p>
          <p><strong>River Height:</strong> 25 meters (Gloriously Majestic)</p>
          <p><strong>Water Temperature:</strong> 25°C (Perfectly Refreshing)</p>
          <p><strong>Flora and Fauna:</strong> Diverse ecosystem with over 200 species</p>
          <p><strong>Water Quality Index (WQI):</strong> 85 (Excellent)</p>
          <p><strong>Annual Rainfall in Ganga Basin:</strong> 1200 mm (Abundant Rainfall)</p>
          {/* Add more details as needed */}
        </div>
      </div>

        <div className="big-box">
          <div className="left-side">
            {/* Add your map image or content here */}
            <img
              src="/src/assests/gangaimage.png"  // Replace with the path to your map image
              alt="Map Image"
              style={{ width: "50%", height: "70%", borderRadius: "5px" }}
            />
          </div>
          <div className="right-side">
            <h2>Contact Us</h2>
            <p>
              National Mission for Clean Ganga<br />
              Ministry of Jal Shakti (Department of Water Resources, River Development & Ganga Rejuvenation)<br />
              Government of India<br />
              1st Floor, Major Dhyan Chand National Stadium<br />
              India Gate, New Delhi - 110002
            </p>
            <p className="contact-info">
              Phone: +91-011-23072900<br />
              Fax: +91-011-23072900<br />
              Email: admn(dot)nmcg(at)nic(dot)in
            </p>
          </div>
        </div>

        {/* Footer */}
        <Footer />

        <div className="chatbot-button">
          <button onClick={() => {/* Add your chatbot functionality here */ }}>
            <img src="/src/assests/Screenshot 2023-12-10 at 4.47 1.png" alt="Chatbot Icon" />
            <span>Chat with Chatbot</span>
          </button>
        </div>

      </>
      );
};

      export default Home;