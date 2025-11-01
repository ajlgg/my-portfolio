const Project = ({ darkMode }) => {
  const projects = [
    {
      title: 'TikTalk',
      description: 'TikTalk is a full-stack web application that generates tiktok-styled short-form videos after processing lecture mp4s/mp3s or pdfs notes.',
      image: '/images/tiktalk.png',
      tags: ['Firebase', 'Kafka', 'Docker', 'OpenAI Whisper', 'Google Gemini AI', 'Google Cloud', 'Google TTS', 'React', 'Next.js', 'Typescript', 'Flask', 'MoviePy'],
      link: 'https://github.com/ajlgg/TikTalk'
    },
    // {
    //   title: 'Task Management App',
    //   description: 'Collaborative task management tool with real-time updates',
    //   image: '📋',
    //   tags: ['React', 'Firebase', 'Tailwind CSS'],
    //   link: '#'
    // },
    // {
    //   title: 'Weather Dashboard',
    //   description: 'Beautiful weather app with location-based forecasts',
    //   image: '🌤️',
    //   tags: ['React', 'API Integration', 'CSS'],
    //   link: '#'
    // },
    // {
    //   title: 'Social Media Platform',
    //   description: 'Social networking platform with posts, comments, and likes',
    //   image: '📱',
    //   tags: ['React', 'Node.js', 'PostgreSQL'],
    //   link: '#'
    // }
  ]

  return (
    <section id="projects" className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className={darkMode ? 'text-white' : 'text-gray-900'}>Featured </span>
          <span className="text-purple-600">Projects</span>
        </h2>
        <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          My work
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <img src={project.image} alt={project.title} className="w-24 h-24 mx-auto mb-4 object-contain" />
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link}
                className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
