import * as React from 'react';

export function useMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const update = () => setIsMobile(typeof window !== 'undefined' && window.innerWidth < breakpoint);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [breakpoint]);
  return isMobile;
}
