import type { Company } from '@/lib/content';

interface ResearchProps {
  companies: Company[];
  onNavigate: (path: string) => void;
}

export function Research({ companies, onNavigate }: ResearchProps) {
  return (
    <section id="research" className="bg-sand py-[110px] max-[600px]:py-[76px]">
      <div className="mx-auto max-w-site px-8 max-[600px]:px-[22px]">
        <div className="mb-16 max-w-[600px] animate-reveal">
          <div className="mb-[18px] h-px w-10 bg-gold" />
          <div className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.16em] text-gold">
            Selected Companies / Research
          </div>
          <h2 style={{ fontSize: 'clamp(30px, 3.4vw, 42px)' }}>
            Selected companies / research.
          </h2>
        </div>

        <div className="animate-reveal">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b border-ink py-0 pb-4 text-left font-mono text-[11.5px] font-medium uppercase tracking-[0.1em] text-ink-soft max-[600px]:hidden">
                  Sector / Category
                </th>
                <th className="border-b border-ink py-0 pb-4 text-left font-mono text-[11.5px] font-medium uppercase tracking-[0.1em] text-ink-soft max-[600px]:hidden">
                  Company
                </th>
                <th className="border-b border-ink py-0 pb-4 text-left font-mono text-[11.5px] font-medium uppercase tracking-[0.1em] text-ink-soft max-[600px]:hidden">
                  Research Angle
                </th>
              </tr>
            </thead>
            <tbody>
              {companies.map((row) => (
                <tr
                  key={row.slug}
                  className="border-b border-line transition-colors hover:bg-maroon/3 max-[600px]:block max-[600px]:border-b max-[600px]:py-[22px]"
                >
                  <td className="border-b border-line py-[26px] pr-4 align-top font-mono text-[12.5px] text-gold max-[600px]:block max-[600px]:border-b-none max-[600px]:py-1" style={{ width: '180px' }}>
                    {row.sector}
                  </td>
                  <td className="border-b border-line py-[26px] pr-4 align-top font-serif text-[19px] font-medium text-maroon-dark max-[600px]:block max-[600px]:border-b-none max-[600px]:py-1" style={{ width: '220px' }}>
                    {row.writeup.length > 0 ? (
                      <a
                        href={`/company/${row.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate(`/company/${row.slug}`);
                        }}
                        className="group relative cursor-pointer transition-colors"
                      >
                        <span className="border-b border-maroon/30 transition-colors group-hover:border-maroon">
                          {row.company}
                        </span>
                      </a>
                    ) : (
                      row.company
                    )}
                  </td>
                  <td className="border-b border-line py-[26px] pr-4 align-top text-[14.5px] font-light text-ink-soft max-[600px]:block max-[600px]:border-b-none max-[600px]:py-1">
                    {row.angle}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-[26px] font-serif text-[13.5px] italic text-ink-soft">
            Detailed notes are shared directly in conversations with promoters and management teams.
          </p>
        </div>
      </div>
    </section>
  );
}
