// Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E8EAF6] to-gray-100">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-4">
        <div className="flex flex-wrap justify-between">
          <div className="mb-8 w-full md:w-1/2 lg:w-1/4">
            <div className="text-md font-medium text-gray-900 uppercase">
              Namami Gange
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Namami Gange is a national mission that aims to rejuvenate and clean the Ganga river, one of the most sacred rivers in India. The mission focuses on various initiatives to reduce pollution, promote sustainable practices, and ensure the ecological well-being of the Ganga river basin.
            </p>

          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full md:w-1/2 lg:w-3/4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="#">
                  {" "}
                  About{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  Meet the Team{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  History{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  Careers{" "}
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Services</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="#">
                  {" "}
                  1on1 Coaching{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  Company Review{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  Accounts Review{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  HR Consulting{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  SEO Optimization{" "}
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium
">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="#">
                  {" "}
                  Contact{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  FAQs{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  Live Chat{" "}
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="#">
                  {" "}
                  Privacy Policy{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  Terms & Conditions{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  Returns Policy{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  Accessibility{" "}
                </a>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-800 text-center lg:text-left">© Namami Gange</p>
      </div>
    </footer>
  );
};

export default Footer;
