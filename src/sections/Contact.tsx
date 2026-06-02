import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Alamat',
    value: 'Jl. RA Kartini No.35, Setono Pande, Kec. Kota, Kota Kediri, Jawa Timur 64129',
    href: null,
  },
  {
    icon: Phone,
    label: 'Telepon',
    value: '+62 815-5641-5265',
    href: 'tel:+6281556415265',
  },
  {
    icon: Clock,
    label: 'Jam Operasional',
    value: '09:00 – 18:00',
    href: null,
  },
]

export default function Contact() {
  return (
    <section
      id="hubungi"
      className="py-20 lg:py-[120px]"
      style={{ backgroundColor: 'var(--bg-card-alt)' }}
    >
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="reveal">
          <span
            className="inline-block font-body text-xs font-medium uppercase tracking-[0.1em]"
            style={{ color: 'var(--accent)' }}
          >
            Hubungi Kami
          </span>
          <h2
            className="mt-4 font-heading font-semibold text-[1.875rem] lg:text-[2.5rem] leading-[1.2]"
            style={{ color: 'var(--text-primary)' }}
          >
            Kunjungi Kios Kami
          </h2>
        </div>

        {/* Contact Card */}
        <div
          className="mt-12 reveal reveal-delay-1 rounded-2xl border p-8 lg:p-12 text-left"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div className="space-y-7">
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <Icon size={20} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <p
                      className="font-body text-sm font-semibold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-body text-base underline-offset-2 hover:underline transition-all duration-200"
                        style={{ color: 'var(--accent)' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="font-body text-base leading-[1.6]"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-8 reveal reveal-delay-2">
          <a
            href="https://wa.me/6281556415265"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-body font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
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
            <MessageCircle size={20} />
            Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
