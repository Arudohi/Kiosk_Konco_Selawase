import { Bird, Grid3X3, Wheat, HeartPulse } from 'lucide-react'

const categories = [
  {
    icon: Bird,
    title: 'Koleksi Burung Piharaan',
    description:
      'Temukan burung kicauan terbaik kami! Kami menyediakan Murai Batu, Murai Jambi, Kacer, Canary, Finches, dan Cucak Ijo pilihan. Semua burung dirawat dengan penuh kasih sayang dan dalam kondisi prima.',
    visual: (
      <svg
        className="absolute bottom-4 right-4 w-20 h-20 opacity-[0.15]"
        viewBox="0 0 80 80"
        fill="var(--accent)"
      >
        <path d="M60 55C55 50 50 45 40 42C30 39 20 40 15 38C10 36 8 30 8 30C8 30 18 32 28 36C38 40 45 48 52 55C59 62 65 65 65 65L60 55Z" />
        <circle cx="55" cy="25" r="8" />
        <path d="M50 30C50 30 52 35 55 35C58 35 60 32 60 30" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
      </svg>
    ),
    span: 'lg:col-span-7',
  },
  {
    icon: Grid3X3,
    title: 'Sangkar dan Kandang',
    description:
      'Berbagai pilihan sangkar berkualitas tinggi untuk kenyamanan dan keamanan burung Anda. Tersedia Sangkar Kawat, Sangkar Bambu, Sangkar Hias, dan Kandang Ternak dalam berbagai ukuran.',
    visual: (
      <svg
        className="absolute bottom-4 right-4 w-20 h-20 opacity-[0.12]"
        viewBox="0 0 80 80"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
      >
        <rect x="15" y="15" width="50" height="50" rx="4" />
        <line x1="30" y1="15" x2="30" y2="65" />
        <line x1="50" y1="15" x2="50" y2="65" />
        <line x1="15" y1="30" x2="65" y2="30" />
        <line x1="15" y1="50" x2="65" y2="50" />
      </svg>
    ),
    span: 'lg:col-span-5',
  },
  {
    icon: Wheat,
    title: 'Pakan Nutrisi Tinggi',
    description:
      'Stok pakan harian dan spesial yang segar dan bervariasi. Campuran Biji-bijian, Pelet Premium, Mealworm, dan Pakan Suplemen Alami untuk performa kicauan terbaik.',
    visual: (
      <svg
        className="absolute bottom-4 right-4 w-20 h-20 opacity-[0.12]"
        viewBox="0 0 80 80"
        fill="var(--accent)"
      >
        <path d="M40 70L40 30" stroke="var(--accent)" strokeWidth="3" fill="none" />
        <path d="M40 35C40 35 30 25 30 18C30 12 35 10 40 15C45 10 50 12 50 18C50 25 40 35 40 35Z" />
        <path d="M40 50C40 50 28 42 26 34C24 28 30 26 35 30C38 26 42 26 45 30C50 26 56 28 54 34C52 42 40 50 40 50Z" opacity="0.6" />
      </svg>
    ),
    span: 'lg:col-span-5',
  },
  {
    icon: HeartPulse,
    title: 'Vitamin dan Aksesoris',
    description:
      'Jaga kesehatan burung Anda dengan produk terbaik. Multivitamin harian, Suplemen Kicau, Vitamin Bulu, serta aksesoris seperti Tenggeran, Tempat Pakan & Minum, dan Mainan Burung.',
    visual: (
      <svg
        className="absolute bottom-4 right-4 w-20 h-20 opacity-[0.15]"
        viewBox="0 0 80 80"
        fill="var(--accent)"
      >
        <path d="M40 65C40 65 15 48 15 32C15 22 22 15 30 15C35 15 38 18 40 22C42 18 45 15 50 15C58 15 65 22 65 32C65 48 40 65 40 65Z" />
        <path d="M28 38L36 46L52 30" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    span: 'lg:col-span-7',
  },
]

export default function ProductCategories() {
  return (
    <section
      id="katalog"
      className="py-20 lg:py-[120px]"
      style={{ backgroundColor: 'var(--bg-card-alt)' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 reveal">
          <h2
            className="font-heading font-semibold text-[1.875rem] lg:text-[2.5rem] leading-[1.2]"
            style={{ color: 'var(--text-primary)' }}
          >
            Koleksi Kami
          </h2>
          <p
            className="mt-4 font-body text-base lg:text-[1.125rem] max-w-[560px] mx-auto leading-[1.75]"
            style={{ color: 'var(--text-secondary)' }}
          >
            Segala kebutuhan untuk kicau mania, dari burung berkualitas hingga
            perlengkapan terbaik
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.title}
                className={`${cat.span} reveal reveal-delay-${index + 1}`}
              >
                <div
                  className="bento-card relative h-full rounded-2xl border p-8 lg:p-10 overflow-hidden"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border)',
                  }}
                >
                  {/* Icon */}
                  <div
                    className="card-icon inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5"
                    style={{ backgroundColor: 'var(--accent-light)' }}
                  >
                    <Icon size={28} style={{ color: 'var(--accent)' }} />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-heading font-semibold text-[1.25rem] lg:text-[1.5rem] leading-[1.3]"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {cat.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="mt-3 font-body text-sm lg:text-base leading-[1.75]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {cat.description}
                  </p>

                  {/* Visual decoration */}
                  {cat.visual}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
