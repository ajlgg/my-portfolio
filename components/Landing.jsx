import { useState, useEffect, useRef } from 'react'

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false)
  const canvasRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
    
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Circle {
      constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.opacity = 0.6
        this.velocity = {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5
        }
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
        ctx.restore()
      }

      update() {
        this.x += this.velocity.x
        this.y += this.velocity.y

        if (this.radius > Math.random() * 20 + 40 && Math.random() > 0.98) {
          this.split()
        }
      }

      split() {
        if (this.radius < 40) return
        
        const newRadius = this.radius / 1.5
        circles.push(new Circle(
          this.x + (Math.random() - 0.5) * this.radius,
          this.y + (Math.random() - 0.5) * this.radius,
          newRadius,
          this.color
        ))
        circles.push(new Circle(
          this.x + (Math.random() - 0.5) * this.radius,
          this.y + (Math.random() - 0.5) * this.radius,
          newRadius,
          this.color
        ))
        
        const index = circles.indexOf(this)
        if (index > -1) circles.splice(index, 1)
      }
    }

    const circles = []
    const colors = ['rgba(147, 51, 234, 0.8)', 'rgba(59, 130, 246, 0.8)', 'rgba(236, 72, 153, 0.8)']

    for (let i = 0; i < 10; i++) {
      const radius = Math.random() * 80 + 60
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const color = colors[Math.floor(Math.random() * colors.length)]
      circles.push(new Circle(x, y, radius, color))
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      circles.forEach(circle => {
        circle.update()
        circle.draw()
      })
      
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'multiply' }}
      />

      <div className={`relative z-10 text-left px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
          AJ Luthra
        </h1>
        <p className="text-2xl md:text-3xl text-gray-200 mb-4 animate-fade-in delay-200">
          Senior B.S. Computer Science Student
        </p>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in delay-400">
          Hi, I'm AJ Luthra--I am a senior Computer Science student at Ursinus College with the strong desire to immerse myself with experiences in full-stack development. My hobbies include running, weightlifting, video games, reading, poker, and chess!
        </p>
        <div className="flex gap-4 justify-center animate-fade-in delay-600">
          <a 
            href="#experience" 
            className="px-8 py-3 bg-white text-purple-900 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            My Experience
          </a>
          <a 
            href="#projects" 
            className="px-8 py-3 bg-white text-purple-900 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all transform hover:scale-105"
          >
            Contact -
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}

export default Landing
