const ContactSection = ({ darkMode }) => {
  const socialLinks = [
    { name: 'GitHub', icon: '/images/githublogo.png', url: 'https://github.com/ajlgg', isImage: true },
    { name: 'LinkedIn', icon: '/images/linkedin.png', url: 'https://www.linkedin.com/in/aj-luthra2003/', isImage: true },
    { name: 'Email', icon: '/images/gmaillogo.png', url: 'mailto:luthraa223@gmail.com', isImage: true }
  ]

  return (
    <section id="contact" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className={darkMode ? 'text-white' : 'text-gray-900'}>Contact </span>
          <span className="text-purple-600">Me!</span>
        </h2>
        <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Let's work together on creating something amazing!!!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className={`text-2xl font-bold mb-6 items-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Connect with me
            </h3>
            <p className={`text-left mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Thank you for your interest in getting in touch with me. If you have a specific question or comment, please feel free to email me directly at luthraa223@gmail.com.
               If you prefer to contact me on social media, you can connect with me using the social media links below!
            </p>
            
            <div className="space-y-4 mb-8">
              <div className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <img src="/images/email-icon.png" alt="Email" className="w-6 h-6 mr-3 object-contain" />
                luthraa223@gmail.com
              </div>
              <div className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <img src="/images/phone.png" alt="Phone" className="w-6 h-6 mr-3 object-contain" />
                +1 (484) 800-2825
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 items-center justify-center">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-125"
                  aria-label={social.name}
                >
                  <img src={social.icon} alt={social.name} className="w-12 h-12 object-contain"/>
                  <p className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Follow me on
                  </p>
                </a>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}

export default ContactSection
