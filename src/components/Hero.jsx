import { useEffect, useRef } from 'react'

function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    let ticking = false

    function updateParallax(e) {
      if (!ticking) {
        requestAnimationFrame(function() {
          const rect = hero.getBoundingClientRect()
          const x = (e.clientX - rect.left) / rect.width
          const y = (e.clientY - rect.top) / rect.height
          
          const moveX = (x - 0.5) * 10
          const moveY = (y - 0.5) * 10
          
          hero.style.transform = `translate(${moveX}px, ${moveY}px)`
          ticking = false
        })
        ticking = true
      }
    }

    function resetParallax() {
      hero.style.transform = 'translate(0, 0)'
    }

    if (hero) {
      hero.addEventListener('mousemove', updateParallax)
      hero.addEventListener('mouseleave', resetParallax)
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', updateParallax)
        hero.removeEventListener('mouseleave', resetParallax)
      }
    }
  }, [])

  return (
    <div className="hero" ref={heroRef}>
      <div className="hero-content">
        <h1 className="logo">Spectrum Studios</h1>
      </div>
    </div>
  )
}

export default Hero 