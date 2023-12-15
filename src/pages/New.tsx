// src/New.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../New.css';
import namamigange from '../assests/namamigange.png';
import chatbot from '../assests/chatbot 3 1.png';
import donation from '../assests/donation.jpg';


const New: React.FC = () => {
    return (
        <div
            className="h-screen bg-cover bg-center flex items-center"
            style={{ backgroundImage: 'url(https://t4.ftcdn.net/jpg/00/52/13/03/360_F_52130317_5uhFeokyuf9WOiOHewk4YPTMIe7G6b51.jpg)' }}
        >
            <div className="container mx-auto text-center">
                <h1 className="heading">Welcome to Namami Gange</h1>
                <div className="flex justify-center space-x-4">
                    {/* Card 1 */}
                    <Link to="/home" className="card">
                        <img src={namamigange} alt="Card 1" className="card-image" />
                        <div className="overlay">Namami Gange Website</div>
                    </Link>

                    {/* Card 2 */}
                    <Link to="/card2" className="card">
                        <img src={chatbot} alt="Card 2" className="card-image" />
                        <div className="overlay">Chacha Chaudhary ChatBot</div>
                    </Link>

                    {/* Card 3 */}
                    <Link to="/card3" className="card">
                        <img src={donation} alt="Card 3" className="card-image" />
                        <div className="overlay">Donation</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default New;
