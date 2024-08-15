import  { useState, useEffect } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from local storage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Toggle theme and save preference to local storage
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <nav className={`flex flex-col md:flex-row items-center justify-between px-6 lg:px-44 h-auto md:h-20 ${darkMode ? 'bg-purple-950' : 'bg-purple-500'}`}>
        {/* Logo Section */}
        <div className="flex items-center justify-start w-full md:w-auto">
          <button
            type="button"
            className="bg-gradient-to-br w-8 h-8 bg-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm rounded-full text-center cursor-default my-6"
          ></button>
          <div className="flex items-center ml-3">
            <img
              src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png"
              width={50}
              height={70}
              alt="BookAI Logo"
            />
            <div className="ml-2 font-bold text-xl lg:text-2xl">BookAI</div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 w-full md:w-auto mt-4 md:mt-0">
          <a className="hover:text-purple-700" href="#">
            Features
          </a>
          <a className="hover:text-purple-700" href="#">
            How It Works
          </a>
          <a className="hover:text-purple-700" href="#">
            Roadmap
          </a>
          <a className="hover:text-purple-700" href="#">
            API
          </a>
          <a className="hover:text-purple-700" href="#">
            Price
          </a>
          <a className="hover:text-purple-700" href="#">
            Models
          </a>
        </div>

        {/* Button Container */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Login/Sign Up Button */}
          <button
            type="button"
            className={`bg-gradient-to-bl from-sky-400 to-purple-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none ${darkMode ? 'focus:ring-blue-800' : 'focus:ring-blue-400'} font-medium rounded-md text-sm px-4 py-2.5 text-center w-36 md:w-36 md:h-11`}
          >
            Login / Sign Up
          </button>

          {/* Theme Toggle Button */}
          <button
            type="button"
            className={`p-2 rounded-full ${darkMode ? 'bg-purple-600 text-white' : 'bg-gray-200 text-black'} focus:outline-none`}
            onClick={toggleTheme}
          >
            {darkMode ? '🌙' : '🌞'}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default App;
