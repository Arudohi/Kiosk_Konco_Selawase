import { useEffect, useRef } from 'react'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const children = section.querySelectorAll('.hero-animate')
    children.forEach((child, i) => {
      const el = child as HTMLElement
      el.style.opacity = '0'
      el.style.transform = 'translateY(40px)'
      el.style.transition = `opacity 0.8s ease-out ${0.2 + i * 0.2}s, transform 0.8s ease-out ${0.2 + i * 0.2}s`
    })

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        children.forEach((child) => {
          const el = child as HTMLElement
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        })
      })
    })
  }, [])

  const scrollToCatalog = () => {
    const el = document.querySelector('#katalog')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen max-h-[800px] flex items-center overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Decorative leaf motif - desktop only */}
      <svg
        className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-[0.06] hidden md:block pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M180 180C180 180 160 140 120 120C80 100 40 100 20 80C0 60 0 20 0 20C0 20 40 30 70 50C100 70 120 100 140 130C160 160 180 180 180 180Z"
          fill="var(--accent)"
        />
        <path
          d="M160 200C160 200 145 165 110 145C75 125 40 120 25 100C10 80 15 50 15 50C15 50 50 60 75 80C100 100 115 125 130 150C145 175 160 200 160 200Z"
          fill="var(--accent)"
          opacity="0.5"
        />
      </svg>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Text Column */}
          <div className="flex-1 md:max-w-[55%] text-center md:text-left">
            {/* Badge */}
            <div className="hero-animate inline-block mb-6">
              <span
                className="inline-block px-4 py-2 rounded-full font-body text-xs font-medium uppercase tracking-[0.05em]"
                style={{
                  backgroundColor: 'var(--accent-light)',
                  color: 'var(--accent)',
                }}
              >
                Toko Burung Terpercaya
              </span>
            </div>

            {/* Headline */}
            <h1
              className="hero-animate font-heading font-bold text-[2.25rem] lg:text-[3.5rem] leading-[1.15]"
              style={{ color: 'var(--text-primary)' }}
            >
              Selamat datang di Kios Burung Konco Selawase
            </h1>

            {/* Subheadline */}
            <p
              className="hero-animate mt-6 font-body text-base lg:text-[1.125rem] leading-[1.75] max-w-[480px] mx-auto md:mx-0"
              style={{ color: 'var(--text-secondary)' }}
            >
              Tempatnya hobi dan persahabatan berawal. Kami hadir untuk memenuhi
              segala kebutuhan kicau mania dengan jaminan kualitas terbaik dan
              pelayanan ramah. Kunjungi kami untuk menemukan teman berbulu baru
              Anda!
            </p>

            {/* CTA Button */}
            <div className="hero-animate mt-8">
              <button
                onClick={scrollToCatalog}
                className="inline-flex items-center px-8 py-4 rounded-full font-body font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  backgroundColor: 'var(--accent)',
                  boxShadow: 'var(--shadow-md)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent-hover)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent)'
                }}
              >
                Lihat Koleksi
              </button>
            </div>
          </div>

          {/* Image Column */}
          <div className="flex-1 md:max-w-[45%] w-full">
            <div
              className="hero-animate hero-frame relative rounded-3xl overflow-hidden border-4 mx-auto max-w-[480px]"
              style={{
                borderColor: 'var(--accent-light)',
                backgroundColor: 'var(--bg-card)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <img
                src="/hero-bird.jpg"
                alt="Cucak Ijo - Burung kicau berwarna hijau cerah"
                className="w-full h-[360px] lg:h-[480px] object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
