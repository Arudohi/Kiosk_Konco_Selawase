export default function Footer() {
  return (
    <footer
      className="py-16 pb-8"
      style={{ backgroundColor: 'var(--bg-card-alt)' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Store Name */}
        <h3
          className="font-heading font-semibold text-[1.5rem]"
          style={{ color: 'var(--text-primary)' }}
        >
          Kios Burung Konco Selawase
        </h3>

        {/* Address & Phone */}
        <p
          className="mt-3 font-body text-[0.9375rem] leading-[1.6]"
          style={{ color: 'var(--text-secondary)' }}
        >
          Jl. RA Kartini No.35, Setono Pande, Kec. Kota, Kota Kediri, Jawa Timur 64129
          <br />
          Telp: +62 815-5641-5265
        </p>

        {/* Divider */}
        <div
          className="w-full h-px my-8 mx-auto max-w-[400px]"
          style={{ backgroundColor: 'var(--border)' }}
        />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="font-body text-xs"
            style={{ color: 'var(--text-muted)' }}
          >
            &copy; 2026 Kios Burung Konco Selawase
          </p>
          <p
            className="font-body text-xs"
            style={{ color: 'var(--text-muted)' }}
          >
            Made with care for bird lovers
          </p>
        </div>
      </div>
    </footer>
  )
}
