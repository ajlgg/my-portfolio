const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-8 px-4 text-center ${darkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
      <p className="mb-2">
        © {new Date().getFullYear()} AJ Portfolio. All rights reserved.
      </p>
      <p className="text-sm">
        Built with React, Vite, and Tailwind CSS
      </p>
    </footer>
  )
}

export default Footer
