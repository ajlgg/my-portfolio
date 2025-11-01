const EducationSection = ({ darkMode }) => {
  const education = [
    {
      institution: 'Conestoga High School',
      degree: 'High School Diploma',
      period: '2018 - 2022',
      name: 'Conestoga', icon: '/images/conestoga.png',
    },
    {
      institution: 'Ursinus College',
      degree: 'Bachelor of Science in Computer Science',
      period: '2022 - 2026',
      name: 'Ursinus College', icon: '/images/ursinus.png',

    }
  ]

  return (
    <section className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-left mb-4">
          <span className={darkMode ? 'text-white' : 'text-gray-900'}>Education</span>
        </h2>
        <p className={`text-left mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          My academic journey
        </p>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-xl transition-all duration-300 hover:shadow-2xl ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <img src={edu.icon} alt={edu.name} className="w-16 h-16 mb-2 object-contain" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  
                  <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {edu.institution}
                  </h3>
                  
                  <p className="text-lg text-purple-600 font-semibold">{edu.degree}</p>
                </div>
                <span className={`px-4 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0 ${
                  darkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'
                }`}>
                  {edu.period}
                </span>
              </div>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
