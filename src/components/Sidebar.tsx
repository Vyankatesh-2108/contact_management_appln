import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle button for mobile view */}
      <button
        className="text-white bg-gray-800 p-2 fixed top-0 left-0 m-4 z-20 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:static lg:transform-none transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 h-full w-64 bg-gray-800 text-white z-10`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            className="text-gray-500 hover:text-gray-300 focus:outline-none lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/charts"
                className="block px-4 py-2 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                Charts
              </Link>
            </li>
            <li>
              <Link
                to="/maps"
                className="block px-4 py-2 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                Maps
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile view */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
