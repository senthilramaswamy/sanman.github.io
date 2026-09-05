export function About() {
  return (
    <section id="about" className="py-[110px] max-[600px]:py-[76px]">
      <div className="mx-auto max-w-site px-8 max-[600px]:px-[22px]">
        <div className="mx-auto max-w-[740px] text-center animate-reveal">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.1em] text-ink-soft">
            Public Equities · Fundamental Research · Long-Term Horizon
          </div>
          <h2 className="mb-[18px]" style={{ fontSize: 'clamp(27px, 3.4vw, 38px)' }}>
            Four decades. Two generations. One long-term philosophy.
          </h2>
          <p className="text-[17px] font-light text-ink-soft">
            A family investment journey shaped across changing businesses, industries and market cycles.
          </p>
        </div>
      </div>
    </section>
  );
}
