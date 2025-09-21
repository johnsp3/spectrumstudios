import { useEffect, useRef } from 'react'

function Contact() {
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
      <div className="contact-section fade-in" ref={sectionRef}>
        <h2>Access by Appointment</h2>
        <div className="contact-info">
          <p>Access to the facility is arranged exclusively through authorized representation</p>
          <p>Swiss Alps, Switzerland</p>
        </div>
      </div>
    </div>
  )
}

export default Contact 