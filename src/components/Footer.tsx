export function Footer() {
  return (
    <footer className="py-[46px]">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-4 px-8 max-[600px]:px-[22px]">
        <div className="flex items-center gap-3">
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-maroon font-serif text-[11px] font-medium text-cream">
            SJ
          </div>
          <span className="font-serif text-[14.5px] font-medium text-maroon-dark">
            Sanjay Jain Family Office
          </span>
        </div>
        <div className="font-mono text-xs text-ink-soft">
          CHENNAI, INDIA · LONG-TERM INVESTORS IN INDIAN BUSINESSES
        </div>
      </div>
    </footer>
  );
}
