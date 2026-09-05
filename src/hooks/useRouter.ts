import { useEffect, useState, useCallback } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'company'; slug: string };

export function parsePath(pathname: string): Route {
  const companyMatch = pathname.match(/^\/company\/([\w-]+)$/);
  if (companyMatch) {
    return { name: 'company', slug: companyMatch[1] };
  }
  return { name: 'home' };
}

export function useRouter() {
  const [route, setRoute] = useState<Route>(() => parsePath(window.location.pathname));

  useEffect(() => {
    const onPop = () => setRoute(parsePath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((path: string) => {
    window.history.pushState(null, '', path);
    setRoute(parsePath(path));
    window.scrollTo(0, 0);
  }, []);

  return { route, navigate };
}
