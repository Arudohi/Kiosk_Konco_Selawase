import { ShieldCheck, Heart, Users } from 'lucide-react'

const badges = [
  { icon: ShieldCheck, label: 'Kualitas Terjamin' },
  { icon: Heart, label: 'Perawatan Penuh Kasih' },
  { icon: Users, label: 'Komunitas Kicau Mania' },
]

export default function About() {
  return (
    <section
      id="tentang"
      className="py-20 lg:py-[120px]"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
        {/* Section Label */}
        <span
          className="inline-block font-body text-xs font-medium uppercase tracking-[0.1em]"
          style={{ color: 'var(--accent)' }}
        >
          Tentang Kami
        </span>

        {/* Section Heading */}
        <h2
          className="mt-4 font-heading font-semibold text-[1.875rem] lg:text-[2.5rem] leading-[1.2]"
          style={{ color: 'var(--text-primary)' }}
        >
          Lebih dari Sekedar Toko Burung
        </h2>

        {/* Decorative Divider */}
        <div
          className="w-[60px] h-[2px] mx-auto mt-8"
          style={{ backgroundColor: 'var(--accent)' }}
        />

        {/* About Text */}
        <p
          className="mt-6 font-body text-base lg:text-[1.125rem] leading-[1.75]"
          style={{ color: 'var(--text-secondary)' }}
        >
          Kios Burung Konco Selawase adalah tempat berkumpulnya para pecinta
          burung kicau. Kami memahami bahwa setiap burung adalah investasi hati
          dan hobi, oleh karena itu kami selalu menjaga kualitas dan kesehatan
          setiap koleksi kami. Dengan pengalaman bertahun-tahun, kami siap
          membantu Anda menemukan burung impian dan memberikan perlengkapan
          terbaik untuk perawatannya.
        </p>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 reveal reveal-delay-2">
          {badges.map((badge) => {
            const Icon = badge.icon
            return (
              <div key={badge.label} className="flex flex-col items-center gap-3">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl"
                  style={{ backgroundColor: 'var(--accent-light)' }}
                >
                  <Icon size={24} style={{ color: 'var(--accent)' }} />
                </div>
                <span
                  className="font-body text-xs font-medium"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {badge.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
