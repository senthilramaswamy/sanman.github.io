import { useMemo, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useScrollSpy, type NavItem } from '@/hooks/useScrollSpy';
import { useRouter } from '@/hooks/useRouter';
import { principles, people, companies, getCompanyBySlug } from '@/lib/content';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Approach } from '@/sections/Approach';
import { People } from '@/sections/People';
import { Research } from '@/sections/Research';
import { Contact } from '@/sections/Contact';
import { CompanyDetail } from '@/pages/CompanyDetail';

export default function App() {
  const { route, navigate } = useRouter();

  const navItems = useMemo<NavItem[]>(
    () => [
      { id: 'hero', label: 'Home' },
      { id: 'about', label: 'About Us' },
      { id: 'approach', label: 'Approach' },
      { id: 'people', label: 'People' },
      { id: 'research', label: 'Research' },
    ],
    []
  );

  const isHome = route.name === 'home';
  const activeId = useScrollSpy(isHome ? navItems : []);

  // Handle hash navigation when arriving at the home page via /#section
  useEffect(() => {
    if (route.name === 'home' && window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        });
      }
    } else if (route.name === 'home') {
      window.scrollTo(0, 0);
    }
  }, [route]);

  // Update document title for company pages
  useEffect(() => {
    if (route.name === 'home') {
      document.title = 'Sanjay Jain Family Office — Chennai, India';
    }
  }, [route]);

  if (route.name === 'company') {
    const company = getCompanyBySlug(route.slug);
    if (company) {
      return <CompanyDetail company={company} onNavigate={navigate} />;
    }
    // Unknown slug — redirect to home research section
    navigate('/#research');
    return null;
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navigation items={navItems} activeId={activeId} onNavigate={navigate} />
      <main>
        <Hero />
        <About />
        <Approach principles={principles} />
        <People people={people} />
        <Research companies={companies} onNavigate={navigate} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
