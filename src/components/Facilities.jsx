import { useEffect, useRef } from 'react'

function Facilities() {
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

  const equipmentData = [
    {
      title: "SSL 9000 J Series",
      description: "72-channel large-format analog console with G Series computer automation and proprietary SuperAnalogue™ summing topology. Comprehensive dynamics processing with integrated Total Recall™ system."
    },
    {
      title: "Neve 1073 Collection",
      description: "Class A discrete transistor microphone preamplifiers with original Marinair transformers. Three-band inductor-based EQ featuring fixed 12kHz high-frequency shelf and continuously variable mid-frequency selection."
    },
    {
      title: "Studer A827",
      description: "Professional 24-track analog multitrack recorder with 2-inch tape format and Dolby SR noise reduction. Phase-coherent reproduce amplifiers with crystal-referenced capstan servo system."
    },
    {
      title: "Telefunken U47",
      description: "Large-diaphragm tube condenser microphones featuring original VF14 pentode tubes and M7 capsule systems. Vintage specimens with original Neumann Berlin manufacture and period-correct transformers."
    },
    {
      title: "Steinway Model D Concert Grand",
      description: "Hand-selected 8'11¾\" concert grand piano with individual hammer voicing and action regulation. Sitka spruce diaphragmatic soundboard with 17-layer hard rock maple rim construction in climate-controlled environment."
    },
    {
      title: "Acoustic Design",
      description: "Custom-engineered control room with non-parallel wall geometry and precision-calculated RT60 values. Broadband absorption panels, quadratic residue diffusers, and reference monitoring with time-aligned systems."
    }
  ]

  return (
    <div className="container">
      <section className="section">
        <div className="content-block fade-in" ref={sectionRef}>
          <h2 className="section-title">Facilities</h2>
          
          <div className="alpine-architecture">
            <h3>Alpine Acoustic Architecture</h3>
            <p>Three floors descend into solid granite, each engineered for distinct sonic purposes. Level One houses live recording chambers with natural stone reverb. Level Two contains control rooms with precision-controlled acoustics. Level Three provides mastering suites and climate-controlled archive storage. The mountain&apos;s mass eliminates external interference while granite walls deliver exceptional natural acoustics.</p>
          </div>
          
          <div className="equipment-grid">
            {equipmentData.map((item, index) => (
              <div key={index} className="equipment-item">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Facilities 