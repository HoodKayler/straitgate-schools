import type { ReactNode } from 'react';

// The nursery route brings its own scoped design system (see playful.css),
// so it renders straight through the shared site chrome without extra fonts.
export default function NurseryLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
