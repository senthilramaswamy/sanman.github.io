export function Hero() {
  return (
    <section
      className="text-cream"
      style={{
        backgroundImage: "linear-gradient(90deg, rgba(24, 14, 8, 0.88) 0%, rgba(24, 14, 8, 0.68) 42%, rgba(24, 14, 8, 0.22) 100%), url('/SFO_Hero.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        padding: '130px 0 108px',
      }}
    >
      <div className="mx-auto max-w-site px-8 max-[600px]:px-[22px]">
        <div className="mb-[26px] font-mono text-xs font-medium uppercase tracking-[0.16em] text-gold-light animate-reveal">
          Family Investment Office
        </div>
        <h1
          className="animate-reveal animate-reveal-delay-1 text-cream"
          style={{
            fontSize: 'clamp(34px, 5.2vw, 56px)',
            maxWidth: '820px',
            marginBottom: '22px',
          }}
        >
          Thinking like owners.<br />
          Investing with study, discipline and patience.
        </h1>
        <p
          className="animate-reveal animate-reveal-delay-2 font-light"
          style={{
            color: 'rgba(244,234,217,0.72)',
            fontSize: '18px',
            maxWidth: '480px',
            marginBottom: '40px',
          }}
        >
          Family capital focused on enduring Indian businesses.
        </p>
        <a
          href="#approach"
          className="animate-reveal animate-reveal-delay-3 inline-flex items-center gap-2 bg-gold px-[26px] py-[13px] text-[14.5px] font-medium text-nearblack transition-all hover:bg-gold-light hover:-translate-y-px"
          style={{ borderRadius: '2px' }}
        >
          Our approach →
        </a>
      </div>
    </section>
  );
}
