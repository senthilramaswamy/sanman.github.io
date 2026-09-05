import { useEffect, useState } from 'react';

interface NavItem {
  id: string;
  label: string;
}

interface NavigationProps {
  items: NavItem[];
  activeId: string;
  onNavigate?: (path: string) => void;
}

export function Navigation({ items, activeId, onNavigate }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = items.filter((item) => item.id !== 'hero');

  const handleClick = (e: React.MouseEvent, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
      setMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/94 backdrop-blur-md">
      <div className="mx-auto flex max-w-site items-center justify-between px-8 py-5 max-[600px]:px-[22px] max-[600px]:py-4">
        {/* Brand */}
        <a
          href="/"
          onClick={(e) => handleClick(e, '/')}
          className="flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-maroon font-serif text-sm font-medium text-cream">
            SJ
          </div>
          <span className="font-serif text-base font-medium text-maroon-dark">
            Sanjay Jain Family Office
          </span>
        </a>

        {/* Desktop links */}
        {navLinks.length > 0 && (
          <nav className="hidden items-center gap-[34px] md:flex">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={(e) => handleClick(e, `/#${item.id}`)}
                className="group relative py-1 text-sm transition-colors"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-maroon transition-all duration-250 group-hover:w-full" />
              </a>
            ))}
            <a
              href="/#contact"
              onClick={(e) => handleClick(e, '/#contact')}
              className="border border-maroon px-[18px] py-[9px] font-mono text-xs text-maroon transition-colors hover:bg-maroon hover:text-cream"
              style={{ borderRadius: '2px' }}
            >
              Get in touch
            </a>
          </nav>
        )}

        {/* Mobile menu button */}
        {navLinks.length > 0 && (
          <button
            className="flex flex-col md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <span className="block h-[1.5px] w-[22px] bg-maroon-dark my-[5px]" />
            <span className="block h-[1.5px] w-[22px] bg-maroon-dark my-[5px]" />
            <span className="block h-[1.5px] w-[22px] bg-maroon-dark my-[5px]" />
          </button>
        )}
      </div>

      {/* Mobile dropdown */}
      {menuOpen && navLinks.length > 0 && (
        <nav className="absolute left-0 right-0 top-full flex flex-col gap-[18px] border-b border-line bg-cream px-[22px] py-5 md:hidden">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              onClick={(e) => handleClick(e, `/#${item.id}`)}
              className="text-sm"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={(e) => handleClick(e, '/#contact')}
            className="border border-maroon px-[18px] py-[9px] text-center font-mono text-xs text-maroon"
            style={{ borderRadius: '2px' }}
          >
            Get in touch
          </a>
        </nav>
      )}
    </header>
  );
}
