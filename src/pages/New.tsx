import React from 'react';
import { Link } from 'react-router-dom';
import '../New.css';
import domain from '../assests/domain 1.png';
import heart from '../assests/heart 1.png';
import virtualreality from '../assests/virtual-reality 1.png';
import Frame from '../assests/Frame 95 1.png';

const New: React.FC = () => {
    return (
        <div className="h-screen bg-cover bg-center flex flex-col items-center">

            <div className="flex space-x-4">
                {/* Card 1 */}
                <Link to="/home" className="newcard">
                    <div className="newcard-content">
                        <img src={domain} alt="Card 1" className="newcard-image" />
                        <p>Namami Gange Website</p>
                    </div>
                </Link>

                {/* Card 2 */}
                <Link to="/card2" className="newcard">
                    <div className="newcard-content">
                        <img src={Frame} alt="Card 2" className="newcard-image" />
                        <p>Chat With Chatty Chacha chuadhary</p>
                    </div>
                </Link>

                {/* Card 3 */}
                <Link to="/card3" className="newcard">
                    <div className="newcard-content">
                        <img src={heart} alt="Card 3" className="newcard-image" />
                        <p>Donate for safe and clean ganga</p>
                    </div>
                </Link>

                {/* Card 4 */}
                <a href="https://shreyans2004.github.io/competetive-programming-part6/" className="newcard" target="_blank" rel="noopener noreferrer">
                    <div className="newcard-content">
                        <img src={virtualreality} alt="Card 4" className="newcard-image" />
                        <p>Virtual Tour</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default New;
