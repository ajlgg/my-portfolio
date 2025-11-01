const SkillsSection = ({ darkMode }) => {
  const baseUrl = import.meta.env.BASE_URL;
  const programmingLanguages = [
    { name: 'JavaScript', icon: `${baseUrl}images/javascript.png` },
    { name: 'Java', icon: `${baseUrl}images/java.png`},
    { name: 'TypeScript', icon: `${baseUrl}images/typescript.png` },
    { name: 'Python', icon: `${baseUrl}images/python.png` },
    { name: 'HTML/CSS', icon: `${baseUrl}images/htmlcss.png`},
    { name: 'C', icon: `${baseUrl}images/c.png` },
    { name: 'C++', icon: `${baseUrl}images/c++.png` }
  ]

  const frameworksAndLibraries = [
    { name: 'React', icon: `${baseUrl}images/react.png`},
    { name: 'Node.js', icon: `${baseUrl}images/nodejs.png`},
    { name: 'Next.js', icon: `${baseUrl}images/nextjs.png`},
    { name: 'Tailwind CSS', icon: `${baseUrl}images/tailwind.png` },
    { name: 'Flask', icon: `${baseUrl}images/flask.png` },
    { name: 'Express', icon: `${baseUrl}images/express.png` }
  ]

  const toolsAndDatabases = [
    { name: 'Git', icon: `${baseUrl}images/git.png` },
    { name: 'Docker', icon: `${baseUrl}images/docker.png` },
    { name: 'Kafka', icon: `${baseUrl}images/kafka.png` },
    { name: 'Redis', icon: `${baseUrl}images/redis.png` },
    { name: 'PostgreSQL', icon: `${baseUrl}images/postgresql.png` },
    { name: 'Firebase', icon: `${baseUrl}images/firebase.png` },
    { name: 'MySQL', icon: `${baseUrl}images/mysql.png` },
    // { name: 'MongoDB', icon: `${baseUrl}images/mongodb.png` },
  ]

  return (
    <section id="Skills" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-left mb-16">
          <span className={darkMode ? 'text-white' : 'text-gray-900'}>My </span>
          <span className="text-purple-600">Skills</span>
        </h2>

        <div className="space-y-12">
          {/* Programming Languages Container */}
          <div className="group">
            <h3 className={`text-2xl font-bold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Programming Languages
            </h3>
            <div className="flex flex-box justify-center">
              <div className="flex flex-wrap gap-6 justify-center">
                {programmingLanguages.map((skill, index) => (
                  <div 
                    key={index} 
                    className={`p-6 rounded-lg text-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg cursor-pointer ${
                      darkMode ? 'bg-gray-700 hover:bg-green-600' : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <img src={skill.icon} alt={skill.name} className="w-16 h-16 mx-auto mb-2 object-contain" />
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

          {/* Frameworks and Libraries Container */}
          <div className="group">
            <h3 className={`text-2xl font-bold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Frameworks and Libraries
            </h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {frameworksAndLibraries.map((skill, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-lg text-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg cursor-pointer ${
                    darkMode ? 'bg-gray-700 hover:bg-green-600' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <img src={skill.icon} alt={skill.name} className="w-16 h-16 mx-auto mb-2 object-contain" />
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Tools and Databases Container */}
          <div className="group">
            <h3 className={`text-2xl font-bold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Tools and Databases
            </h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {toolsAndDatabases.map((skill, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-lg text-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg cursor-pointer ${
                    darkMode ? 'bg-gray-700 hover:bg-green-600' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <img src={skill.icon} alt={skill.name} className="w-16 h-16 mx-auto mb-2 object-contain" />
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
