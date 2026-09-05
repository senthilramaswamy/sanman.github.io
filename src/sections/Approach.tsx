import type { Principle } from '@/lib/content';

interface ApproachProps {
  principles: Principle[];
}

export function Approach({ principles }: ApproachProps) {
  return (
    <section id="approach" className="bg-sand py-[110px] max-[600px]:py-[76px]">
      <div className="mx-auto max-w-site px-8 max-[600px]:px-[22px]">
        <div className="mb-16 max-w-[600px] animate-reveal">
          <div className="mb-[18px] h-px w-10 bg-gold" />
          <div className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.16em] text-gold">
            Approach
          </div>
          <h2 className="mb-4" style={{ fontSize: 'clamp(30px, 3.4vw, 42px)' }}>
            Own businesses. Not tickers.
          </h2>
          <p className="text-[17px] font-light text-ink-soft">
            <strong className="font-medium text-maroon-dark">Built for the long term.</strong> We study businesses deeply, engage directly with management teams and invest with a multi-year perspective. Business quality, management, cash flow and capital allocation come before market narratives.
          </p>
        </div>

        <div className="max-w-[760px] animate-reveal">
          {principles.map((p, i) => (
            <div
              key={p.position}
              className="grid gap-7 border-t border-line py-[38px] max-[600px]:grid-cols-1 max-[600px]:gap-[10px]"
              style={{ gridTemplateColumns: '88px 1fr' }}
            >
              <span
                className="font-serif italic font-normal leading-none text-gold"
                style={{ fontSize: '38px', opacity: 0.55 }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="mb-[10px] text-[21px]">{p.title}</h3>
                <p className="text-[15.5px] font-light text-ink-soft" style={{ maxWidth: '520px' }}>
                  {p.description}
                </p>
              </div>
            </div>
          ))}
          <div className="border-b border-line" />
        </div>
      </div>
    </section>
  );
}
