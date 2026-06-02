import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6281556415265"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[200] inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-body font-semibold text-[0.9375rem] text-black transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
      style={{
        backgroundColor: 'var(--accent)',
        boxShadow: 'var(--shadow-xl)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--accent-hover)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--accent)'
      }}
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">Hubungi Kami</span>
    </a>
  )
}
