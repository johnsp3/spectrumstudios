import { useEffect, useRef } from 'react'

function Statement() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const currentSection = sectionRef.current
    if (currentSection) {
      observer.observe(currentSection)
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection)
      }
    }
  }, [])

  return (
    <div className="container">
      <div className="divider"></div>
      
      <section className="section-minimal">
        <div className="statement fade-in" ref={sectionRef}>
          <h2>Carved into the granite heart of the Swiss Alps</h2>
          <p>At 2,100 meters elevation, Spectrum Studios operates within three subterranean levels of acoustic perfection. Natural stone chambers provide unparalleled isolation and organic reverb characteristics impossible to replicate in conventional studios. Since MMCI, our commitment to discretion and sonic excellence has earned the trust of Grammy winners, platinum artists, and industry legends.</p>
        </div>
      </section>
      
      <div className="divider"></div>
    </div>
  )
}

export default Statement 