const ExperienceCard = ({ darkMode }) => {
  const experiences = [
    {
      title: 'Ursinus Robotics Club President',
      company: 'College Club',
      period: '2025 - present',
      description: 'Revitalized the Robotics Club by growing membership, leading autonomous robotics projects with computer vision and embedded systems, securing funding and industry partnerships, and conducting STEM outreach through hands-on workshops for middle school students',
      achievements: [
        'Revitalized the Robotics Club by recruiting 10+ members',
        'Directed development of autonomous robotics projects,',
        'Coordinated funding proposals and industry partnerships,',
        'Led outreach by partnering with a local middle school to host a robotics workshop'
      ]
    }
  ]

  return (
    <section id="experience" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className={darkMode ? 'text-white' : 'text-gray-900'}>Work </span>
          <span className="text-purple-600">Experience</span>
        </h2>
        <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          My professional journey
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`p-8 rounded-xl transition-all duration-300 hover:shadow-2xl ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {exp.title}
                  </h3>
                  <p className="text-xl text-purple-600 font-semibold">{exp.company}</p>
                </div>
                <span className={`px-4 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0 ${
                  darkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'
                }`}>
                  {exp.period}
                </span>
              </div>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {exp.description}
              </p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className={`flex items-start ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="text-purple-600 mr-2">✓</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceCard
