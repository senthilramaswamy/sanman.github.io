import { useEffect } from 'react';
import type { Company } from '@/lib/content';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface CompanyDetailProps {
  company: Company;
  onNavigate: (path: string) => void;
}

export function CompanyDetail({ company, onNavigate }: CompanyDetailProps) {
  useEffect(() => {
    document.title = `${company.company} — Sanjay Jain Family Office`;
    return () => {
      document.title = 'Sanjay Jain Family Office — Chennai, India';
    };
  }, [company.company]);

  return (
    <div className="min-h-screen bg-cream">
      <Navigation items={[]} activeId="" onNavigate={onNavigate} />
      <main>
        <section className="py-[110px] max-[600px]:py-[76px]">
          <div className="mx-auto max-w-[760px] px-8 max-[600px]:px-[22px]">
            <button
              onClick={() => onNavigate('/#research')}
              className="mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-ink-soft transition-colors hover:text-maroon animate-reveal"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to research
            </button>

            <div className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.16em] text-gold animate-reveal">
              {company.sector}
            </div>
            <h1
              className="mb-[18px] animate-reveal animate-reveal-delay-1"
              style={{ fontSize: 'clamp(33px, 4.4vw, 50px)' }}
            >
              {company.company}
            </h1>
            <p
              className="mb-[52px] animate-reveal animate-reveal-delay-2 font-serif text-[19px] font-normal italic text-ink-soft"
              style={{ maxWidth: '580px' }}
            >
              {company.angle}
            </p>

            <div className="border-t border-line" />

            <div className="py-[44px]">
              {company.writeup.map((para, i) => (
                <p
                  key={i}
                  className="mb-[22px] text-[16.5px] font-light leading-[1.8] text-ink"
                  style={{ maxWidth: '640px' }}
                >
                  {para}
                </p>
              ))}
            </div>

            {company.website && (
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-maroon px-[22px] py-[11px] text-[14px] font-medium text-maroon transition-colors hover:bg-maroon hover:text-cream"
                style={{ borderRadius: '2px' }}
              >
                Visit company
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}

            <div className="mt-[60px] border-t border-line pt-[26px]">
              <button
                onClick={() => onNavigate('/#research')}
                className="font-mono text-xs uppercase tracking-[0.1em] text-ink-soft transition-colors hover:text-maroon"
              >
                ← All companies / research
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
